import NextImage from "next/image";
import { useRouter } from "next/router";
import { 
  StyledContainer, 
  ProductImageContainer,
  ProductName, 
  Price, 
  Link 
} from "./styles";
import { ProductProps } from "./types"

export function Product({product}: ProductProps) {
  const router = useRouter();

  const handleClick = () => router.push('/detailed-product')

  return (
    <StyledContainer>
      <ProductImageContainer>
        <NextImage 
          src={product.image}
          alt={product.alt}
          layout="fill"
        />
      </ProductImageContainer>

      <ProductName>{product.name}</ProductName>
      <Price>R$ {product.price}</Price>
      <Link 
        as="a" 
        onClick={handleClick}
      >Ver produto</Link>
    </StyledContainer>
  )
}