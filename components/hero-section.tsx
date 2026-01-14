import { Button } from "@/components/ui/button";

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
          backgroundImage: "url(https://placehold.co/1920x1080)",
        }}
      >
        {/* Blur + darken */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

        {/* Vignette (stronger, cinematic) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_35%,rgba(0,0,0,0.9)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6">
          <span className="bg-linear-to-br from-white via-white to-white/60 bg-clip-text text-transparent font-hand">
            SGMUN
          </span>
          <span className="ml-2 bg-linear-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
            &apos;26
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-4 ">
          Date TBA · Your School · Your City
        </p>

        <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10">
          A refined Model United Nations experience where future leaders meet
          diplomacy, debate, and decisive action.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-10">
            Apply Now
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-lg px-10 bg-white/10 hover:bg-white/20 text-white border-white/30"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
