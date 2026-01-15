import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

// 1. Easy-to-edit content object
const SEC_GEN_DATA = {
  name: "İlkkan",
  title: "Secretary-General, SGMUN '26",
  image: "/images/ilkkan.jpg", // Ensure this exists in public/images
  paragraphs: [
    "Distinguished delegates, advisors, and guests,",
    "It is with great honor and excitement that I welcome you to SGMUN '26. As we embark on this journey of diplomatic discourse and global problem-solving, we stand at the threshold of an experience that will challenge, inspire, and transform us.",
    "This conference has been meticulously designed to provide a platform where diverse perspectives converge, where respectful debate flourishes, and where innovative solutions to pressing global issues are forged. Our dedicated team has worked tirelessly to create an environment that mirrors the complexity and significance of international diplomacy.",
    "I encourage each of you to embrace this opportunity fully—to listen with an open mind, to speak with conviction, and to collaborate with empathy. The friendships you forge and the insights you gain here will resonate far beyond these few days.",
    "Welcome to SGMUN '26. May this be an experience that shapes your understanding of our interconnected world and your role in creating positive change.",
  ],
};

export function LetterSection() {
  return (
    <section id="letter" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
            Letter from the Secretary-General
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* 2. Photo Column */}
            <div className="lg:col-span-4 space-y-4">
              <div className="relative aspect-3/4 overflow-hidden rounded-2xl shadow-xl border-4 border-white">
                <Image
                  src={SEC_GEN_DATA.image}
                  alt={SEC_GEN_DATA.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center lg:text-left px-2">
                <p className="font-bold text-2xl text-foreground">
                  {SEC_GEN_DATA.name}
                </p>
                <p className="text-primary font-medium">{SEC_GEN_DATA.title}</p>
              </div>
            </div>

            {/* 3. Letter Column */}
            <Card className="lg:col-span-8 border-none shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-lg max-w-none">
                  {SEC_GEN_DATA.paragraphs.map((text, index) => (
                    <p
                      key={index}
                      className="text-muted-foreground leading-relaxed mb-6 last:mb-8"
                    >
                      {text}
                    </p>
                  ))}

                  <div className="border-t border-border pt-6">
                    <p className="font-semibold text-foreground italic">
                      Sincerely,
                    </p>
                    <p className="font-bold text-foreground">
                      {SEC_GEN_DATA.name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {SEC_GEN_DATA.title}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
