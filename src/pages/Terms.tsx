import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Scale, FileText, AlertTriangle } from 'lucide-react';

const Terms = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-surface to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Scale className="w-8 h-8 text-primary mr-3" />
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Terms of Service
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Terms and conditions for using DataBreached.org cybersecurity services
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: January 19, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            {/* Introduction */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <FileText className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      These Terms of Service ("Terms") govern your use of the website located at DataBreached.org 
                      (the "Service") operated by DataBreached.org ("us", "we", or "our").
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      By accessing or using our Service, you agree to be bound by these Terms. If you disagree 
                      with any part of these terms, then you may not access the Service.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Our Service is intended for users who are at least 13 years old. By using our Service, 
                      you represent and warrant that you are at least 13 years of age.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Description */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Description of Service</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      DataBreached.org provides cybersecurity intelligence services, including:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li>Data breach exposure checking for email addresses</li>
                      <li>Security guidance and recommendations</li>
                      <li>Educational content about cybersecurity threats</li>
                      <li>Intelligence on recent data breaches and cybersecurity incidents</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      Our services are provided for informational and educational purposes. While we strive 
                      for accuracy, we cannot guarantee the completeness or timeliness of all breach data.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">User Responsibilities</h2>
                
                <h3 className="font-semibold text-foreground mb-3">Acceptable Use</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree to use the Service only for lawful purposes and in accordance with these Terms. 
                  You agree not to use the Service:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>In any way that violates applicable federal, state, local, or international laws</li>
                  <li>To check email addresses that do not belong to you without proper authorization</li>
                  <li>To attempt to gain unauthorized access to our systems or networks</li>
                  <li>To interfere with or disrupt the Service or servers connected to the Service</li>
                  <li>For any commercial purposes without our express written consent</li>
                </ul>

                <h3 className="font-semibold text-foreground mb-3">Account Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You are responsible for safeguarding any credentials used to access our Service and for 
                  all activities that occur under your access. You agree to immediately notify DataBreached.org 
                  of any unauthorized use of your access or any other breach of security.
                </p>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Intellectual Property Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Service and its original content, features, and functionality are and will remain the 
                  exclusive property of DataBreached.org and its licensors. The Service is protected by 
                  copyright, trademark, and other laws.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our trademarks and trade dress may not be used in connection with any product or service 
                  without our prior written consent.
                </p>
              </CardContent>
            </Card>

            {/* Data and Privacy */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Data and Privacy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We respect your privacy and are committed to protecting your personal data. Our collection 
                  and use of personal information is governed by our Privacy Policy, which is incorporated 
                  into these Terms by reference.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By using our Service, you acknowledge that we may process your data in accordance with 
                  our Privacy Policy and applicable data protection laws, including GDPR and CCPA.
                </p>
              </CardContent>
            </Card>

            {/* Disclaimers */}
            <Card className="border-warning/20 bg-warning/5">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="w-6 h-6 text-warning mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Disclaimers</h2>
                    
                    <h3 className="font-semibold text-foreground mb-3">Service Availability</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We strive to keep the Service available 24/7, but we cannot guarantee uninterrupted access. 
                      The Service may be temporarily unavailable due to maintenance, updates, or circumstances 
                      beyond our control.
                    </p>

                    <h3 className="font-semibold text-foreground mb-3">Accuracy of Information</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      While we make every effort to provide accurate and up-to-date information, we cannot 
                      guarantee the completeness, accuracy, or timeliness of all breach data. Our Service 
                      relies on third-party data sources and public breach disclosures.
                    </p>

                    <h3 className="font-semibold text-foreground mb-3">No Security Guarantee</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our Service provides information and recommendations but cannot guarantee absolute 
                      security. Users remain responsible for implementing appropriate security measures 
                      for their accounts and systems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In no event shall DataBreached.org, nor its directors, employees, partners, agents, suppliers, 
                  or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                  damages, including without limitation, loss of profits, data, use, goodwill, or other 
                  intangible losses, resulting from your use of the Service.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Some jurisdictions do not allow the exclusion of certain warranties or the exclusion or 
                  limitation of liability for consequential or incidental damages. Accordingly, some of the 
                  above limitations may not apply to you.
                </p>
              </CardContent>
            </Card>

            {/* Indemnification */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to defend, indemnify, and hold harmless DataBreached.org and its licensee and 
                  licensors, and their employees, contractors, agents, officers and directors, from and 
                  against any and all claims, damages, obligations, losses, liabilities, costs or debt, 
                  and expenses (including but not limited to attorney's fees).
                </p>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Termination</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may terminate or suspend your access immediately, without prior notice or liability, 
                  for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Upon termination, your right to use the Service will cease immediately. If you wish to 
                  terminate your use of the Service, you may simply discontinue using the Service.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be interpreted and governed by the laws of the State of New York, 
                  United States, without regard to its conflict of law provisions. Our failure to enforce 
                  any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  If a revision is material, we will try to provide at least 30 days notice prior to any 
                  new terms taking effect.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  What constitutes a material change will be determined at our sole discretion. By continuing 
                  to access or use our Service after those revisions become effective, you agree to be bound 
                  by the revised terms.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Through our secure Telegram channel: @databreachedorg</li>
                  <li>• By mail: DataBreached.org, 175 Greenwich Street, New York, NY 10007, USA</li>
                  <li>• Website: DataBreached.org</li>
                </ul>
                <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> For security reasons, we prefer communication through our encrypted 
                    Telegram channel. This ensures the confidentiality of any sensitive information discussed.
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;