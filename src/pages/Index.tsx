
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import CountdownTimer from '@/components/CountdownTimer';

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
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow container max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center h-[calc(100vh-150px)]">
          {/* Hero Section */}
          <HeroSection />
          
          {/* Countdown Timer - Moved higher in the layout */}
          <div className="w-full max-w-3xl mt-12">
            <CountdownTimer targetDate={targetDate} />
          </div>
        </div>
      </main>
      
      {/* Footer - Moved up so everything fits on one screen without scrolling */}
      <footer className="w-full py-4">
        <div className="container max-w-5xl mx-auto px-4 flex justify-center">
          <div className="text-muted-foreground text-xs font-mono">
            © {new Date().getFullYear()} LAUNCHCORE
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
