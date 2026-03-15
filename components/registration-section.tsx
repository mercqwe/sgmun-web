"use client";
import { useState, useEffect } from "react" // Added for the timer
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, User, UserCheck, Gavel, Timer } from "lucide-react"

const applications = [
  {
    title: "Delegation Application",
    description: "Apply as a school delegation.",
    icon: Users,
    link: "#",
    isActive: false, 
  },
  {
    title: "Individual Delegate Application",
    description: "Apply as an individual delegate.",
    icon: User,
    link: "https://forms.gle/1cwW81Ajw37KKHy98",
    startDate: new Date(2026, 2, 16, 12, 0, 0), 
  },
  {
    title: "Administration Staff Application",
    description: "Join the organization and logistics team.",
    icon: UserCheck,
    link: "#",
    isActive: false,
  },
  {
    title: "Chairboard Application",
    description: "Apply for Committee Director positions.",
    icon: Gavel,
    link: "#",
    isActive: false,
  },
]

// --- New Countdown Component ---
function Countdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const calculate = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft("Opening now...");
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return <span className="text-primary font-mono text-xs">{timeLeft}</span>;
}

export function RegistrationSection() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update current time every second to toggle the buttons automatically
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const isAppOpen = (app: typeof applications[0]) => {
    if (app.startDate) return currentTime >= app.startDate;
    return app.isActive;
  };

  return (
    <section id="registration" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Registration & Applications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your role to proceed. Applications open automatically at scheduled times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {applications.map((app) => {
            const Icon = app.icon;
            const open = isAppOpen(app);
            const isPending = app.startDate && !open;

            return (
              <Card
                key={app.title}
                className={`group transition-all duration-300 flex flex-col ${
                  open ? "hover:shadow-xl hover:-translate-y-1" : "opacity-80 grayscale-[0.5]"
                }`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    open ? "bg-primary/10" : "bg-muted"
                  }`}>
                    {open ? <Icon className="w-6 h-6 text-primary" /> : <Timer className="w-6 h-6 text-muted-foreground" />}
                  </div>
                  
                  <CardTitle className="text-xl">
                    {app.title}
                  </CardTitle>
                  
                  {/* Countdown Badge */}
                  {isPending && (
                    <div className="mt-2 flex items-center gap-2 bg-primary/5 border border-primary/20 w-fit px-2 py-1 rounded">
                      <span className="text-[10px] uppercase font-bold text-muted-foreground">Opens in:</span>
                      <Countdown targetDate={app.startDate!} />
                    </div>
                  )}

                  <CardDescription className="pt-2">{app.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="mt-auto">
                  <Button
                    className="w-full"
                    variant={open ? "default" : "secondary"}
                    disabled={!open}
                    asChild={open}
                  >
                    {open ? (
                      <a href={app.link}>Apply Now</a>
                    ) : (
                      <span>{isPending ? "Coming Soon" : "Stay Tuned"}</span>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}