"use client"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { showPopup } from "../component/popup"


const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],

      addToCart: (item) => {
        const existing = get().cartItems.find((p) => p.id === item.id)

        if (existing) {
          showPopup("This product is already in your cart", "error")
        } else {
          set({
            cartItems: [...get().cartItems, { ...item, quantity: 1 }]
          })
          
          showPopup("Product added to cart!", "success")
        }
      },

      removeFromCart: (id) =>
        set({
          cartItems: get().cartItems.filter((p) => p.id !== id),
        }),

      clearCart: () => set({ cartItems: [] }),

      increaseQuantity: (id) =>
        set({
          cartItems: get().cartItems.map((p) =>
            p.id === id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        }),

      decreaseQuantity: (id) =>
        set({
          cartItems: get().cartItems
            .map((p) =>
              p.id === id ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p
            )
            .filter((p) => p.quantity > 0),
        }),
    }),
    { name: "cart-storage" }
  )
)

export default useCartStore