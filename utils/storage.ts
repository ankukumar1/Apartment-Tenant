export const storage = {
  getToken: () => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("token");
  },

  setToken: (token: string) => {
    if (typeof window === "undefined") return;
    localStorage.setItem("token", token);
  },

  removeToken: () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem("token");
  },

  setUser: (user: any) => {
    if (typeof window === "undefined") return;
    localStorage.setItem("user", JSON.stringify(user));
  },

  getUser: () => {
    if (typeof window === "undefined") return null;
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },

  removeUser: () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem("user");
  },

  clear: () => {
    if (typeof window === "undefined") return;
    localStorage.clear();
  },
};
