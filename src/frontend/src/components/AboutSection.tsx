import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-gold font-sans mb-3">
            Our Story
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Passion Drives
            <span className="block text-gold">Everything</span>
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed mb-5">
            MV from Mike Merchandise was born from a deep love of automotive
            culture and streetwear. Founded on the principle that what you wear
            should reflect the passion driving you forward, every piece we
            create carries the spirit of the garage, the track, and the street.
          </p>
          <p className="text-muted-foreground font-sans leading-relaxed mb-8">
            From our signature turbocharger emblem to the quality stitching on
            every garment, Mike Merchandise stands for uncompromising attention
            to detail. We don't just sell clothes — we create wearable
            statements for those who live the lifestyle.
          </p>
          <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { value: "500+", label: "Products Sold" },
              { value: "100%", label: "Premium Quality" },
              { value: "MV", label: "Desire. Passion." },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-2xl font-bold text-gold">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground font-sans tracking-widest uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square border border-border p-8 flex items-center justify-center">
            <img
              src="/assets/uploads/screenshot_2026-03-27_at_7.54.16_pm-019d338e-3689-7689-851b-c6d5e6bae40f-1.png"
              alt="Mike Merchandise Brand"
              className="w-full max-w-xs object-contain invert opacity-80"
            />
            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold" />
            <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold" />
            <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold" />
            <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
