import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useAuth = create(
  persist(
    (set, get) => ({
      status: {
        state: "pending",
        data: {},
        token: "",
      },
      login: ({ data, token }) =>
        set(() => ({
          status: {
            state: "logged",
            data,
            token,
          },
        })),
      logout: () =>
        set({
          status: {
            state: "no-logged",
            data: {},
            token: "",
          },
        }),
    }),
    {
      name: "user-blog", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
