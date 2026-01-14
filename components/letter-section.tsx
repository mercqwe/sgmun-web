import { Card, CardContent } from "@/components/ui/card"

export function LetterSection() {
  return (
    <section id="letter" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
            Letter from the Secretary-General
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12" />

          <Card className="border-none shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Distinguished delegates, advisors, and guests,
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  It is with great honor and excitement that I welcome you to SGMUN '26. As we embark on this journey of
                  diplomatic discourse and global problem-solving, we stand at the threshold of an experience that will
                  challenge, inspire, and transform us.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This conference has been meticulously designed to provide a platform where diverse perspectives
                  converge, where respectful debate flourishes, and where innovative solutions to pressing global issues
                  are forged. Our dedicated team has worked tirelessly to create an environment that mirrors the
                  complexity and significance of international diplomacy.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I encourage each of you to embrace this opportunity fully—to listen with an open mind, to speak with
                  conviction, and to collaborate with empathy. The friendships you forge and the insights you gain here
                  will resonate far beyond these few days.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Welcome to SGMUN '26. May this be an experience that shapes your understanding of our interconnected
                  world and your role in creating positive change.
                </p>
                <div className="border-t border-border pt-6">
                  <p className="font-semibold text-foreground">Your Name</p>
                  <p className="text-muted-foreground">Secretary-General, SGMUN '26</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
