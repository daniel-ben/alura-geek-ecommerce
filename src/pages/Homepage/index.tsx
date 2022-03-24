import { Banner } from '@features/banner'
import { ProductsInCategory } from '@features/products'

export default function Homepage() {
  return (
    <>
      <Banner />
      <ProductsInCategory category="Star Wars" link="#" variant='small-list'/>
      <ProductsInCategory category="Consoles" link="#" variant='small-list'/>
      <ProductsInCategory category="Diversos" link="#" variant='small-list'/>
    </>
  )
}