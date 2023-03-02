import currency from "currency.js";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const CART_STORAGE_KEY = "shopping_cart";

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      wishItems: [],
      addItem: (item) => set(state => {
        const existingItem = state.items.find(oldItem => oldItem.id === item.id);

        if (existingItem) {
          return {
            items: state.items.map(oldItem => {
              if (oldItem.id === item.id) {
                return { ...oldItem, quantity: oldItem?.quantity ? oldItem.quantity + 1 : 1 };
              }
              return oldItem;
            }),
          };
        }
        return { items: [...state.items, { ...item, quantity: 1 }] };
      }),

      addItemWithQuantity: (item) => set(state => {
        const existingItem = state.items.find(oldItem => oldItem.id === item.id);

        if (existingItem) {
          return {
            items: state.items.map(oldItem => {
              if (oldItem.id === item.id) {
                return { ...oldItem, quantity: oldItem?.quantity + item?.quantity };
              }
              return oldItem;
            }),
          };
        }
        return { items: [...state.items, { ...item, quantity: 1 }] };
      }),
      addToWishlistItems: (item) => set(state => {
        const existingItem = state.wishItems.find(oldItem => oldItem.id === item.id);

        if (existingItem) {
          return {
            wishItems: state.wishItems.map(oldItem => {
              if (oldItem.id === item.id) {
                return { ...oldItem, quantity: oldItem?.quantity ? oldItem.quantity + 1 : 1 };
              }
              return oldItem;
            }),
          };
        }
        return { wishItems: [...state.wishItems, { ...item, quantity: 1 }] };
      }),

      upadateItemWithQuantity: (item) => set(state => {
        const existingItem = state.items.find(oldItem => oldItem.id === item.id);
        // console.log(existingItem);
        if (existingItem) {
          return {
            items: state.items.map(oldItem => {
              if (oldItem.id === item.id) {
                return {
                  ...oldItem,
                  quantity: oldItem?.quantity,
                };
              }
              return oldItem;
            }),
          };
        }
        return { items: [...state.items, { ...item, quantity: 1 }] };
      }),
      getTotal: () => get().items,
      hasProduct: productId => get().items.some(item => item.id === productId),
      length: () => get().items.reduce((prevValue, currentValue) => prevValue + currentValue.quantity, 0),
      removeItem: (itemId) =>
        set((state) => {
          const updatedItems = state.items.filter((item) => item.id !== itemId);
          const updatedTotal = updatedItems.reduce(
            (total, item) => total + item.price,
            0
          );
          return { items: updatedItems, total: updatedTotal };
        }),
    }),
    {
      name: CART_STORAGE_KEY,
    }
  )
);

export default useCartStore;
