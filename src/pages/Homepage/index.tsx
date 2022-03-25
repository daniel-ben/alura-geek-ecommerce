import Banner from '@modules/banner'
import { ProductsInCategory } from 'src/modules/products'

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