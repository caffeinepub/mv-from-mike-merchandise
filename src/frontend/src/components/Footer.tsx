import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const caffeine = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer id="contact" className="bg-card border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-border">
          {/* Brand */}
          <div>
            <img
              src="/assets/uploads/screenshot_2026-03-27_at_7.54.16_pm-019d338e-3689-7689-851b-c6d5e6bae40f-1.png"
              alt="Mike Merchandise"
              className="h-16 w-auto object-contain invert mb-4"
            />
            <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-xs">
              Premium merchandise for those who drive with passion. DESIRE MV
              PASSION.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-foreground mb-4 tracking-widest uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Shop", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-gold transition-colors font-sans text-sm"
                    data-ocid="footer.link"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-foreground mb-4 tracking-widest uppercase">
              Get in Touch
            </h4>
            <p className="text-muted-foreground font-sans text-sm mb-2">
              info@mikemerchandise.com
            </p>
            <p className="text-muted-foreground font-sans text-sm">
              @mikemerchandise
            </p>
            <div className="mt-6">
              <p className="text-xs text-muted-foreground font-sans tracking-widest uppercase mb-2">
                Tagline
              </p>
              <p className="font-serif text-gold text-lg italic">
                Desire MV Passion
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground font-sans text-xs">
            &copy; {year} Mike Merchandise. All rights reserved.
          </p>
          <p className="text-muted-foreground font-sans text-xs">
            Built with ❤️ using{" "}
            <a
              href={caffeine}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
