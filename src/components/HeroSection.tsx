
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-20 text-center">
      <Badge 
        variant="outline" 
        className="mb-6 px-4 py-1 text-xs bg-transparent border-hackathon-accent text-hackathon-accent uppercase tracking-wider"
      >
        Coming Soon
      </Badge>
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-6 tracking-tighter">
        <span className="gradient-text">ELITE HACKATHON</span>
      </h1>
      
      <div className="space-y-6 md:space-y-8 max-w-3xl mx-auto">
        <p className="text-2xl md:text-4xl font-heading font-bold tracking-tight leading-tight">
          <span className="text-white">10</span>{" "}
          <span className="text-muted-foreground">Teams.</span>{" "}
          <span className="text-white">1</span>{" "}
          <span className="text-muted-foreground">Funded.</span>{" "}
          <span className="text-hackathon-accent">Sign Up Now</span>
        </p>
        
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          An exclusive hackathon experience where only 10 carefully selected teams will compete.
          The winning team receives full funding to bring their project to life.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
