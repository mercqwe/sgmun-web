import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, User, Briefcase, UserCheck, Gavel, Timer } from "lucide-react"

const applications = [
  {
    title: "Delegation Application",
    description: "Apply as a school delegation.",
    icon: Users,
    link: "#",
    isActive: false, // This form is open
  },
  {
    title: "Individual Delegate Application",
    description: "Apply as an individual delegate.",
    icon: User,
    link: "https://forms.gle/1cwW81Ajw37KKHy98",
    isActive: true, // This form is open
  },
  {
    title: "Administration Staff Application",
    description: "Join the organization and logistics team.",
    icon: UserCheck,
    link: "#",
    isActive: false, // This form is closed/coming soon
  },
  {
    title: "Chairboard Application",
    description: "Apply for Committee Director positions.",
    icon: Gavel,
    link: "#",
    isActive: false, // This form is closed/coming soon
  },
]

export function RegistrationSection() {
  return (
    <section id="registration" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Registration & Applications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Select your role to proceed to the application form. Note that some positions may open later.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {applications.map((app) => {
            const Icon = app.icon
            return (
              <Card
                key={app.title}
                className={`group transition-all duration-300 border-border/50 flex flex-col ${app.isActive
                    ? "hover:shadow-xl hover:-translate-y-1"
                    : "opacity-80 grayscale-[0.5]"
                  }`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${app.isActive ? "bg-primary/10 group-hover:bg-primary/20" : "bg-muted"
                    }`}>
                    {app.isActive ? (
                      <Icon className="w-6 h-6 text-primary" />
                    ) : (
                      <Timer className="w-6 h-6 text-muted-foreground" />
                    )}
                  </div>
                  <CardTitle className="text-xl flex items-center gap-2">
                    {app.title}
                    {!app.isActive && (
                      <span className="text-[10px] uppercase tracking-wider bg-muted text-muted-foreground px-2 py-1 rounded">
                        Soon
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">{app.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button
                    className="w-full"
                    variant={app.isActive ? "default" : "secondary"}
                    disabled={!app.isActive}
                    asChild={app.isActive}
                  >
                    {app.isActive ? (
                      <a href={app.link}>Application Form</a>
                    ) : (
                      <span>Stay Tuned</span>
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