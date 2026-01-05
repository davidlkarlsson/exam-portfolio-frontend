import { LucideIcon, LucideProps } from "lucide-react";
import Link from "next/link";

interface AuthNavButtonProps {
  text?: string;
  href: string;
  icon: LucideIcon;
  iconProps?: LucideProps;
}

export function AuthNavButton({
  text,
  href,
  icon: Icon,
  iconProps,
}: AuthNavButtonProps) {
  return (
    <Link
      href={href}
      className="font-['Gowun_Dodum'] hidden lg:inline-flex items-center gap-3 px-5 py-2.5 
      border border-gray-500 rounded-full ml-4 hover:scale-[1.02] transition-transform"
    >
      {text}
      <Icon {...iconProps} />
    </Link>
  );
}
