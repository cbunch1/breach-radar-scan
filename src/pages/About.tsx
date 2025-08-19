import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Alex Chen',
      role: 'Chief Security Officer',
      credentials: ['CISSP', 'CISM'],
      bio: 'Former incident response lead with 10+ years in enterprise security.',
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Lead Security Analyst',
      credentials: ['Security+', 'CEH'],
      bio: 'Digital forensics expert specializing in breach investigations.',
    },
    {
      name: 'Michael Park',
      role: 'Data Protection Engineer',
      credentials: ['CISSP', 'GCFA'],
      bio: 'Privacy-focused engineer with expertise in secure data handling.',
    },
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: 'Security First',
      description: 'Every decision we make prioritizes the protection of your data and privacy.',
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Transparency',
      description: 'Clear communication about what we do, how we do it, and why it matters.',
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: 'Expertise',
      description: 'Deep cybersecurity knowledge applied to real-world protection challenges.',
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: 'Accessibility',
      description: 'Making enterprise-grade security insights available to everyone.',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-background via-surface to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            About DataBreached
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We're security specialists with backgrounds in incident response and digital risk, 
            making enterprise-grade breach intelligence accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
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
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-brand-md transition-smooth">
                  <CardContent className="pt-6">
                    <div className="mb-4">
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
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Security specialists with real-world experience in incident response, 
              digital forensics, and enterprise risk management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-brand-lg transition-smooth">
                <CardContent className="pt-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {member.role}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.credentials.map((cert) => (
                      <Badge key={cert} variant="outline" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              How We Help
            </h2>
          </div>

          <div className="space-y-8">
            <Card className="hover:shadow-brand-md transition-smooth">
              <CardContent className="pt-6">
                <h3 className="font-heading text-xl font-semibold mb-4">
                  Breach Intelligence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We monitor public breach datasets, OSINT sources, and security research 
                  to build a comprehensive view of digital exposure. Our systems process 
                  this information to provide clear, actionable insights without the noise.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-brand-md transition-smooth">
              <CardContent className="pt-6">
                <h3 className="font-heading text-xl font-semibold mb-4">
                  Plain English Guidance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cybersecurity doesn't have to be complicated. We translate complex 
                  technical findings into clear, step-by-step actions that anyone can 
                  follow to improve their security posture.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-brand-md transition-smooth">
              <CardContent className="pt-6">
                <h3 className="font-heading text-xl font-semibold mb-4">
                  Privacy-First Approach
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We never ask for passwords and use read-only access to breach data. 
                  Your information is handled with enterprise-grade security practices, 
                  and we're fully compliant with GDPR and CCPA requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;