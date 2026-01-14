import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Shield, Heart, Leaf, GraduationCap, Flame, Gavel, Users } from "lucide-react"

const committees = [
  {
    name: "G-20",
    icon: Globe,
    agenda: "Addressing global economic recovery and sustainable development strategies in a post-pandemic world.",
  },
  {
    name: "DISEC",
    icon: Shield,
    agenda: "Regulating cyber warfare and ensuring international cybersecurity standards.",
  },
  {
    name: "WHO",
    icon: Heart,
    agenda: "Strengthening global health systems and pandemic preparedness for future health crises.",
  },
  {
    name: "UNEP",
    icon: Leaf,
    agenda: "Combating climate change through renewable energy adoption and carbon neutrality goals.",
  },
  {
    name: "UNICEF",
    icon: GraduationCap,
    agenda: "Ensuring equitable access to quality education for children in conflict zones.",
  },
  {
    name: "IAEA",
    icon: Flame,
    agenda: "Promoting nuclear safety and preventing nuclear proliferation in developing nations.",
  },
  {
    name: "ICJ",
    icon: Gavel,
    agenda: "International Court of Justice: Adjudicating disputes on maritime boundaries and territorial claims.",
  },
  {
    name: "Crisis Committee",
    icon: Users,
    agenda: "Dynamic crisis simulation requiring rapid response to evolving international incidents.",
  },
]

export function CommitteesSection() {
  return (
    <section id="committees" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">SGMUN '26 Committees & Agenda</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore the diverse simulation bodies of SGMUN '26
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {committees.map((committee) => {
            const Icon = committee.icon
            return (
              <Card
                key={committee.name}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{committee.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{committee.agenda}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
