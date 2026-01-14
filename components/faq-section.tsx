import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the Dress Code?",
    answer:
      "All delegates are expected to adhere to Western Business Attire. This means formal suits for all participants, maintaining the professional atmosphere of an international diplomatic conference.",
  },
  {
    question: "Is accommodation provided?",
    answer:
      "Unfortunately, we do not provide accommodation for participants. However, we can provide recommendations for nearby hotels and lodging options upon request.",
  },
  {
    question: "When and where will the event take place?",
    answer:
      "The event will be held at [Your School Name] on [specific dates]. Detailed venue information and schedules will be sent to confirmed delegates via email.",
  },
  {
    question: "Do I need prior MUN experience?",
    answer:
      "No! We welcome first-timers with open arms. Our comprehensive Rules of Procedure will be published before the conference, and we will provide orientation sessions for newcomers.",
  },
  {
    question: "How do I register?",
    answer:
      "You can register through our application forms below. Choose between delegation applications (for schools), individual delegate applications, or special staff positions. Application details and deadlines will be sent upon form submission.",
  },
  {
    question: "What is the conference fee?",
    answer:
      "Conference fees vary by registration type. Detailed fee information will be provided after your application is reviewed. Payment instructions will be sent to your email upon acceptance.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Common questions answered about the MUN conference
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
