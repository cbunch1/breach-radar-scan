import React from 'react';
import Layout from '@/components/Layout';
import BreachChecker from '@/components/BreachChecker';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Eye, Lock, Radar, ArrowRight, CheckCircle, Globe, Users, Clock, AlertTriangle, DollarSign, Award, TrendingUp } from 'lucide-react';


const Index = () => {
  const howItWorksSteps = [
    {
      icon: <Shield className="w-6 h-6 text-accent" />,
      title: "Enter your email",
      description: "No password required. We only check your email against breach datasets."
    },
    {
      icon: <Radar className="w-6 h-6 text-accent" />,
      title: "We search datasets",
      description: "Scan known breach databases and OSINT sources for your email."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent" />,
      title: "Get clear results",
      description: "Receive a risk summary with specific steps to secure your accounts."
    }
  ];

  const threatStats = [
    {
      stat: "$4.88M",
      description: "Average cost of a data breach in 2025"
    },
    {
      stat: "95%",
      description: "Of breaches involve human error"
    },
    {
      stat: "204 days",
      description: "Average time to detect a breach in 2025"
    },
    {
      stat: "35 billion",
      description: "Records exposed in 2025"
    }
  ];

  const maliciousActorMethods = [
    {
      icon: <Lock className="w-6 h-6 text-destructive" />,
      title: "Credential Stuffing",
      description: "Using leaked passwords to break into other accounts across different services",
      cost: "Causes 61% of all data breaches"
    },
    {
      icon: <Eye className="w-6 h-6 text-destructive" />,
      title: "Identity Theft",
      description: "Combining personal data from multiple breaches to impersonate victims",
      cost: "Average victim loses $1,100"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-destructive" />,
      title: "Targeted Phishing",
      description: "Using breach data to create convincing phishing campaigns",
      cost: "95% of successful attacks"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-destructive" />,
      title: "Financial Fraud",
      description: "Direct account takeover leading to unauthorized transactions",
      cost: "$5.8B lost annually"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Security Expertise",
      description: "Led by certified security professionals with 10+ years incident response experience"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Real-Time Monitoring",
      description: "Immediate alerts when your data appears in new breaches - not months later"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Proactive Protection",
      description: "Actionable security guidance to prevent attacks before they happen"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Comprehensive Coverage",
      description: "Monitor dark web, OSINT sources, and public breach databases continuously"
    }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Security First",
      description: "Every decision prioritizes the protection of your data and privacy"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Transparency",
      description: "Clear communication about what we do, how we do it, and why it matters"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Expertise",
      description: "Deep cybersecurity knowledge applied to real-world protection challenges"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Accessibility",
      description: "Making enterprise-grade security insights available to everyone"
    }
  ];

  const team = [];

  const trustSignals = [
    "We never store data",
    "Email used only to return results"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary to-secondary/95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="max-w-3xl text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Protect Your Digital Identity Before It's{' '}
                <span className="text-accent">Too Late</span>
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                Professional cybersecurity monitoring that prevents million-dollar losses from data breaches. 
                Know what leaked, lock it down.
              </p>
              
              {/* Trust Row */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center">
                {trustSignals.map((signal, index) => (
                  <Badge key={index} variant="outline" className="border-primary-foreground/20 text-primary-foreground bg-primary-foreground/10">
                    {signal}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => document.getElementById('checker')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Check Your Exposure Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Statistics */}
      <section className="py-16 bg-destructive/5 border-y border-destructive/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              The Data Breach Crisis: 2025 Reality Check
            </h2>
            <p className="text-lg text-muted-foreground">
              Every day, millions lose money to preventable cyber attacks
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {threatStats.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-destructive mb-2">
                  {item.stat}
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Malicious Actors Do */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Criminals Exploit Your Leaked Data
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              When your email appears in a data breach, cybercriminals immediately begin weaponizing 
              your information. Here's exactly what they do and why it costs victims millions annually.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {maliciousActorMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-brand-lg transition-smooth border-destructive/20">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2">
                        {method.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {method.description}
                      </p>
                      <Badge variant="outline" className="text-destructive border-destructive/20">
                        {method.cost}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-destructive/5 to-warning/5 border border-destructive/20 rounded-lg p-8 text-center">
            <AlertTriangle className="w-12 h-12 text-warning mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              The Cost of Inaction
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              A monthly monitoring subscription costs less than a single lunch. The average victim 
              of identity theft loses $1,100, and business email compromise averages $4.65 million per incident. 
              <strong> Which investment makes more sense?</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-destructive">$1,100+</div>
                <div className="text-sm text-muted-foreground">Average victim loss</div>
              </div>
              <div className="text-2xl text-muted-foreground">vs</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">$9/month</div>
                <div className="text-sm text-muted-foreground">Professional protection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Checker Tool */}
      <div id="checker">
        <BreachChecker />
      </div>

      {/* Why Choose DataBreached */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why DataBreached is Your Best Defense
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're not another "password manager with monitoring." We're cybersecurity professionals 
              who understand how attacks actually work and how to stop them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="hover:shadow-brand-lg transition-smooth">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      {reason.icon}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to understand your exposure and protect your accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-brand-lg transition-smooth">
                <CardContent className="pt-8">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              About DataBreached
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              We're security specialists with backgrounds in incident response and digital risk, 
              making enterprise-grade breach intelligence accessible to everyone.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-brand-md transition-smooth">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-heading font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Card className="hover:shadow-brand-md transition-smooth">
              <CardContent className="pt-8 pb-8">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Data breaches happen every day, but most people don't know when they're affected. 
                  We believe everyone deserves visibility into their digital exposure and clear 
                  guidance on how to protect themselves.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is simple: <strong>Visibility, clarity, practical defense.</strong> 
                  We take complex cybersecurity intelligence and make it actionable for real people 
                  protecting real accounts.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* Customer Success Story */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/7182f784-606c-4c93-b7b5-1476a4102fe5.png" 
                alt="Happy DataBreached customers wearing branded t-shirts, smiling confidently"
                className="w-full rounded-2xl shadow-brand-lg"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                How DataBreached Changes Lives
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our customers don't just get breach monitoring—they get complete peace of mind. 
                No more sleepless nights wondering if their data is safe. No more panic when 
                hearing about the latest cyber attack on the news.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With DataBreached protecting them, our customers walk away stress-free, 
                knowing their digital lives are secure and monitored 24/7 by cybersecurity 
                professionals who truly care about their safety.
              </p>
              <div className="bg-white/80 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-foreground font-medium italic">
                  "Finally, I can sleep peacefully knowing my data is protected. 
                  DataBreached gives me the confidence to live my digital life without fear."
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  — Verified DataBreached Customer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Telegram Security Explanation */}
      <section className="py-16 bg-primary/5 border-y border-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
            Why We Use Telegram for Communication
          </h3>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            As cybersecurity professionals, we choose Telegram for client communication because of its 
            end-to-end encryption, open-source security audit trail, and resistance to surveillance. 
            Unlike traditional email, Telegram provides secure, real-time communication that aligns 
            with our commitment to protecting your privacy at every step.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="text-primary border-primary/20">End-to-end encrypted</Badge>
            <Badge variant="outline" className="text-primary border-primary/20">Open source</Badge>
            <Badge variant="outline" className="text-primary border-primary/20">Privacy-focused</Badge>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
            DataBreached.org
          </h3>
          <div className="space-y-2 text-muted-foreground">
            <p>175 Greenwich Street</p>
            <p>New York, NY 10007</p>
            <p>United States of America</p>
          </div>
          <div className="mt-6">
            <a 
              href="https://t.me/databreachedorg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-smooth"
            >
              <Shield className="w-4 h-4" />
              Secure Communication: @databreachedorg
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Stop Waiting for the Next Breach
          </h2>
          <p className="text-xl mb-8 text-accent-foreground/90">
            Start with a free check. Upgrade to monitoring when you see what we find.
          </p>
          <Button 
            variant="hero" 
            size="xl"
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => document.getElementById('checker')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Check Your Exposure Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;