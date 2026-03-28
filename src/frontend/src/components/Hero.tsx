import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, oklch(0.97 0 0), oklch(0.97 0 0) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, oklch(0.97 0 0), oklch(0.97 0 0) 1px, transparent 1px, transparent 80px)",
          }}
        />
      </div>

      {/* Gold gradient orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.12 75) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-8"
        >
          <img
            src="/assets/uploads/whatsapp_image_2026-03-28_at_2.02.29_pm-019d3393-204a-731f-a1f8-2f21c169a543-2.jpeg"
            alt="Mike Merchandise"
            className="w-64 md:w-80 lg:w-96 object-contain opacity-90"
            style={{ mixBlendMode: "screen" }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-xs md:text-sm tracking-[0.4em] uppercase text-gold font-sans font-medium mb-6"
        >
          Desire MV Passion
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-none mb-4"
        >
          Mike
          <span className="block text-gold">Merchandise</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto mb-10 font-sans"
        >
          Premium apparel crafted for those who drive with passion. Built for
          the street. Born from the track.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gold text-primary-foreground hover:bg-gold-dim font-sans font-semibold tracking-widest uppercase text-sm px-10 py-6 rounded-none transition-all duration-300 hover:shadow-gold"
            data-ocid="hero.primary_button"
          >
            <a href="#shop">Shop Now</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border text-foreground hover:bg-secondary hover:text-foreground font-sans font-medium tracking-widest uppercase text-sm px-10 py-6 rounded-none transition-all duration-300"
            data-ocid="hero.secondary_button"
          >
            <a href="#about">Our Story</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-muted-foreground font-sans">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
