import styled from "styled-components"
import { theme } from "@ui/theme"
import { ProductListHead } from "./ProductListHead"
import { Product } from "./Product"

const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ProductListBody = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: no-wrap;
  gap: 8px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.neutral[100]};
    border-radius: 20px;
  }


  @media (max-width: ${theme.breakpoints.sm}) {
    flex-wrap: wrap;
  }
`

export default function ProductList(props: {title: string, link: string}) {



  return (
    <ProductListContainer>
      <ProductListHead title={props.title} link={props.link}/>
      <ProductListBody>
        <Product link="#" img="/star-wars.png"/>
        <Product link="#" img="/star-wars.png"/>
        <Product link="#" img="/star-wars.png"/>
        <Product link="#" img="/star-wars.png"/>
        <Product link="#" img="/star-wars.png"/>
        <Product link="#" img="/star-wars.png"/>
      </ProductListBody>
    </ProductListContainer>
  )
}