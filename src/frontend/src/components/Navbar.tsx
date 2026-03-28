import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface NavbarProps {
  cartCount: number;
  onCartOpen: () => void;
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ cartCount, onCartOpen }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0" data-ocid="nav.link">
            <img
              src="/assets/uploads/whatsapp_image_2026-03-28_at_2.02.29_pm-019d3393-204a-731f-a1f8-2f21c169a543-2.jpeg"
              alt="Mike Merchandise Logo"
              className="h-12 md:h-16 w-auto object-contain"
              style={{ mixBlendMode: "screen" }}
            />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-200"
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Cart + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="relative text-foreground hover:text-gold hover:bg-transparent"
              onClick={onCartOpen}
              data-ocid="nav.button"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-gold text-primary-foreground border-0 rounded-full">
                  {cartCount}
                </Badge>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground hover:text-gold hover:bg-transparent"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-ocid="nav.toggle"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <ul className="py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors"
                      onClick={() => setMobileOpen(false)}
                      data-ocid="nav.link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
