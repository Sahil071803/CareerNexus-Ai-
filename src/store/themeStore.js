import { create } from "zustand";

const STORAGE_KEY = "careernexus-theme";

function getInitialMode() {
  if (typeof localStorage !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  }
  return "light";
}

function applyModeToDocument(mode) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.dataset.muiColorScheme = mode;
  root.classList.toggle("dark", mode === "dark");
  root.style.colorScheme = mode;
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(STORAGE_KEY, mode);
  }
}

export const useThemeStore = create((set) => ({
  mode: getInitialMode(),
  toggleMode: () =>
    set((state) => {
      const next = state.mode === "light" ? "dark" : "light";
      applyModeToDocument(next);
      return { mode: next };
    }),
  setMode: (mode) => {
    if (mode !== "light" && mode !== "dark") return;
    applyModeToDocument(mode);
    set({ mode });
  },
  initTheme: () => {
    const mode = getInitialMode();
    applyModeToDocument(mode);
    set({ mode });
  }
}));
