import { Metadata } from "next";
import Link from "next/link";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Privacy Policy | Ram's Website",
  description: "Privacy policy and data protection information",
};

export default function PrivacyPage() {
  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
        
        <p className="text-muted-foreground mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <div className="prose max-w-none">
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create or modify your account, 
            contact us, or otherwise communicate with us. This information may include your name, email, 
            and other contact information.
          </p>
          
          <h2>How We Use Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Send you technical notices and updates</li>
            <li>Respond to your comments and questions</li>
            <li>Monitor and analyze trends and usage</li>
          </ul>
          
          <h2>Cookies</h2>
          <p>
            We may use cookies and similar technologies to collect information about how you interact with our 
            services and to help us improve them.
          </p>
          
          <h2>Data Security</h2>
          <p>
            We take reasonable measures to help protect your personal information from loss, theft, misuse, 
            unauthorized access, disclosure, alteration, and destruction.
          </p>
          
          <h2>Third-Party Services</h2>
          <p>
            Our services may contain links to and from third-party websites. This privacy policy applies only 
            to our services, so we encourage you to read the privacy policies of other websites you visit.
          </p>
          
          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting 
            the new privacy policy on this page.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
          </p>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-center">
          <Link href="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    </LayoutWrapper>
  );
} 