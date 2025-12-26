import { LucideIcon, LucideProps } from "lucide-react";

interface SmButtonProps {
  icon: LucideIcon;
  iconProps?: LucideProps;
  className?: string;
  onClick?: () => void;
  ariaLabel: string;
}

export function SmButton({
  icon: Icon,
  iconProps,
  className,
  onClick,
  ariaLabel,
}: SmButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={className}
    >
      <Icon {...iconProps} />
    </button>
  );
}
