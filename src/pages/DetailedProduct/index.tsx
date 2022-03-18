import NextImage from 'next/image';
import { 
  StyledContainer,
  ProductImage, 
  StyledInfoContainer,
  ProductName,
  Price,
  Description,
} from './styles'
import { ProductList } from '@features/products'

export function DetailedProduct() {
  return (
    <>
      <StyledContainer>
        <ProductImage />

        <StyledInfoContainer>
          <ProductName>Product XYZ</ProductName>
          <Price>R$ 60,00</Price>
          <Description>
            Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam
          </Description>
        </StyledInfoContainer>

      </StyledContainer>
      <ProductList title="Produtos similares" link='#' variant='small-list' />
    </>
  )
}