import { LucideIcon, LucideProps } from "lucide-react";

interface IconTextButtonProps {
  icon: LucideIcon;
  text: string;
  iconProps?: LucideProps;
  className?: string;
  onClick: () => void;
}

export function IconTextButton({
  icon: Icon,
  text,
  iconProps,
  className,
  onClick
}: IconTextButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      <Icon {...iconProps} />
      <span>{text}</span>
    </button>
  );
}
