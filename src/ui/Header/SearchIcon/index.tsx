import NextImage from "next/image";

export const SearchIcon = function() {
  return (
    <NextImage 
      src={"/images/search.svg"} 
      alt="Search" 
      width={17} 
      height={17}
      layout="fixed"
    />
  )
}