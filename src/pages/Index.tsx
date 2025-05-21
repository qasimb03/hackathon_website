import { useState } from "react";
import HeroSection from "@/components/InfoSection";
import CountdownTimer from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";
import InfoModal from "@/components/InfoModal";
import { Info } from "lucide-react";

const Index = () => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  // Set the target date for the countdown (May 29th, 11:59 PM)
  const [registrationDate] = useState(() => {
    const date = new Date("2025-05-29T23:59:59");
    return date;
  });

  const [hackathonDate] = useState(() => {
    const date = new Date("2025-05-30T19:00:00");
    return date;
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full py-4 sm:py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center"></div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-8 sm:py-12">
          {/* Hero Section */}
          <HeroSection />

          {/* Countdown Timer */}
          <div className="w-full max-w-[600px] sm:max-w-[800px] mt-4 sm:mt-6 px-4">
            <CountdownTimer targetDate={registrationDate} />
          </div>

          {/* Info/Register Button */}
          <div className="w-full sm:w-auto mt-6 sm:mt-8">
            <Button
              className="w-full sm:w-auto px-8 sm:px-20 py-4 sm:py-6 text-base sm:text-lg font-bold rounded shadow transition-all duration-200 min-w-[140px] border-2 border-[#CCDDEA] bg-transparent text-[#CCDDEA] hover:bg-[#CCDDEA] hover:text-hackathon-dark red-hat-display-bold"
              onClick={() => setIsInfoModalOpen(true)}
            >
              info / register
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-2 sm:py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="text-[#CCDDEA] text-xs red-hat-display-light">
            © {new Date().getFullYear()} woventech
          </div>
        </div>
      </footer>

      {/* Info Modal */}
      <InfoModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
      />
    </div>
  );
};

export default Index;
