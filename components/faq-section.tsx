import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is MUN",
    answer:
      "MUN is the abbreviation of Model United Nations. As you could guess from the name, this programme is launched to be a Model of UNited Nations conferences. It's aim is to get young people more involved in diplomacy, and what United Nation does. To simply put it in words, we could say that MUN is a artificial United Nation conference, but with more fun.",
  },
  {
    question: "Date And place",
    answer: "16-17-18 April 2026, Sabiha Gökçen Vocational and Technical Anatolian High School",
  },
  {
    question: "Pricing",
    answer: "It's 650₺.",
  },
  {
    question: "Dress code",
    answer: (
      <div className="space-y-2">
        <p>Dress Code: Western Business Attire</p>
        <p>The dress code for MUN is Western Business Attire. This means you must dress like a professional diplomat to show respect for the conference.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>For Men: Wear a suit or dress pants with a blazer, a collared shirt, a tie, and formal shoes.</li>
          <li>For Women: Wear a suit (pants or skirt), a professional dress, or a blouse with slacks. Ensure outfits are modest and formal.</li>
          <li>What to Avoid: Do NOT wear jeans, t-shirts, sneakers, or hoodies.</li>
        </ul>
        <p>The goal is to look neat, professional, and serious. Always stay polished during committee sessions.</p>
      </div>
    ),
  },
  {
    question: "Shuttles",
    answer: "We do't have shuttles for our Mock MUN.",
  },
  {
    question: "Comittes",
    answer: "Our Beginner Comitee is SOCHUM (A1-A2) if you think that your social rights are being restricted and if you want to defend them this comitee is Especially for you. Our first intermediate comitee is UNSC (B1-B2), this comittee is for the delegates who love action and wishing to talk about international security flaws. Second İntermediate ICAO (B1-B2) comitee is about past accidents and terrorist incidents caused by negligence on aircraft.",
  },
  {
    question: "Do i have to speak fluent english",
    answer: "In a Model United Nations (MUN) conference, you don’t need to speak fluent English. The goal is to express your ideas clearly enough to be understood. While English is the working language, delegates are often from diverse backgrounds and speak it as a second or third language. What matters most is your ability to communicate effectively, not perfect grammar. It’s okay to use simple sentences and pause to think. What’s important is confidence and preparation, and remember that everyone makes mistakes sometimes. So, if your English isn’t perfect yet, don’t worry! You’ll do great as long as you practice and focus on conveying your ideas.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}