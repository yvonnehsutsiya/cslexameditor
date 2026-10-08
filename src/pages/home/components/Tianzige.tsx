type TianzigeProps = {
  char?: string;
  size?: number;
  className?: string;
  charClassName?: string;
  rounded?: boolean;
};

export default function Tianzige({
  char = "",
  size = 64,
  className = "",
  charClassName = "text-primary-700",
  rounded = true,
}: TianzigeProps) {
  return (
    <span
      className={`tzg ${rounded ? "rounded-md" : ""} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden={char ? undefined : true}
    >
      {char && (
        <span
          className={`relative z-10 font-heading font-bold leading-none ${charClassName}`}
          style={{ fontSize: Math.round(size * 0.58) }}
        >
          {char}
        </span>
      )}
    </span>
  );
}