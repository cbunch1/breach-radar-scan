import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, Zap, Crown, Download, MessageCircle, Scan, AlertTriangle, Lock, Eye } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free Trial',
      icon: <Shield className="w-6 h-6" />,
      price: '7 Days Free',
      period: 'no credit card required',
      description: 'Full access to all features - download and try everything',
      features: [
        'Real-time breach monitoring',
        'PC malware scanning & removal',
        'Dark web monitoring',
        'Instant breach notifications',
        'Virus & hidden malware detection',
        'Complete system protection'
      ],
      cta: 'Download Free Trial',
      popular: false,
      variant: 'outline' as const
    },
    {
      name: 'Plus',
      icon: <Zap className="w-6 h-6" />,
      price: '$9.99',
      period: 'per month',
      description: 'Continuous protection with premium features',
      features: [
        'Everything in Free Trial',
        'Unlimited breach monitoring',
        'Advanced malware protection',
        'Priority notifications',
        'Email & phone support',
        'Monthly security reports',
        'Password security analysis'
      ],
      cta: 'Choose Plus',
      popular: true,
      variant: 'cta' as const
    },
    {
      name: 'Pro',
      icon: <Crown className="w-6 h-6" />,
      price: 'Custom',
      period: 'enterprise pricing',
      description: 'Enterprise-grade security for organizations',
      features: [
        'Everything in Plus',
        'Multi-device protection',
        'Custom security policies',
        'Advanced threat intelligence',
        'API access & integrations',
        'Dedicated security analyst',
        'White-glove onboarding',
        'Custom breach response plans',
        'Priority incident response',
        '24/7 phone & chat support'
      ],
      cta: 'Contact For Pro',
      popular: false,
      variant: 'security' as const
    }
  ];

  const faqs = [
    {
      question: 'How does the 7-day free trial work?',
      answer: 'Download our platform and get instant access to all features for 7 days. No credit card or personal information required. After 7 days, enter a license key from any paid plan to continue.'
    },
    {
      question: 'What makes DataBreached better than competitors?',
      answer: 'Unlike other services that only monitor breaches, DataBreached provides comprehensive protection: real-time breach alerts PLUS active PC scanning for viruses and hidden malware that hackers use to steal your data.'
    },
    {
      question: 'How does the PC scanning work?',
      answer: 'Our platform continuously scans your device for hidden viruses, malware, and suspicious activities that could compromise your data. Many data breaches happen through infected devices - we prevent this.'
    },
    {
      question: 'Is the platform safe to install?',
      answer: 'Absolutely. DataBreached uses enterprise-grade security and runs with minimal system impact. We protect your privacy while securing your device from threats.'
    },
    {
      question: 'Do I need technical knowledge to use it?',
      answer: 'No. Once installed, DataBreached runs automatically in the background. You\'ll receive clear, actionable alerts about any threats or breaches affecting you.'
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Complete Protection Platform
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              The only platform that monitors data breaches AND protects your PC from hidden malware. 
              Get real-time alerts about breaches while our advanced scanning removes viruses and malicious software that hackers use to steal your data.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Download className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">7-Day Free Trial</span>
              </div>
              <p className="text-sm text-muted-foreground">
                No credit card required • Full feature access • Instant download
              </p>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-brand-lg transition-smooth ${
                  plan.popular ? 'border-accent shadow-brand-md scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <Badge 
                    variant="success" 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1"
                  >
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.name === 'Pro' ? (
                    <Button 
                      variant={plan.variant}
                      size="lg" 
                      className="w-full"
                      onClick={() => window.open('https://t.me/databreachedorg', '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {plan.cta}
                    </Button>
                  ) : (
                    <Button 
                      variant={plan.variant}
                      size="lg" 
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose DataBreached Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why DataBreached Outperforms The Competition
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Most services only tell you about breaches after your data is already stolen. 
              DataBreached prevents breaches by protecting the source - your device.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-brand-lg transition-smooth">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Real-Time Breach Alerts</h3>
                <p className="text-muted-foreground">
                  Get instant notifications when your email appears in new data breaches, 
                  often before the breach is publicly announced.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-brand-lg transition-smooth">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scan className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Active PC Protection</h3>
                <p className="text-muted-foreground">
                  Continuously scans and removes hidden malware, viruses, and spyware 
                  that hackers use to steal your passwords and personal data.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-brand-lg transition-smooth">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Hidden Threat Detection</h3>
                <p className="text-muted-foreground">
                  Detects sophisticated malware that traditional antivirus software misses, 
                  including keyloggers and data-stealing trojans.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 text-center">
            <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Complete Peace of Mind
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              While other services only notify you after you've been compromised, DataBreached 
              actively prevents compromise by securing your device and monitoring for threats in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our complete protection platform.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-brand-md transition-smooth">
                <CardContent className="pt-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-glow to-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Download DataBreached Platform
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Start your 7-day free trial today. No credit card required. 
            Get complete protection against data breaches and malware in minutes.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Download className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-white">Free 7-Day Trial</span>
            </div>
            <p className="text-white/90 mb-6">
              Once downloaded, the platform will run in "Remote Access" mode for 7 days. 
              After the trial period, simply enter a license key from any paid plan to continue protection.
            </p>
            <Button 
              size="lg" 
              variant="hero" 
              className="px-12 py-4 text-lg font-semibold"
              onClick={() => window.open('https://databreached.org/downloads/databreached.exe', '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Now (Windows)
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 px-8"
              onClick={() => window.open('https://t.me/databreachedorg', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;