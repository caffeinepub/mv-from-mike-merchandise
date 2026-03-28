import type { CartItem } from "@/App";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { toast } from "sonner";

interface CartSidebarProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemoveItem: (id: number) => void;
}

export default function CartSidebar({
  open,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartSidebarProps) {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleCheckout = () => {
    toast.success("Order placed successfully! We'll be in touch shortly.");
    onClose();
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md bg-card border-border flex flex-col p-0"
        data-ocid="cart.sheet"
      >
        <SheetHeader className="px-6 py-5 border-b border-border">
          <SheetTitle className="font-serif text-xl text-card-foreground flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-gold" />
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div
            className="flex-1 flex flex-col items-center justify-center gap-4 p-6"
            data-ocid="cart.empty_state"
          >
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            <p className="text-muted-foreground font-sans text-sm text-center">
              Your cart is empty. Add some pieces to get started.
            </p>
            <Button
              variant="outline"
              className="rounded-none border-gold text-gold hover:bg-gold hover:text-primary-foreground tracking-widest uppercase text-xs font-sans"
              onClick={onClose}
              data-ocid="cart.secondary_button"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 px-6 py-4">
              <div className="flex flex-col gap-4">
                {items.map((item, i) => (
                  <div
                    key={item.id}
                    className="flex gap-3 py-3 border-b border-border last:border-0"
                    data-ocid={`cart.item.${i + 1}`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-20 object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-sm font-medium text-card-foreground leading-snug mb-1">
                        {item.name}
                      </p>
                      <p className="text-gold text-sm font-sans font-semibold mb-3">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          className="w-6 h-6 flex items-center justify-center border border-border text-muted-foreground hover:border-gold hover:text-gold transition-colors"
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          data-ocid="cart.secondary_button"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-sans w-6 text-center text-card-foreground">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          className="w-6 h-6 flex items-center justify-center border border-border text-muted-foreground hover:border-gold hover:text-gold transition-colors"
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          data-ocid="cart.secondary_button"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        data-ocid="cart.delete_button"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      <p className="text-card-foreground font-sans text-sm font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="px-6 py-5 border-t border-border">
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground font-sans text-sm uppercase tracking-widest">
                  Subtotal
                </span>
                <span className="font-serif text-lg font-bold text-card-foreground">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <Separator className="my-3 bg-border" />
              <Button
                className="w-full rounded-none bg-gold text-primary-foreground hover:bg-gold-dim font-sans font-semibold tracking-widest uppercase text-sm py-6 transition-all duration-300"
                onClick={handleCheckout}
                data-ocid="cart.submit_button"
              >
                Checkout
              </Button>
              <button
                type="button"
                className="mt-3 w-full text-xs text-muted-foreground font-sans tracking-widest uppercase hover:text-foreground transition-colors text-center"
                onClick={onClose}
                data-ocid="cart.cancel_button"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
