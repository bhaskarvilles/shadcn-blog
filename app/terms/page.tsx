import { Metadata } from "next";
import Link from "next/link";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Terms of Service | Ram's Website",
  description: "Terms and conditions for using our services",
};

export default function TermsPage() {
  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
        
        <p className="text-muted-foreground mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <div className="prose max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our website, you agree to be bound by these Terms of Service. If you do not 
            agree to all the terms and conditions, you may not access or use our services.
          </p>
          
          <h2>2. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will provide notice of any significant 
            changes. Your continued use of our services after such modifications constitutes your acceptance 
            of the new terms.
          </p>
          
          <h2>3. User Accounts</h2>
          <p>
            When you create an account with us, you must provide accurate and complete information. You are 
            responsible for safeguarding your account and for all activities that occur under your account.
          </p>
          
          <h2>4. Content</h2>
          <p>
            Our services allow you to access content. You understand that all content is the sole responsibility 
            of the person who created it. We do not guarantee the accuracy, integrity, or quality of content 
            shared by others.
          </p>
          
          <h2>5. Prohibited Uses</h2>
          <p>
            You agree not to use our services to:
          </p>
          <ul>
            <li>Violate any laws or regulations</li>
            <li>Post unauthorized commercial communications</li>
            <li>Upload viruses or malicious code</li>
            <li>Collect user information without consent</li>
            <li>Interfere with the proper working of our services</li>
          </ul>
          
          <h2>6. Intellectual Property</h2>
          <p>
            Our services and their contents, features, and functionality are owned by us and are protected by 
            international copyright, trademark, and other intellectual property laws.
          </p>
          
          <h2>7. Disclaimer of Warranties</h2>
          <p>
            Our services are provided "as is" without any warranties, expressed or implied.
          </p>
          
          <h2>8. Limitation of Liability</h2>
          <p>
            In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages.
          </p>
          
          <h2>9. Governing Law</h2>
          <p>
            These terms shall be governed by the laws of the jurisdiction in which we operate, without regard to 
            its conflict of law provisions.
          </p>
          
          <h2>10. Contact Information</h2>
          <p>
            For questions about these Terms, please contact us through our <Link href="/contact" className="text-primary hover:underline">contact page</Link>.
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