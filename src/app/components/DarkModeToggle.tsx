"use client";

export default function DarkModeToggle({
  isDark,
  toggleDark,
}: {
  isDark: boolean;
  toggleDark: () => void;
}) {
  return (
    <button
      onClick={toggleDark}
      className="px-3 py-1 border rounded text-sm select-none"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
