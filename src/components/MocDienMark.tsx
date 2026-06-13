export function MocDienMark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stepped horizontal bars - descending widths */}
      <rect x="4" y="28" width="32" height="8" fill="#1a1a1a" />
      <rect x="4" y="18" width="24" height="8" fill="#1a1a1a" />
      <rect x="4" y="8" width="16" height="8" fill="#1a1a1a" />
      
      {/* Ochre accent as cut-edge detail */}
      <rect x="4" y="8" width="2" height="28" fill="#c9a66b" />
    </svg>
  );
}
