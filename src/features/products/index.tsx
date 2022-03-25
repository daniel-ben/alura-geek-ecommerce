import { useRouter } from 'next/router';
import { 
  StyledContainer, 
  StyledProductList, 
  StyledHeader, 
  StyledTitle 
} from './styles'
import { ProductListProps } from './types'
import { ExpandListLink } from './ExpandListLink'
import { Product } from "./Product"
import { products } from './products.list'
import { PrimaryButton } from '@ui/components'

export function ProductsInCategory({category, link, variant}: ProductListProps) {
  const router = useRouter()

  const handleClick = () => router.push('/add-product')

  return (
    <StyledContainer>
      <StyledHeader variant={variant}>
        <StyledTitle>{category}</StyledTitle>
        {variant == 'complete-list' ? 
          <PrimaryButton onClick={handleClick}>Adicionar Produto</PrimaryButton>
          :
          <ExpandListLink link={'/all-products'}/>
        }

      </StyledHeader>

      <StyledProductList>
        {products.map(product => <Product key={product.id} product={product} />)}
      </StyledProductList>
    </StyledContainer>
  )
}