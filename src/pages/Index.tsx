
import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import CountdownTimer from '@/components/CountdownTimer';
import SignupForm from '@/components/SignupForm';
import { Separator } from '@/components/ui/separator';

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
      <header className="w-full py-6 border-b border-hackathon-muted">
        <div className="container max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="text-xl font-heading font-bold">ELITE<span className="text-hackathon-accent">.</span></div>
          <nav>
            <a 
              href="#"
              className="px-5 py-2 rounded-md bg-hackathon-muted text-white hover:bg-hackathon-muted/80 text-sm font-medium transition-colors"
            >
              Learn More
            </a>
          </nav>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow container max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-12 my-8">
          {/* Hero Section */}
          <HeroSection />
          
          {/* Countdown Timer */}
          <div className="max-w-4xl mx-auto w-full">
            <Separator className="my-8 bg-hackathon-muted" />
            <CountdownTimer targetDate={targetDate} />
          </div>
          
          {/* Sign Up Form */}
          <div>
            <SignupForm />
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-8 mt-auto border-t border-hackathon-muted">
        <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Elite Hackathon. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-white text-sm">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-white text-sm">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-white text-sm">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
