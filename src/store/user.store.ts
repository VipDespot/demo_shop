import { STORAGE_KEYS } from "../constants/storage";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../pages/Proofile/Profile";

export interface UserStore {
  user: User | null;
  saveUser: (user: User) => void;
  clearUser: () => void;
}
export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      saveUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: STORAGE_KEYS.USER_PROFILE,
      partialize: (state) => ({ user: state.user }),
      storage: {
        getItem: (name) => {
          const item = localStorage.getItem(name);
          return item
            ? JSON.parse(item, (key, value) => {
                if (key === "birthDate" && value) return new Date(value);
                return value;
              })
            : null;
        },
        setItem: (name, value) => {
          localStorage.setItem(
            name,
            JSON.stringify(value, (key, value) => {
              if (value instanceof Date) return value.toISOString();
              return value;
            })
          );
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
);
