export interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  shadow: string;
  cardBg: string;
  navBg: string;
}

export const lightTheme: Theme = {
  primary: "#0891b2", // Ciano escuro
  secondary: "#06b6d4", // Ciano
  accent: "#22d3ee", // Ciano claro
  background: "#ffffff",
  surface: "#f8fafc",
  text: "#0f172a",
  textSecondary: "#475569",
  border: "#e2e8f0",
  shadow: "0 4px 6px rgba(8, 145, 178, 0.1)",
  cardBg: "#ffffff",
  navBg: "rgba(255, 255, 255, 0.9)",
};

export const darkTheme: Theme = {
  primary: "#22d3ee", // Ciano claro
  secondary: "#06b6d4", // Ciano
  accent: "#0891b2", // Ciano escuro
  background: "#0f172a",
  surface: "#1e293b",
  text: "#f1f5f9",
  textSecondary: "#cbd5e1",
  border: "#334155",
  shadow: "0 4px 6px rgba(34, 211, 238, 0.1)",
  cardBg: "#1e293b",
  navBg: "rgba(15, 23, 42, 0.9)",
};
