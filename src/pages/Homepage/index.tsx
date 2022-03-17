import { Banner } from '@features/banner'
import { ProductList } from '@features/products/product-list'
import { StyledBody } from './styles'

export function Homepage() {
  return (
    <>
      <Banner />
      <StyledBody>
        <ProductList title="Star Wars" link="#"/>
        <ProductList title="Consoles" link="#"/>
        <ProductList title="Diversos" link="#"/>
      </StyledBody>
    </>
  )
}