import { LucideIcon, LucideProps } from "lucide-react";


interface NavButtonProps {
  text?: string;
  href: string;
  icon: LucideIcon;
  iconProps?: LucideProps; 
}

export function NavButton({ 
  text, 
  href, 
  icon: Icon, 
  iconProps
}: NavButtonProps) {
  return (
    <a 
      href={href} 
      className="font-['Gowun_Dodum'] hidden md:inline-flex items-center gap-3 px-5 py-2.5 border border-gray-500 rounded-full ml-4"
    >
      {text}
      <Icon {...iconProps} /> 
    </a>
  );
}