const InfoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-mono font-bold mb-6 tracking-tighter">
        <span className="gradient-text">HACK THE FABRIC</span>
      </h1>
      
      <div className="space-y-4 max-w-3xl mx-auto mb-5">
        <p className="text-xl md:text-3xl font-mono tracking-tight leading-tight">
          <span className="text-white">10</span>{" "}
          <span className="text-muted-foreground">TEAMS</span>{" "}
          <span className="text-white">COMPETE</span>{" "}
          <span className="text-muted-foreground">FOR</span>{" "}
          <span className="text-white">FUNDING</span>
        </p>
      </div>
      <div className="space-y-4 max-w-3xl mx-auto">
        <p className="text-xl md:text-2xl font-mono tracking-tight leading-tight">
          <span className="text-white">MAY</span>{" "}
          <span className="text-muted-foreground">30</span>
          <span className="text-white">,</span>{" "}
          <span className="text-muted-foreground">2025</span>{" "}
          <span className="text-white">-</span>{" "}
          <span className="text-muted-foreground">7</span>{" "}
          <span className="text-white">PM</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default InfoSection;
