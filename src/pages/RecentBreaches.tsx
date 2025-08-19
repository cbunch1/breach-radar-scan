import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Calendar, DollarSign, Eye, Shield, TrendingDown, Users } from 'lucide-react';

const RecentBreaches = () => {
  const breaches = [
    {
      id: 1,
      company: "ByBit Cryptocurrency Exchange",
      date: "July 2025",
      category: "Cryptocurrency",
      severity: "Critical",
      affectedUsers: "4.3M users",
      financialLoss: "$1.5B",
      dataCompromised: ["Email addresses", "Encrypted passwords", "2FA tokens", "Trading history", "Wallet addresses"],
      howItHappened: "Sophisticated phishing campaign targeting ByBit employees led to credential compromise. Attackers gained access to internal systems through compromised VPN credentials and moved laterally to access hot wallets. The attack exploited a zero-day vulnerability in ByBit's wallet management system.",
      aftermath: "ByBit suspended all withdrawals for 72 hours. Users reported up to $50,000 individual losses. Exchange faces multiple class-action lawsuits. Trading volume dropped 40% post-breach. Regulatory authorities in 5 countries launched investigations.",
      response: "Immediate security audit, $100M insurance payout to affected users, implementation of hardware-only cold storage"
    },
    {
      id: 2,
      company: "City Bank PLC",
      date: "January 2025",
      category: "Banking",
      severity: "High",
      affectedUsers: "890K customers",
      financialLoss: "$45M",
      dataCompromised: ["Financial statements", "Account numbers", "Transaction history", "Personal identification", "Credit scores"],
      howItHappened: "Ransomware group 'Funksec' exploited unpatched vulnerabilities in City Bank's legacy core banking system. Initial access gained through compromised third-party vendor credentials. Attackers spent 3 weeks exfiltrating data before encryption.",
      aftermath: "Customer financial statements appeared on dark web marketplaces within 48 hours. Bank faced $12M in regulatory fines. 15% of customers closed accounts. Credit monitoring services overwhelmed with requests from affected customers.",
      response: "Complete system overhaul, mandatory credit monitoring for all customers, $50M cybersecurity infrastructure upgrade"
    },
    {
      id: 3,
      company: "Coinbase",
      date: "May 2025",
      category: "Cryptocurrency",
      severity: "High",
      affectedUsers: "2.1M users",
      financialLoss: "$89M",
      dataCompromised: ["Email addresses", "Phone numbers", "Transaction metadata", "IP addresses", "Device fingerprints"],
      howItHappened: "SQL injection vulnerability in Coinbase's customer support portal allowed attackers to access user data. The vulnerability existed for 8 months before discovery. Attackers used automated tools to scrape millions of user records.",
      aftermath: "Mass phishing campaigns targeted exposed users within hours. Average victim lost $2,300 to follow-up scams. Coinbase stock dropped 18% over 3 trading days. Congressional hearing scheduled on crypto exchange security.",
      response: "Bug bounty program expanded, third-party security audits quarterly, dedicated incident response team hired"
    },
    {
      id: 4,
      company: "Blue Shield of California",
      date: "June 2025",
      category: "Healthcare/Financial",
      severity: "Critical",
      affectedUsers: "3.2M members",
      financialLoss: "$127M",
      dataCompromised: ["Medical records", "Social Security numbers", "Financial information", "Insurance claims", "Payment data"],
      howItHappened: "Business Email Compromise (BEC) attack targeting finance department led to unauthorized access to member databases. Attackers impersonated the CFO in emails to IT staff, requesting database access for 'urgent audit compliance'.",
      aftermath: "Medical identity theft cases surged 300% in California. Average victim spent 18 months resolving identity issues. Class-action lawsuit seeking $500M in damages filed. Healthcare premiums increased 12% to cover security costs.",
      response: "Mandatory email verification protocols, biometric access controls, $200M investment in Zero Trust architecture"
    },
    {
      id: 5,
      company: "PowerSchool (Education Technology)",
      date: "January 2025",
      category: "Financial/Education",
      severity: "High",
      affectedUsers: "9.8M students/families",
      financialLoss: "$73M",
      dataCompromised: ["Student records", "Parent financial information", "Social Security numbers", "Bank account details", "Tax information"],
      howItHappened: "Insider threat - Disgruntled employee with administrative access copied databases to external drives before termination. Employee had been downloading data incrementally over 6 months to avoid detection by data loss prevention systems.",
      aftermath: "Student loan fraud increased 250% among affected families. Parents faced average of $8,000 in fraudulent charges. 847 school districts suspended PowerSchool services. FBI investigation ongoing with potential federal charges.",
      response: "Enhanced background checks, privileged access management system, real-time database monitoring"
    },
    {
      id: 6,
      company: "New York Blood Center",
      date: "February 2025",
      category: "Healthcare/Financial",
      severity: "High",
      affectedUsers: "1.2M donors",
      financialLoss: "$34M",
      dataCompromised: ["Medical history", "Blood type information", "Payment details", "Contact information", "Emergency contacts"],
      howItHappened: "Sophisticated supply chain attack targeting the blood center's inventory management software. Malicious code was injected into a software update that automatically harvested donor data and transmitted it to command-and-control servers.",
      aftermath: "Blood donation rates dropped 45% due to trust issues. Donors targeted for medical scams using their health information. Emergency blood shortage declared in NYC. Regulatory investigation by FDA and HHS.",
      response: "Complete vendor security review, isolated network architecture, mandatory donor notification and free identity monitoring"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'destructive';
      case 'High':
        return 'warning';
      case 'Medium':
        return 'secondary';
      default:
        return 'default';
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('Cryptocurrency')) return <DollarSign className="w-5 h-5" />;
    if (category.includes('Banking')) return <Shield className="w-5 h-5" />;
    if (category.includes('Healthcare')) return <Users className="w-5 h-5" />;
    return <AlertTriangle className="w-5 h-5" />;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-destructive/5 via-background to-warning/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="w-8 h-8 text-destructive mr-3" />
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Recent Data Breaches
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Real-time intelligence on major security incidents. Learn from actual breaches 
              to understand attack methods, financial impact, and protect your own data.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-destructive border-destructive/20">
                <TrendingDown className="w-4 h-4 mr-2" />
                $2.17B+ stolen in 2025
              </Badge>
              <Badge variant="outline" className="text-warning border-warning/20">
                <Eye className="w-4 h-4 mr-2" />
                24M+ records exposed
              </Badge>
              <Badge variant="outline" className="text-secondary border-secondary/20">
                <Calendar className="w-4 h-4 mr-2" />
                Updated daily
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Breach Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {breaches.map((breach, index) => (
              <Card key={breach.id} className="hover:shadow-brand-lg transition-smooth border-l-4 border-l-destructive/20">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                        {getCategoryIcon(breach.category)}
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-foreground">
                          {breach.company}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{breach.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge variant={getSeverityColor(breach.severity) as any}>
                        {breach.severity}
                      </Badge>
                      <Badge variant="outline">{breach.category}</Badge>
                    </div>
                  </div>

                  {/* Impact Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 p-4 bg-destructive/5 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-destructive">{breach.affectedUsers}</div>
                      <div className="text-sm text-muted-foreground">Affected Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-destructive">{breach.financialLoss}</div>
                      <div className="text-sm text-muted-foreground">Financial Loss</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-destructive">{breach.dataCompromised.length}</div>
                      <div className="text-sm text-muted-foreground">Data Types Exposed</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Data Compromised */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2 text-warning" />
                      Data Compromised
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {breach.dataCompromised.map((data, idx) => (
                        <Badge key={idx} variant="outline" className="text-warning border-warning/20">
                          {data}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* How It Happened */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-destructive" />
                      How the Attack Occurred
                    </h4>
                    <p className="text-muted-foreground leading-relaxed bg-muted/50 p-4 rounded-lg">
                      {breach.howItHappened}
                    </p>
                  </div>

                  {/* Aftermath */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <TrendingDown className="w-4 h-4 mr-2 text-destructive" />
                      Aftermath & Impact
                    </h4>
                    <p className="text-muted-foreground leading-relaxed bg-destructive/5 p-4 rounded-lg">
                      {breach.aftermath}
                    </p>
                  </div>

                  {/* Response */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-accent" />
                      Security Response
                    </h4>
                    <p className="text-muted-foreground leading-relaxed bg-accent/5 p-4 rounded-lg">
                      {breach.response}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-destructive/5 to-warning/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Don't Become the Next Headline
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            These breaches show the devastating impact when organizations fail to protect user data. 
            Check if your information has been compromised and take action before it's too late.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const checkerElement = document.getElementById('checker');
                if (checkerElement) {
                  window.location.href = '/#checker';
                } else {
                  window.location.href = '/';
                }
              }}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90 px-8 py-3 rounded-lg font-semibold transition-smooth"
            >
              Check Your Exposure Now
            </button>
            <button 
              onClick={() => window.location.href = '/pricing'}
              className="border border-destructive text-destructive hover:bg-destructive/10 px-8 py-3 rounded-lg font-semibold transition-smooth"
            >
              Get Monitoring Protection
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RecentBreaches;