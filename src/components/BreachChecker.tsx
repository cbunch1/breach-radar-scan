import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle, Loader2, Eye, Lock, Radar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface BreachResult {
  email: string;
  found: boolean;
  count: number;
  breaches: Array<{
    name: string;
    date: string;
    types: string[];
    notes: string;
  }>;
}

interface ChecklistItem {
  id: string;
  title: string;
  completed: boolean;
}

const BreachChecker: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<BreachResult | null>(null);
  const [isUsingMockData, setIsUsingMockData] = useState(false);
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    { id: 'passwords', title: 'Change passwords for affected accounts', completed: false },
    { id: 'mfa', title: 'Enable two-factor authentication', completed: false },
    { id: 'forwarding', title: 'Check email forwarding rules', completed: false },
    { id: 'monitoring', title: 'Set up ongoing monitoring', completed: false },
  ]);
  const { toast } = useToast();

  // Mock data generator for fallback
  const generateMockResult = (email: string): BreachResult => {
    const hash = btoa(email).slice(0, 8);
    const hashNum = parseInt(hash.replace(/[^0-9]/g, '').slice(0, 4) || '0');
    
    if (hashNum % 3 === 0) {
      return {
        email,
        found: false,
        count: 0,
        breaches: []
      };
    }

    const mockBreaches = [
      { name: 'ExampleCorp 2023', date: '2023-11-02', types: ['email', 'hashed_password'], notes: 'Change password + enable MFA' },
      { name: 'AppHub 2024', date: '2024-06-18', types: ['email', 'username'], notes: 'Beware targeted phishing' },
      { name: 'ShopList 2022', date: '2022-04-10', types: ['email', 'phone'], notes: 'Update SMS recovery' },
      { name: 'TechService 2023', date: '2023-03-15', types: ['email', 'profile_data'], notes: 'Monitor for identity theft' },
      { name: 'CloudApp 2024', date: '2024-01-08', types: ['email', 'encrypted_password'], notes: 'Check connected services' },
    ];

    const count = (hashNum % 4) + 1;
    return {
      email,
      found: true,
      count,
      breaches: mockBreaches.slice(0, count)
    };
  };

  const handleCheck = async () => {
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    setResult(null);
    setIsUsingMockData(false);
    
    try {
      // Try to use the Supabase Edge Function for real Have I Been Pwned data
      const { data, error } = await supabase.functions.invoke('check-breach', {
        body: { email }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(`Function call failed: ${error.message}`);
      } else {
        setResult(data);
        setIsUsingMockData(false);
        
        toast({
          title: "Scan complete",
          description: `Checked ${email} against Have I Been Pwned database.`,
        });
      }
    } catch (error) {
      console.error('Error checking breaches:', error);
      
      // Fall back to mock data on any error
      await new Promise(resolve => setTimeout(resolve, 1500));
      const mockResult = generateMockResult(email);
      setResult(mockResult);
      setIsUsingMockData(true);
      
      toast({
        title: "Scan complete (Demo Mode)",
        description: "Using demo data. Check console for API details.",
        variant: "default",
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleChecklistItem = (id: string) => {
    setChecklist(prev => 
      prev.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background via-surface to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Check Your Exposure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enter your email to see if it appears in known data breach datasets. 
            We'll provide clear next steps to secure your accounts.
          </p>
        </div>

        {/* Privacy Notice */}
        <Card className="mb-8 border-accent/20 bg-accent/5">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">Your privacy matters</p>
                <p>
                  We never store passwords. Email used only to return results. 
                  Powered by Have I Been Pwned API. <strong>GDPR/CCPA-friendly.</strong>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Email Input */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-base"
                  disabled={loading}
                  onKeyPress={(e) => e.key === 'Enter' && handleCheck()}
                />
              </div>
              <Button
                onClick={handleCheck}
                disabled={!email || !email.includes('@') || loading}
                variant="cta"
                size="lg"
                className="sm:w-auto w-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Checking...
                  </>
                ) : (
                  <>
                    <Radar className="w-4 h-4 mr-2" />
                    Scan for Breaches
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Loading State */}
        {loading && (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary mb-4" />
                <p className="text-muted-foreground">
                  Checking Have I Been Pwned database...
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results */}
        {result && !loading && (
          <div className="space-y-6">
            {isUsingMockData && (
              <Badge variant="demo" className="mb-4">
                Demo Mode - Using sample data (Have I Been Pwned API integration available)
              </Badge>
            )}

            {result.found ? (
              <>
                {/* Found Exposures */}
                <Card className="border-warning/20 bg-warning/5">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <AlertTriangle className="w-5 h-5 text-warning" />
                      <span>Exposures Found</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Your email appears in <strong>{result.count}</strong> breach dataset(s). 
                      These entries indicate where your email was observed.
                    </p>

                    {/* Breach Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 font-medium">Breach</th>
                            <th className="text-left py-2 font-medium">Date</th>
                            <th className="text-left py-2 font-medium">Data Types</th>
                            <th className="text-left py-2 font-medium">Risk Notes</th>
                          </tr>
                        </thead>
                        <tbody>
                          {result.breaches.map((breach, index) => (
                            <tr key={index} className="border-b border-border/50">
                              <td className="py-3 font-medium">{breach.name}</td>
                              <td className="py-3 text-muted-foreground">{breach.date}</td>
                              <td className="py-3">
                                <div className="flex flex-wrap gap-1">
                                  {breach.types.map((type) => (
                                    <Badge key={type} variant="outline" className="text-xs">
                                      {type}
                                    </Badge>
                                  ))}
                                </div>
                              </td>
                              <td className="py-3 text-muted-foreground text-xs">
                                {breach.notes}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                {/* Action Checklist */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Recommended Actions</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-6">
                      Start by changing passwords and enabling MFA. Check off each item as you complete it.
                    </p>

                    <div className="space-y-3">
                      {checklist.map((item) => (
                        <div
                          key={item.id}
                          className={cn(
                            'flex items-center space-x-3 p-3 rounded-lg border transition-smooth cursor-pointer',
                            item.completed
                              ? 'bg-success/5 border-success/20'
                              : 'bg-muted/30 border-border hover:bg-muted/50'
                          )}
                          onClick={() => toggleChecklistItem(item.id)}
                        >
                          <div
                            className={cn(
                              'w-5 h-5 rounded border-2 flex items-center justify-center transition-smooth',
                              item.completed
                                ? 'bg-success border-success'
                                : 'border-muted-foreground hover:border-accent'
                            )}
                          >
                            {item.completed && (
                              <CheckCircle className="w-3 h-3 text-accent-foreground fill-current" />
                            )}
                          </div>
                          <span
                            className={cn(
                              'text-sm font-medium transition-smooth',
                              item.completed
                                ? 'text-success line-through'
                                : 'text-foreground'
                            )}
                          >
                            {item.title}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <Button variant="hero" size="lg" className="w-full">
                        Set Up Ongoing Monitoring
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <>
                {/* No Exposures */}
                <Card className="border-success/20 bg-success/5">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span>No Exposures Found</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      We didn't find this email in the breach datasets we monitor.
                    </p>
                    <div className="bg-warning/10 border border-warning/20 rounded-lg p-4 mb-6">
                      <p className="text-sm text-warning-foreground">
                        <strong>Important:</strong> This doesn't guarantee zero risk. 
                        New breaches appear regularly, and some may not be in our current datasets.
                      </p>
                    </div>
                    <Button variant="cta" size="lg" className="w-full">
                      Enable Monitoring & Alerts
                    </Button>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default BreachChecker;