import { Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              SGMUN<span className="text-accent">&apos;26</span>
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              SGMUN’26 is a unique MUN conference proudly organized by Sabiha Gökçen Vocational and Technical Anatolian High School. It offers students the chance to debate global issues, develop diplomacy and public speaking skills, and experience the atmosphere of an international conference. SGMUN’26 promises an inspiring and memorable experience for every delegate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#committees"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Committees
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#registration"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Registration
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:sgmtalmun@gmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  sgmtalmun@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Sabiha Gökçen Vocational and Technical Anatolian High School
                  <br />
                  Eskişehir, Turkey
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} SGMUN. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
