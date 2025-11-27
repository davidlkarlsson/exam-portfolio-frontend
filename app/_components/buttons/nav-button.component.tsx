import Image, { StaticImageData } from "next/image";

interface NavButtonProps {
  text?: string,
  href: string,
  src: StaticImageData | string,
  alt: string, 
}

export function NavButton({ text, href, src, alt }: NavButtonProps) {
  return (
    <a 
      href={href} 
      className="font-['Gowun_Dodum'] hidden lg:inline-flex items-center gap-3 px-5 py-2.5 border border-gray-500 rounded-full ml-4"
    >
      {text}
      <Image src={src} alt={alt} className='w-3'/>
    </a>
  );
}