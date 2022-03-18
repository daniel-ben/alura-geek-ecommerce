import { Banner } from '@features/banner'
import { ProductList } from '@features/products/product-list'

export function Homepage() {
  return (
    <>
      <Banner />
      <ProductList title="Star Wars" link="#"/>
      <ProductList title="Consoles" link="#"/>
      <ProductList title="Diversos" link="#"/>
    </>
  )
}