import styled from "styled-components";
import { theme } from '@ui/theme'

export const StyledContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;

  min-width: 130px;
  width: 48%;
  max-width: 176px;


  // maxWidth * 2 = 352
  // minWidth * 3 = 420
  // get rid of the blanck space as the screen goes bigger on mobile
  @media (min-width: 451px) {
    width: 30%;
  }
`

export const ProductImageContainer = styled.div`
  position: relative;
  height: 174px;
  width: 100%;
`

export const ProductName = styled.p`
${theme.fonts.xs};
font-weight: 500;
color: ${theme.colors.neutral[800]};
`

const ProductInfo = styled.p`
${theme.fonts.sm};
font-weight: 700;
`

export const Price = styled(ProductInfo)`
color: ${theme.colors.neutral[800]};
`

export const Link = styled(ProductInfo)`
color: ${theme.colors.primary[400]};
`