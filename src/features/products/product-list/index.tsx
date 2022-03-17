import { 
  StyledContainer, 
  StyledProductList, 
  StyledHeader, 
  StyledTitle 
} from './styles'
import { ExpandListLink } from './ExpandListLink'
import { Product } from "./Product"
import { products } from './products.list'

export function ProductList(props: {title: string, link: string}) {

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>{props.title}</StyledTitle>
        <ExpandListLink link={props.link}/>
      </StyledHeader>

      <StyledProductList>
        {products.map(product => <Product key={product.id} product={product} />)}
        
      </StyledProductList>
    </StyledContainer>
  )
}