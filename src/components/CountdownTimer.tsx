import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = Number(targetDate) - new Date().getTime();
      let newTimeLeft: TimeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return newTimeLeft;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-full py-4 sm:py-6 md:py-8">
      <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-8">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <div className="relative w-full">
              <div className="bg-hackathon-dark backdrop-blur-sm border border-hackathon-accent p-2 sm:p-3 md:p-4 aspect-square flex items-center justify-center">
                <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl tracking-tighter text-hackathon-accent red-hat-display-bold">
                  {value < 10 ? `0${value}` : value}
                </span>
              </div>
              <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 bg-hackathon-dark px-1 sm:px-2">
                <span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-wider text-hackathon-accent red-hat-display-light">
                  {unit}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
