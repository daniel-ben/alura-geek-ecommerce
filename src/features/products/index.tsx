import { useRouter } from 'next/router';
import { 
  StyledContainer, 
  StyledProductList, 
  StyledHeader, 
  StyledTitle 
} from './styles'
import { ExpandListLink } from './ExpandListLink'
import { Product } from "./Product"
import { products } from './products.list'
import { PrimaryButton } from '@ui/components'

export function ProductsInCategory(props: {category: string, link: string, variant: string}) {

  const router = useRouter()
  const handleClick = () => router.push('/add-product')

  return (
    <StyledContainer>
      <StyledHeader variant={props.variant}>
        <StyledTitle>{props.category}</StyledTitle>
        {props.variant == 'complete-list' ? 
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