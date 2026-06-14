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
      {/* Stepped horizontal bars - refined proportions based on brand reference */}
      <rect x="6" y="26" width="28" height="6" fill="#1a1a1a" />
      <rect x="6" y="17" width="20" height="6" fill="#1a1a1a" />
      <rect x="6" y="8" width="12" height="6" fill="#1a1a1a" />
      
      {/* Ochre accent as subtle cut-edge detail */}
      <rect x="6" y="8" width="1.5" height="24" fill="#c9a66b" />
    </svg>
  );
}
