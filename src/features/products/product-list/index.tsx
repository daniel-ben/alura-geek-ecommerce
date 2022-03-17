import { 
  StyledContainer, 
  StyledProductList, 
  StyledHeader, 
  StyledTitle 
} from './styles'
import { ExpandListLink } from './ExpandListLink'
import { Product } from "./Product"

export default function ProductList(props: {title: string, link: string}) {

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>{props.title}</StyledTitle>
        <ExpandListLink link={props.link}/>
      </StyledHeader>

      <StyledProductList>
        <Product link="#" img="/images/star-wars.png"/>
        <Product link="#" img="/images/star-wars.png"/>
        <Product link="#" img="/images/star-wars.png"/>
        <Product link="#" img="/images/star-wars.png"/>
        <Product link="#" img="/images/star-wars.png"/>
        <Product link="#" img="/images/star-wars.png"/>
      </StyledProductList>
    </StyledContainer>
  )
}