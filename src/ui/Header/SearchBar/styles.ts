import styled from "styled-components";
import { theme } from "@ui/theme";

type Props = {
  searchBarDisplay: boolean
}

export const StyledContainer = styled.div<Props>`
  border-radius: 20px;
  padding: 12px;
  padding-left: 16px;

  order: 3;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${props => props.searchBarDisplay ? 
    `
      background-color: ${theme.colors.neutral[100]};
      width: 100%;

      img {
        opacity: 0.5;
      }
    `
  :
    `
      background-color: transparent;

      img {
        opacity: 1;
      }
    `};

  @media (min-width: ${theme.breakpoints.sm}) {
    order: 2;
    // half of the width of the header - logo margin - logo size
    width: calc(50% - 32px - 100px);
    background-color: ${theme.colors.neutral[100]};

    img {
      opacity: 0.5;
    }
  }
`;

export const StyledInput = styled.input<Props>`
  background-color: transparent;

  ::placeholder {
    opacity: 0.5;
  }

  ${props => props.searchBarDisplay ? 'display: block;' : 'display: none;' };

  @media (min-width: ${theme.breakpoints.sm}) {
    display: block;
    width: 100%;
  }
`
