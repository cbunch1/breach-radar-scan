import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const Privacy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-surface to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-primary mr-3" />
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Privacy Policy
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              How DataBreached.org protects and handles your personal information
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: January 19, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            {/* Introduction */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Eye className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Introduction</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      DataBreached.org ("we," "us," or "our") operates the website located at DataBreached.org 
                      (the "Service"). This page informs you of our policies regarding the collection, use, and 
                      disclosure of personal information when you use our Service.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We use your data only to provide and improve the Service. By using the Service, you agree 
                      to the collection and use of information in accordance with this policy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Information Collection */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <FileText className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Information Collection and Use</h2>
                    
                    <h3 className="font-semibold text-foreground mb-3">Personal Data</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      While using our Service, we may ask you to provide us with certain personally identifiable 
                      information that can be used to contact or identify you. This may include:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                      <li>Email address (for breach checking purposes only)</li>
                      <li>Usage data and analytics</li>
                      <li>Communication preferences</li>
                    </ul>

                    <h3 className="font-semibold text-foreground mb-3">Usage Data</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We may collect information about how the Service is accessed and used. This may include 
                      your computer's Internet Protocol address, browser type, browser version, the pages you 
                      visit, the time and date of your visit, and other diagnostic data.
                    </p>

                    <h3 className="font-semibold text-foreground mb-3">Email Processing</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      When you submit an email address for breach checking, we temporarily process this information 
                      to query breach databases. We do not store your email addresses permanently and use them 
                      solely for the purpose of providing breach check results.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Use */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Lock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Use of Data</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      DataBreached.org uses the collected data for various purposes:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>To provide and maintain our cybersecurity services</li>
                      <li>To notify you about changes to our Service</li>
                      <li>To provide customer support</li>
                      <li>To gather analysis or valuable information to improve our Service</li>
                      <li>To monitor the usage of our Service</li>
                      <li>To detect, prevent and address technical issues</li>
                      <li>To provide security breach notifications and alerts</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  DataBreached.org will retain your personal data only for as long as is necessary for the 
                  purposes set out in this Privacy Policy. We will retain and use your personal data to 
                  the extent necessary to comply with our legal obligations, resolve disputes, and enforce 
                  our legal agreements and policies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Email addresses submitted for breach checking are not stored permanently and are processed 
                  only for the duration necessary to complete the security check.
                </p>
              </CardContent>
            </Card>

            {/* Data Transfer */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Transfer of Data</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your information, including personal data, may be transferred to and maintained on computers 
                  located outside of your state, province, country, or other governmental jurisdiction where 
                  the data protection laws may differ from those of your jurisdiction.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  DataBreached.org is based in New York, United States. If you are located outside the United 
                  States and choose to provide information to us, please note that we transfer the data, 
                  including personal data, to the United States and process it there.
                </p>
              </CardContent>
            </Card>

            {/* Disclosure */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Disclosure of Data</h2>
                
                <h3 className="font-semibold text-foreground mb-3">Legal Requirements</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  DataBreached.org may disclose your personal data in the good faith belief that such action 
                  is necessary to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Comply with a legal obligation</li>
                  <li>Protect and defend the rights or property of DataBreached.org</li>
                  <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                  <li>Protect the personal safety of users of the Service or the public</li>
                  <li>Protect against legal liability</li>
                </ul>

                <h3 className="font-semibold text-foreground mb-3">Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The security of your data is important to us but remember that no method of transmission 
                  over the Internet or method of electronic storage is 100% secure. While we strive to use 
                  commercially acceptable means to protect your personal data, we cannot guarantee its absolute 
                  security.
                </p>
              </CardContent>
            </Card>

            {/* Third Party Services */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our Service may contain links to third-party websites or services that are not owned or 
                  controlled by DataBreached.org. We use third-party services including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Have I Been Pwned API for breach data queries</li>
                  <li>Analytics providers for service improvement</li>
                  <li>Security monitoring services</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  DataBreached.org has no control over and assumes no responsibility for the content, privacy 
                  policies, or practices of any third-party websites or services.
                </p>
              </CardContent>
            </Card>

            {/* GDPR & CCPA */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">GDPR & CCPA Compliance</h2>
                
                <h3 className="font-semibold text-foreground mb-3">Your Rights Under GDPR</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you are a resident of the European Economic Area (EEA), you have certain data protection 
                  rights. DataBreached.org aims to take reasonable steps to allow you to correct, amend, delete, 
                  or limit the use of your personal data.
                </p>
                
                <h3 className="font-semibold text-foreground mb-3">California Privacy Rights</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you are a California resident, you have rights under the California Consumer Privacy Act 
                  (CCPA) regarding your personal information, including the right to know what personal information 
                  we collect and how we use it.
                </p>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our Service does not address anyone under the age of 13. We do not knowingly collect 
                  personally identifiable information from anyone under the age of 13. If you are a parent 
                  or guardian and you are aware that your child has provided us with personal data, please 
                  contact us.
                </p>
              </CardContent>
            </Card>

            {/* Changes */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by 
                  posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You are advised to review this Privacy Policy periodically for any changes. Changes to 
                  this Privacy Policy are effective when they are posted on this page.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Through our secure Telegram channel: @databreachedorg</li>
                  <li>• By mail: DataBreached.org, 175 Greenwich Street, New York, NY 10007, USA</li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;