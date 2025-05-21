const InfoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-4 sm:py-6 md:py-8 text-center px-4">
      <div className="space-y-3 sm:space-y-4 max-w-2xl sm:max-w-3xl mx-auto">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight red-hat-display-bold">
          <span className="text-hackathon-accent">may 30 - june 1</span>
        </p>
      </div>
      <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter red-hat-display-bold animate-fade-in">
        <span className="text-hackathon-accent">hack2fund.</span>
      </h1>
      <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 tracking-tighter red-hat-display-light">
        <em className="text-hackathon-accent">brought to you by woventech</em>
      </h4>

      <div className="space-y-3 sm:space-y-4 max-w-2xl sm:max-w-3xl mx-auto mb-3 sm:mb-5">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight red-hat-display-bold"></p>
      </div>
    </div>
  );
};

export default InfoSection;
