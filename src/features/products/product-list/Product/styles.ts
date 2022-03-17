import styled from "styled-components";
import { theme } from '@ui/theme'

export const StyledContainer = styled.li`
display: flex;
flex-direction: column;
gap: 8px;

min-width: 150px;
max-width: 176px;
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