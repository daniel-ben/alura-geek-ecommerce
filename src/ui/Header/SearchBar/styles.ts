import styled from "styled-components";
import { theme } from "@ui/theme";

export const StyledContainer = styled.div`
border-radius: 20px;
padding: 12px;
padding-left: 16px;
max-width: 400px;

order: 3;

align-items: center;
justify-content: space-between;

@media (min-width: ${theme.breakpoints.sm}) {
  display: flex;
  order: 2;
  // half of the width of the header - logo margin - logo size
  width: calc(50% - 32px - 100px);
  background-color: ${theme.colors.neutral[100]};

  img {
    opacity: 0.5;
  }
}
`;

export const StyledInput = styled.input`
display: none;
background-color: transparent;


@media (min-width: ${theme.breakpoints.sm}) {
  display: block;
  width: 100%;
    
  ::placeholder {
    opacity: 0.5;
  }
}
`
