export default function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[var(--fallback-gradient)] font-bold border-b-2 border-[var(--fallback-gradient)]">
      {children}
    </span>
  );
}
