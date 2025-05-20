
import { useState } from 'react';
import HeroSection from '@/components/InfoSection';
import CountdownTimer from '@/components/CountdownTimer';
import SignupForm from '@/components/SignupForm';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Set the target date for the countdown (30 days from now)
  const [registrationDate] = useState(() => {
    const date = new Date("2025-05-24T23:59:59");
    return date;
  });

  const [hackathonDate] = useState(() => {
    const date = new Date("2025-05-30T19:00:00");
    return date;
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full py-6">
        <div className="container max-w-5xl mx-auto px-4 flex justify-between items-center">
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow container max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center h-[calc(100vh-150px)] mt-5">
          {/* Hero Section */}
          <HeroSection />
          {/* <SignupForm/> */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScNKrbLV_Rx3XxDUCW2H_mgvLrTz83X_97CJxoB5tSEo7P9bw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="px-20 py-6 text-lg font-bold rounded shadow transition-all duration-200 min-w-[140px] border-2 border-hackathon-accent bg-transparent text-hackathon-accent hover:bg-hackathon-accent hover:text-hackathon-dark"
            >
              Register
            </Button>
          </a>
          {/* Countdown Timer - Moved slightly higher */}
          <div className="w-full max-w-3xl mt-8">
            <CountdownTimer targetDate={registrationDate} />
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-4">
        <div className="container max-w-5xl mx-auto px-4 flex justify-center">
          <div className="text-hackathon-accent text-xs font-mono">
            © {new Date().getFullYear()} WovenTech
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
