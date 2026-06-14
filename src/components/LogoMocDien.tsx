import { MocDienMark } from "./MocDienMark";

interface LogoMocDienProps {
  showTagline?: boolean;
  tagline?: "strategic" | "functional" | "english";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function LogoMocDien({ showTagline = false, tagline = "strategic", className = "", size = "md" }: LogoMocDienProps) {
  const taglines = {
    strategic: "Đúng vật liệu. Đúng quy trình. Đúng thẩm mỹ.",
    functional: "Sơn giả gỗ chuyên sâu",
    english: "Surface Finishing Studio",
  };

  const sizes = {
    sm: { mark: "h-6 w-6", text: "text-lg" },
    md: { mark: "h-8 w-8", text: "text-xl" },
    lg: { mark: "h-10 w-10", text: "text-2xl" },
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center gap-3">
        <MocDienMark className={sizes[size].mark} />
        <span 
          className={`font-display ${sizes[size].text} text-ink font-medium`}
          style={{ letterSpacing: "-0.03em" }}
        >
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
