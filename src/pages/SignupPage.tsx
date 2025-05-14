
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const SignupPage = () => {
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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full py-6">
        <div className="container max-w-5xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/7646f7f3-ee95-4104-8466-4427f94b7672.png" 
                alt="LaunchCore Logo" 
                className="h-10 w-auto mr-2" 
              />
            </Link>
          </div>
          <nav>
            <Link 
              to="/"
              className="px-5 py-2 font-mono text-xs tracking-wider uppercase border border-[#FF5F1F] text-[#FF5F1F] hover:bg-[#FF5F1F]/10 transition-colors"
            >
              BACK
            </Link>
          </nav>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow container max-w-5xl mx-auto px-4 py-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-mono mb-8 text-center tracking-tighter">
            <span className="gradient-text">REGISTER</span>
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-hackathon-dark border-[#FF5F1F]/30 focus:border-[#FF5F1F] focus-visible:ring-[#FF5F1F] h-12 font-mono"
              required
            />
            <Button 
              type="submit" 
              className="w-full bg-[#FF5F1F] hover:bg-[#FF5F1F]/90 text-white font-mono tracking-wider h-12"
              disabled={isLoading}
            >
              {isLoading ? "REGISTERING..." : "SUBMIT"}
            </Button>
          </form>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-6 mt-auto">
        <div className="container max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-xs font-mono">
            © {new Date().getFullYear()} LAUNCHCORE
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignupPage;
