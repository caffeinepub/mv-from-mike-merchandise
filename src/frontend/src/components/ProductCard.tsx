import type { CartItem } from "@/App";
import { Button } from "@/components/ui/button";
import { Check, ShoppingBag } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
  };
  onAddToCart: (item: Omit<CartItem, "quantity">) => void;
}

export default function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group bg-card border border-border overflow-hidden transition-all duration-300 hover:border-gold/50 hover:shadow-gold">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
        <span className="absolute top-3 left-3 text-xs tracking-widest uppercase text-gold font-sans bg-background/80 px-2 py-1">
          {product.category}
        </span>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-serif text-base font-semibold text-card-foreground mb-1 leading-snug">
          {product.name}
        </h3>
        <p className="text-gold font-sans font-semibold text-sm mb-4">
          ${product.price}
        </p>
        <Button
          className="w-full rounded-none text-xs tracking-widest uppercase font-sans font-semibold transition-all duration-300"
          style={{
            background: added ? "oklch(0.72 0.12 75)" : "transparent",
            border: added ? "none" : "1px solid oklch(0.72 0.12 75)",
            color: added ? "oklch(0.1 0 0)" : "oklch(0.72 0.12 75)",
          }}
          onClick={handleAdd}
          data-ocid="shop.button"
        >
          {added ? (
            <>
              <Check className="h-3 w-3 mr-2" /> Added
            </>
          ) : (
            <>
              <ShoppingBag className="h-3 w-3 mr-2" /> Add to Cart
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
