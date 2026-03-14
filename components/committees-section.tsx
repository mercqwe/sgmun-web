import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Plane,
  ShieldAlert,
  Users2,
} from "lucide-react";

const committees = [
  {
    name: "ICAO",
    icon: Plane,
    agenda:
      "In the International Civil Aviation Organization (ICAO), international aviation security procedures are discussed to address past security failures. Events such as the September 11 attacks showed the importance of stronger global aviation security. Delegates debate ways to improve safety measures, prevent terrorism, and strengthen international cooperation in aviation.",
    bg: "/images/committees/icao.jpeg",
  },
  {
    name: "UNSC",
    icon: ShieldAlert,
    agenda:
      "In the United Nations Security Council (UNSC), the **South China Sea disputes are discussed as an important international security issue. These disputes involve territorial claims, maritime rights, and military activities between several countries. Delegates debate possible solutions to reduce tensions and maintain peace and stability in the region.",
    bg: "/images/committees/unsc.jpeg",
  },
  {
    name: "SOCHUM",
    icon: Users2,
    agenda:
      "In the Social, Humanitarian and Cultural Committee (SOCHUM), freedom of expression is discussed as a key human right. It allows people to express their ideas, opinions, and beliefs freely. Delegates debate how to protect this right while also preventing hate speech and protecting the rights of others.",
    bg: "/images/committees/sochum.jpeg",
  },
];

export function CommitteesSection() {
  return (
    <section id="committees" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            SGMUN &apos;26 Committees & Agenda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore the diverse simulation bodies of SGMUN &apos;26
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        {/* Updated grid to center the 3 items on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {committees.map((committee) => {
            const Icon = committee.icon;
            return (
              <Card
                key={committee.name}
                className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60 blur-[2px] scale-105 group-hover:opacity-100 group-hover:blur-0 group-hover:scale-100 transition-all duration-300"
                  style={{ backgroundImage: `url(${committee.bg})` }}
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                <CardHeader className="relative z-10">
                  <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/40 transition-colors">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{committee.name}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="leading-relaxed text-white/90 font-medium">
                    {committee.agenda}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}