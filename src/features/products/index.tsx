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

  return (
    <StyledContainer>
      <StyledHeader variant={props.variant}>
        <StyledTitle>{props.category}</StyledTitle>
        {props.variant == 'complete-list' ? 
          <PrimaryButton>Adicionar Produto</PrimaryButton>
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