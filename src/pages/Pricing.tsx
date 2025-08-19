import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      icon: <Shield className="w-6 h-6" />,
      price: '$0',
      period: 'forever',
      description: 'Try our breach checker with basic protection',
      features: [
        '1 email check',
        'Basic breach report',
        'Security tips',
        'Email support'
      ],
      cta: 'Get Started',
      popular: false,
      variant: 'outline' as const
    },
    {
      name: 'Plus',
      icon: <Zap className="w-6 h-6" />,
      price: '$9',
      period: 'per month',
      description: 'Ongoing monitoring for small teams and individuals',
      features: [
        'Monitor up to 3 emails',
        'Real-time breach alerts',
        'Monthly security reports',
        'Password health checks',
        'Priority email support'
      ],
      cta: 'Start Plus',
      popular: true,
      variant: 'cta' as const
    },
    {
      name: 'Pro',
      icon: <Crown className="w-6 h-6" />,
      price: '$29',
      period: 'per month',
      description: 'Comprehensive protection for teams and businesses',
      features: [
        'Monitor up to 10 emails',
        'Instant breach notifications',
        'PDF security reports',
        'Dark web monitoring',
        'Phone & chat support',
        'Custom integrations'
      ],
      cta: 'Go Pro',
      popular: false,
      variant: 'security' as const
    }
  ];

  const faqs = [
    {
      question: 'How does the monitoring work?',
      answer: 'We continuously scan new breach datasets and OSINT sources. When your monitored email appears in a new breach, you\'ll receive an immediate alert with actionable next steps.'
    },
    {
      question: 'Is my data safe with DataBreached?',
      answer: 'Yes. We never store passwords and use read-only access to breach data. Your email is used only for breach checking and optional alerts. We\'re GDPR and CCPA compliant.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Absolutely. Cancel your subscription at any time with no questions asked. Your data will be securely deleted within 30 days of cancellation.'
    },
    {
      question: 'What happens if I find breaches?',
      answer: 'We provide a detailed report with specific next steps, including which passwords to change and security measures to implement. Plus subscribers get ongoing guidance.'
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-background via-surface to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Try the checker free—decide later if monitoring is right for you.
          </p>
          <Badge variant="demo" className="text-base px-4 py-2">
            30-day money-back guarantee
          </Badge>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

                  <Button 
                    variant={plan.variant} 
                    size="lg" 
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              All plans include: SSL encryption • GDPR compliance • 99.9% uptime • Cancel anytime
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
              Everything you need to know about our breach monitoring service.
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

      {/* CTA */}
      <section className="py-20 bg-gradient-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Start Protecting Your Accounts Today
          </h2>
          <p className="text-xl mb-8 text-accent-foreground/90">
            Join thousands of users who trust DataBreached to monitor their exposure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="xl"
              className="bg-white text-primary hover:bg-white/90"
            >
              Try Free Checker
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;