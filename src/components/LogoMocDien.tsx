import { MocDienMark } from "./MocDienMark";

interface LogoMocDienProps {
  showTagline?: boolean;
  tagline?: "strategic" | "functional" | "english";
  className?: string;
}

export function LogoMocDien({ showTagline = false, tagline = "strategic", className = "" }: LogoMocDienProps) {
  const taglines = {
    strategic: "Đúng vật liệu. Đúng quy trình. Đúng thẩm mỹ.",
    functional: "Sơn giả gỗ chuyên sâu",
    english: "Surface Finishing Studio",
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center gap-3">
        <MocDienMark className="h-8 w-8" />
        <span className="font-display text-xl tracking-tight text-ink" style={{ letterSpacing: "-0.02em" }}>
          Mộc Diện
        </span>
      </div>
      {showTagline && (
        <p className="mt-2 text-[11px] font-medium tracking-wide text-ink-soft">
          {taglines[tagline]}
        </p>
      )}
    </div>
  );
}
