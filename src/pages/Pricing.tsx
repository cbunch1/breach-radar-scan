import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, Zap, Crown, Download, MessageCircle, Scan, AlertTriangle, Lock, Eye, Monitor } from 'lucide-react';

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
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-surface to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Complete Protection Platform
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              The only platform that monitors data breaches AND protects your PC from hidden malware.
            </p>
            
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
              <Download className="w-5 h-5" />
              <span className="font-semibold">7-Day Free Trial • No Credit Card Required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-brand-lg transition-smooth ${
                  plan.popular ? 'border-primary shadow-brand-md scale-105 bg-primary/5' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="default" className="px-4 py-1 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                  <div className="mb-3">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">/{plan.period}</span>}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.name === 'Pro' ? (
                    <Button 
                      variant="outline"
                      size="lg" 
                      className="w-full"
                      onClick={() => window.open('https://t.me/databreachedorg', '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {plan.cta}
                    </Button>
                  ) : plan.name === 'Plus' ? (
                    <Button 
                      variant="default"
                      size="lg" 
                      className="w-full"
                      onClick={() => window.open('https://t.me/databreachedorg', '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact For Plus
                    </Button>
                  ) : (
                    <Button 
                      variant="outline"
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

      {/* Why Choose DataBreached */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why DataBreached Outperforms Competitors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most services only notify you after data is stolen. We prevent breaches by protecting your device.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-smooth">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Real-Time Breach Alerts</h3>
                <p className="text-muted-foreground text-sm">
                  Instant notifications when your email appears in new breaches, often before public announcement.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-smooth">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Scan className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Active PC Protection</h3>
                <p className="text-muted-foreground text-sm">
                  Continuously scans and removes hidden malware that hackers use to steal passwords and data.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-smooth">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Hidden Threat Detection</h3>
                <p className="text-muted-foreground text-sm">
                  Detects sophisticated malware that traditional antivirus misses, including keyloggers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our platform.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-smooth">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Download DataBreached Platform
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start your 7-day free trial. No credit card required.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Download className="w-8 h-8 text-white" />
                <span className="text-2xl font-bold text-white">Free 7-Day Trial</span>
              </div>
              <p className="text-white/90 mb-6 text-sm">
                Platform runs in "Remote Access" mode for 7 days. After trial, enter license key to continue.
              </p>
              
              <Button 
                size="lg" 
                variant="hero" 
                className="px-12 py-4 text-lg font-semibold bg-white text-primary hover:bg-white/90"
                onClick={() => window.open('https://databreached.org/downloads/databreached.exe', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Now
                <Monitor className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
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