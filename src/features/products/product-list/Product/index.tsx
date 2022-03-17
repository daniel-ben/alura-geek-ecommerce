import NextImage from "next/image";
import { 
  StyledContainer, 
  ProductName, 
  Price, 
  Link 
} from "./styles";


export function Product(props: {link: string, img: string}) {

  return (
    <StyledContainer>
      <NextImage 
        src={props.img}
        alt="Product Image"
        height={174}
        width={174}
      />
      <ProductName>Product XYZ</ProductName>
      <Price>R$ 60,00</Price>
      <Link as="a" href={props.link}>Ver produto</Link>
    </StyledContainer>
  )
}