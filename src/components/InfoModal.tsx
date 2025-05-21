import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoModal = ({ isOpen, onClose }: InfoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-hackathon-dark border border-[#CCDDEA] text-[#CCDDEA] max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl red-hat-display-bold">
            About the Hackathon
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 text-base sm:text-lg red-hat-display-light">
          <div className="space-y-2">
            <p>hack yc-style ideas - earn real funding</p>
            <p>10 teams of 5 ppl max</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl red-hat-display-bold">
              Key Details:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Date: May 30 - Jun 1</li>
              <li>Time: 7:00 PM</li>
              <li>Location: 101 West Renner Rd, Richardson, TX 75080</li>
              <li>Registration Deadline: May 28</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl red-hat-display-bold">
              What to Expect:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>24-hour coding challenge</li>
              <li>networking opportunities</li>
              <li>Prizes for winning teams</li>
              <li>Free food and drinks</li>
            </ul>
          </div>
          <div className="pt-6 flex justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScNKrbLV_Rx3XxDUCW2H_mgvLrTz83X_97CJxoB5tSEo7P9bw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto px-8 sm:px-20 py-4 sm:py-6 text-base sm:text-lg font-bold rounded shadow transition-all duration-200 min-w-[140px] border-2 border-hackathon-accent bg-transparent text-hackathon-accent hover:bg-hackathon-accent hover:text-hackathon-dark red-hat-display-bold">
                register now
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
