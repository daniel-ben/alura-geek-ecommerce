import NextImage from "next/image";

export function Logo() {
  return (
    <NextImage 
      src={"/images/Logo.svg"} 
      alt="logo" 
      layout='fill'
    />
  )
}