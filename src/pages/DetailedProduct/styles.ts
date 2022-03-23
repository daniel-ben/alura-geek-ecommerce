import styled from 'styled-components';
import { theme } from '@ui/theme';

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.sm}) {
    flex-direction: row;
    align-items: center;

    padding: 32px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 64px 10%;
  }
`

// position must be relative for next image
export const ProductImage = styled.div`
  position: relative;
  width: 100%;
  height: 192px;

  background-image: url(/images/products-images/product-big.png);
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center;

  @media (min-width: ${theme.breakpoints.sm}) {
    width: 30%;
    min-width: 254px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    flex-grow: 1;
    width: 560px;
    height: 400px;
    background-size: auto 100%;
  }
`

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 16px;

  @media (min-width: ${theme.breakpoints.sm}) {
    flex-grow: 2;

    margin: 0;
    margin-left: 16px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    width: 50%;
  }
`

export const ProductName = styled.h1`
  ${theme.fonts.md}
  font-weight: 500;
`

export const Price = styled.p`
  ${theme.fonts.sm}
  font-weight: 700;
`
export const Description = styled.p`
  ${theme.fonts.xs}
`