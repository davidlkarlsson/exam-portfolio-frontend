import Image, { StaticImageData } from "next/image";

interface SmNavButtonProps {
	src: StaticImageData | string,
	alt: string,
	className?: string
	onClick?: () => void
	
}

export function SmNavButton({ src, alt, className, onClick}: SmNavButtonProps) {
	return (
		
			<Image src={src} alt={alt} className={className} onClick={onClick} />
			
	);
}
