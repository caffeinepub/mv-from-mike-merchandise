import type { CartItem } from "@/App";
import ProductCard from "@/components/ProductCard";
import { motion } from "motion/react";

interface FeaturedProductsProps {
  onAddToCart: (item: Omit<CartItem, "quantity">) => void;
}

export const PRODUCTS = [
  {
    id: 1,
    name: "Classic MV Tee",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    category: "Tops",
  },
  {
    id: 2,
    name: "Premium Hoodie",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80",
    category: "Tops",
  },
  {
    id: 3,
    name: "MV Cap",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80",
    category: "Accessories",
  },
  {
    id: 4,
    name: "Logo Snapback",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&q=80",
    category: "Accessories",
  },
  {
    id: 5,
    name: "Cargo Shorts",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=600&q=80",
    category: "Bottoms",
  },
  {
    id: 6,
    name: "MV Crewneck",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1614975059251-992f11792b9f?w=600&q=80",
    category: "Tops",
  },
  {
    id: 7,
    name: "Varsity Jacket",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
    category: "Outerwear",
  },
  {
    id: 8,
    name: "Accessories Bundle",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80",
    category: "Accessories",
  },
];

export default function FeaturedProducts({
  onAddToCart,
}: FeaturedProductsProps) {
  return (
    <section id="shop" className="py-24 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-gold font-sans mb-3">
          Collection
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
          Featured Pieces
        </h2>
        <div className="mt-4 mx-auto w-16 h-px bg-gold" />
      </motion.div>

      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        data-ocid="shop.list"
      >
        {PRODUCTS.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            data-ocid={`shop.item.${i + 1}`}
          >
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
