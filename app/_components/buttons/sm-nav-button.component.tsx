import { LucideIcon, LucideProps } from "lucide-react";


interface SmNavButtonProps {
	icon: LucideIcon;
  	iconProps?: LucideProps;
	className?: string
	onClick?: () => void
}

export function SmNavButton({ 
	icon: Icon,
	iconProps,
	className,
	onClick
}: SmNavButtonProps) {
	return (
		
			<Icon {...iconProps} className={className} onClick={onClick} />
			
	);
}
