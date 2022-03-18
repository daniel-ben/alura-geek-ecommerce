import { Banner } from '@features/banner'
import { ProductList } from '@features/products'

export function Homepage() {
  return (
    <>
      <Banner />
      <ProductList title="Star Wars" link="#" variant='small-list'/>
      <ProductList title="Consoles" link="#" variant='small-list'/>
      <ProductList title="Diversos" link="#" variant='small-list'/>
    </>
  )
}