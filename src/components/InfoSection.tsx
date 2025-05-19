const InfoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-mono font-bold tracking-tighter">
        <span className="text-hackathon-accent">Hack2Fund</span>
      </h1>
      <h4 className="text-sm md:text-md lg:text-lg font-mono font-bold mb-8 tracking-tighter">
        <em className="text-hackathon-accent">Brought to you by WovenTech</em>
      </h4>
      
      <div className="space-y-4 max-w-3xl mx-auto mb-5">
        <p className="text-xl md:text-3xl font-mono tracking-tight leading-tight">
          <span className="text-hackathon-accent">Hack YC-Style Ideas - Earn Real Funding</span>{" "}
        </p>
      </div>
      <div className="space-y-4 max-w-3xl mx-auto">
        <p className="text-md md:text-lg font-mono tracking-tight leading-tight">
          <span className="text-hackathon-accent">Free Food & Swag</span>{" "}
        </p>
      </div>
      <div className="space-y-4 max-w-3xl mx-auto mb-5">
        <p className="text-md md:text-lg font-mono tracking-tight leading-tight">
          <span className="text-hackathon-accent">Keynote Speakers & Networking</span>{" "}
        </p>
      </div>
      <div className="space-y-4 max-w-3xl mx-auto">
        <p className="text-xl md:text-2xl font-mono tracking-tight leading-tight">
          <span className="text-hackathon-accent">May 30 - June 1</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default InfoSection;
