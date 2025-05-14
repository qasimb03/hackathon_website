
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

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
    <div className="w-full py-10">
      <h2 className="font-heading text-lg md:text-xl text-center mb-6 text-muted-foreground">
        Registration Opens In
      </h2>
      <div className="grid grid-cols-4 gap-3 md:gap-6">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <Card 
            key={unit} 
            className="bg-hackathon-muted border-none p-2 md:p-4 flex flex-col items-center justify-center"
          >
            <span className="text-xl md:text-4xl font-heading font-bold">
              {value < 10 ? `0${value}` : value}
            </span>
            <span className="text-xs md:text-sm uppercase font-medium text-muted-foreground mt-1">
              {unit}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
