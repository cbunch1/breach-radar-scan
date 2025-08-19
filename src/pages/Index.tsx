import React from 'react';
import Layout from '@/components/Layout';
import BreachChecker from '@/components/BreachChecker';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Eye, Lock, Radar, ArrowRight, CheckCircle, Globe, Users, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-illustration.png';

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

  const whyItMattersPoints = [
    "Credential stuffing attacks use leaked passwords across multiple sites",
    "Phishing campaigns target emails from known breaches",
    "Account takeovers often start with breached credentials",
    "Early detection enables proactive security measures"
  ];

  const benefits = [
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "Continuous Monitoring",
      description: "Get alerted when your email appears in new breach datasets."
    },
    {
      icon: <Lock className="w-8 h-8 text-primary" />,
      title: "Security Guidance", 
      description: "Expert recommendations for password hygiene and account protection."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Breach Alerts",
      description: "Immediate notifications when new exposures are discovered."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Expert Resources",
      description: "Access to cybersecurity best practices and incident response guides."
    }
  ];

  const trustSignals = [
    "No password required",
    "Read-only breach data", 
    "GDPR/CCPA-friendly"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-secondary/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Check if your email appears in a recent{' '}
                <span className="text-accent">data breach</span>
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Instant exposure check, clear next steps, ongoing monitoring.
              </p>
              
              {/* Trust Row */}
              <div className="flex flex-wrap gap-4 mb-8">
                {trustSignals.map((signal, index) => (
                  <Badge key={index} variant="outline" className="border-white/20 text-white bg-white/10">
                    {signal}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => document.getElementById('checker')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Check Exposure
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="lg:text-right">
              <img 
                src={heroImage} 
                alt="Cybersecurity illustration" 
                className="w-full max-w-lg mx-auto lg:ml-auto rounded-2xl shadow-brand-xl"
              />
            </div>
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

      {/* Email Checker Tool */}
      <div id="checker">
        <BreachChecker />
      </div>

      {/* Why It Matters */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why This Matters
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Data breaches happen daily, but most people don't know when they're affected. 
                Understanding your exposure is the first step to better security.
              </p>
              
              <ul className="space-y-4">
                {whyItMattersPoints.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-brand-md transition-smooth">
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="font-heading font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-8">
            Trusted by security analysts at leading organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder logos */}
            <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
              <Users className="w-6 h-6 text-muted-foreground" />
            </div>
            <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
              <Shield className="w-6 h-6 text-muted-foreground" />
            </div>
            <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
              <Lock className="w-6 h-6 text-muted-foreground" />
            </div>
            <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
              <Globe className="w-6 h-6 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Check Your Exposure?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Start with a free check. Decide later if monitoring is right for you.
          </p>
          <Button 
            variant="hero" 
            size="xl"
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => document.getElementById('checker')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Check Exposure Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
