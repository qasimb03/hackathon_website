
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-20 text-center">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-mono font-bold mb-10 tracking-tighter">
        <span className="gradient-text">ELITE</span>
      </h1>
      
      <div className="space-y-10 max-w-3xl mx-auto">
        <p className="text-xl md:text-3xl font-mono tracking-tight leading-tight">
          <span className="text-white">10</span>{" "}
          <span className="text-muted-foreground">TEAMS</span>{" "}
          <span className="text-white">1</span>{" "}
          <span className="text-muted-foreground">FUNDED</span>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
