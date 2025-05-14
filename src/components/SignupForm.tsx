
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success!",
        description: "You're on the list. We'll notify you when registration opens.",
      });
      setEmail("");
    }, 1000);
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-hackathon-muted border-none p-6">
      <h2 className="text-xl font-heading font-bold mb-4">Get Notified When Applications Open</h2>
      <Separator className="mb-6 bg-hackathon-accent/20" />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-hackathon-dark border-hackathon-accent/30 focus:border-hackathon-accent focus-visible:ring-hackathon-accent h-12"
            required
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-hackathon-accent hover:bg-hackathon-accent/90 text-white font-medium h-12"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Notify Me"}
        </Button>
      </form>
    </Card>
  );
};

export default SignupForm;
