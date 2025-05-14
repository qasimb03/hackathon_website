
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
        description: "You're registered. We'll send more details soon.",
      });
      setEmail("");
    }, 1000);
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-hackathon-muted border-none p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-hackathon-dark border-[#FF5F1F]/30 focus:border-[#FF5F1F] focus-visible:ring-[#FF5F1F] h-12"
            required
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-[#FF5F1F] hover:bg-[#FF5F1F]/90 text-white font-medium h-12"
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "REGISTER NOW"}
        </Button>
      </form>
    </Card>
  );
};

export default SignupForm;
