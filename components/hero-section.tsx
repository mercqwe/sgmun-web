import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/images/people.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_35%,rgba(0,0,0,0.9)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Animated & Hoverable Logo */}
        <div className="flex justify-center mb-8">
          <div className="group relative transition-all duration-500 ease-out transform hover:scale-110">
            {/* Background Glow/Ring */}
            <div className="absolute inset-0 rounded-full bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl transition-colors duration-500 group-hover:bg-white/10 group-hover:border-white/20">
              <Image
                src="/images/sgmun-trimmed-transparent.png"
                alt="SGMUN Logo"
                width={180}
                height={180}
                priority
                className="drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] group-hover:rotate-3"
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6">
          <span className="bg-linear-to-br from-white via-white to-white/60 bg-clip-text text-transparent font-hand">
            SGMUN
          </span>
          <span className="ml-2 text-blue-400">&apos;26</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-4">
          Date TBA · Your School · Your City
        </p>

        <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10">
          A refined Model United Nations experience where future leaders meet
          diplomacy, debate, and decisive action.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-10" asChild>
            <Link href="#registration">Apply Now</Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-lg px-10 bg-white/10 hover:bg-white/20 text-white border-white/30"
            asChild
          >
            <Link href="#faq">Learn More</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-pulse cursor-pointer hover:text-white transition-colors">
        <span className="text-sm uppercase tracking-widest font-medium">
          Scroll Down
        </span>
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
