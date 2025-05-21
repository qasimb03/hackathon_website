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
          <DialogTitle className="text-2xl sm:text-3xl red-hat-display-bold lowercase">
            about the hackathon
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 text-base sm:text-lg red-hat-display-light">
          <div className="space-y-2">
            <p>come with an idea, build and present your mvp, get funding</p>
            <p>10 teams of 1-5 ppl</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl red-hat-display-bold lowercase">
              key details:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>date: may 30 - june 1</li>
              <li>time: 7:00 pm</li>
              <li>location: tba (dallas)</li>
              <li>registration deadline: may 28 11:59 pm</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl red-hat-display-bold lowercase">
              what to expect:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>funding for winning team(s)</li>
              <li>networking opportunities</li>
              <li>free food and drinks</li>
            </ul>
          </div>
          <div className="pt-6 flex justify-center">
            <a
              href="https://partiful.com/e/583UcNbnCpk5dABp4BH1"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto px-8 sm:px-20 py-4 sm:py-6 text-base sm:text-lg font-bold rounded shadow transition-all duration-200 min-w-[140px] border-2 border-hackathon-accent bg-transparent text-hackathon-accent hover:bg-hackathon-accent hover:text-hackathon-dark red-hat-display-bold lowercase">
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
