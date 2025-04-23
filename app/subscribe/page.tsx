"use client";

import { useState } from "react";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Mail } from "lucide-react";

export default function SubscribePage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([
    { id: "programming", label: "Programming", checked: false },
    { id: "travel", label: "Travel", checked: false },
    { id: "food", label: "Food", checked: false },
    { id: "health", label: "Health", checked: false },
  ]);

  const handleCategoryChange = (id: string, checked: boolean) => {
    setCategories(
      categories.map((category) =>
        category.id === id ? { ...category, checked } : category
      )
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // This would normally send data to an API endpoint
    // For this demo, we'll simulate a successful subscription
    setTimeout(() => {
      toast.success("You&apos;ve successfully subscribed to our newsletter!", {
        description: "Thank you for subscribing. We&apos;ll be in touch soon.",
      });
      setEmail("");
      setName("");
      setCategories(categories.map(cat => ({ ...cat, checked: false })));
      setLoading(false);
    }, 1500);
  };

  return (
    <LayoutWrapper>
      <div className="max-w-3xl mx-auto py-6">
        <div className="flex flex-col items-center text-center mb-10">
          <Mail className="h-12 w-12 text-primary mb-4" />
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Subscribe to Our Newsletter
          </h1>
          <p className="text-muted-foreground text-lg max-w-[42rem]">
            Stay updated with our latest articles, guides, and insights. We respect your privacy and will never share your information.
          </p>
        </div>

        <div className="bg-card border rounded-xl p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-3">
              <Label>Topics you&apos;re interested in (optional)</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.map((category) => (
                  <div className="flex items-center space-x-2" key={category.id}>
                    <Checkbox
                      id={category.id}
                      checked={category.checked}
                      onCheckedChange={(checked) =>
                        handleCategoryChange(category.id, checked as boolean)
                      }
                    />
                    <Label htmlFor={category.id} className="cursor-pointer">
                      {category.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="privacy" required />
                <Label htmlFor="privacy" className="text-sm text-muted-foreground">
                  I agree to the privacy policy and terms of service
                </Label>
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full rounded-full"
              size="lg"
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe Now"}
            </Button>
          </form>
        </div>
        
        <div className="mt-10 text-center text-muted-foreground">
          <p className="text-sm">
            By subscribing, you&apos;ll receive updates, articles, and occasional promotions. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </LayoutWrapper>
  );
} 