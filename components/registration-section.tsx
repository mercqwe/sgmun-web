import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, User, Briefcase, UserCheck, Gavel } from "lucide-react"

const applications = [
  {
    title: "Delegation Application",
    description: "Apply as a school delegation.",
    icon: Users,
    link: "#",
  },
  {
    title: "Individual Delegate Application",
    description: "Apply as an individual delegate.",
    icon: User,
    link: "#",
  },
  {
    title: "CTM Application",
    description: "Apply for Crisis Team Member positions.",
    icon: Briefcase,
    link: "#",
  },
  {
    title: "Administration Staff Application",
    description: "Join the organization and logistics team.",
    icon: UserCheck,
    link: "#",
  },
  {
    title: "Chairboard Application",
    description: "Apply for Committee Director positions.",
    icon: Gavel,
    link: "#",
  },
]

export function RegistrationSection() {
  return (
    <section id="registration" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Registration & Applications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Select your role to proceed to the application form
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {applications.map((app) => {
            const Icon = app.icon
            return (
              <Card
                key={app.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 flex flex-col"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{app.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{app.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button className="w-full" asChild>
                    <a href={app.link}>Application Form</a>
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
