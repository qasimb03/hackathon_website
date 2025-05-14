
import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import CountdownTimer from '@/components/CountdownTimer';
import SignupForm from '@/components/SignupForm';

const Index = () => {
  // Set the target date for the countdown (30 days from now)
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    return date;
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full py-6">
        <div className="container max-w-5xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/7646f7f3-ee95-4104-8466-4427f94b7672.png" 
              alt="LaunchCore Logo" 
              className="h-10 w-auto mr-2" 
            />
          </div>
          <nav>
            <a 
              href="#signup"
              className="px-5 py-2 font-mono text-xs tracking-wider uppercase border border-[#FF5F1F] text-[#FF5F1F] hover:bg-[#FF5F1F]/10 transition-colors"
            >
              REGISTER
            </a>
          </nav>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow container max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-12 my-8">
          {/* Hero Section */}
          <HeroSection />
          
          {/* Countdown Timer */}
          <div className="max-w-3xl mx-auto w-full">
            <CountdownTimer targetDate={targetDate} />
          </div>
          
          {/* Sign Up Form */}
          <div id="signup">
            <SignupForm />
          </div>
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

export default Index;
