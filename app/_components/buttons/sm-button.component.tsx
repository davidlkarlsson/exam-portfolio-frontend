import { LucideIcon, LucideProps } from "lucide-react";

interface SmButtonProps {
  icon: LucideIcon;
  iconProps?: LucideProps;
  className?: string;
  onClick?: () => void;
  ariaLabel: string;
  title: string;
}

export function SmButton({
  icon: Icon,
  iconProps,
  className,
  onClick,
  ariaLabel,
  title
}: SmButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={className}
      title={title}
    >
      <Icon {...iconProps} />
    </button>
  );
}
