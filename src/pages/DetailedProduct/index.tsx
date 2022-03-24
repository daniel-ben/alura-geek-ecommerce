import { 
  StyledContainer,
  ProductImage, 
  ProductInfoContainer,
  ProductName,
  Price,
  Description,
} from './styles'
import { ProductsInCategory } from '@features/products'

export default function DetailedProduct() {
  return (
    <>
      <StyledContainer>
        <ProductImage />

        <ProductInfoContainer>
          <ProductName>Product XYZ</ProductName>
          <Price>R$ 60,00</Price>
          <Description>
            Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam
          </Description>
        </ProductInfoContainer>

      </StyledContainer>
      <ProductsInCategory category="Produtos similares" link='#' variant='small-list' />
    </>
  )
}