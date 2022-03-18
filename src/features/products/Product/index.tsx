import NextImage from "next/image";
import { useRouter } from "next/router";
import { 
  StyledContainer, 
  ProductImageContainer,
  ProductName, 
  Price, 
  Link 
} from "./styles";
import { ProductType } from "./product.type"

export function Product(props: {product: ProductType}) {
  const router = useRouter();

  return (
    <StyledContainer>
      <ProductImageContainer>
        <NextImage 
          src={props.product.image}
          alt={props.product.alt}
          layout="fill"
        />
      </ProductImageContainer>
      <ProductName>{props.product.name}</ProductName>
      <Price>R$ {props.product.price}</Price>
      <Link 
        as="a" 
        onClick={() => router.push('/detailed-product')}
      >Ver produto</Link>
    </StyledContainer>
  )
}