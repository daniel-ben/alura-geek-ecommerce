import styled from "styled-components";
import NextImage from "next/image";
import { ProductName, Price, Link } from "./Typography";

const ProductContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;

  min-width: 150px;
  max-width: 176px;
`

// position must be relative for next image
const ProductImgContainer = styled.div`
  position: relative;
  width: auto;
  height: 174px;
`

const ProductImage = function(props: {img: string}) {
  return (
    <ProductImgContainer>
      <NextImage 
        src={props.img}
        alt="Product Image"
        layout="fill"
      />
    </ProductImgContainer>
  )
}


export function Product(props: {link: string, img: string}) {
  

  return (
    <ProductContainer>
      <ProductImage img={props.img} />
      <ProductName>Product XYZ</ProductName>
      <Price>R$ 60,00</Price>
      <Link as="a" href={props.link}>Ver produto</Link>
    </ProductContainer>
  )
}