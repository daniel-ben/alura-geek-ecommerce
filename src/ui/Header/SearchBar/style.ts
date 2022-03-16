import styled from "styled-components";
import { theme } from "@ui/theme";

export const StyledContainer = styled.div`
background-color: ${theme.colors.neutral[100]};
border-radius: 20px;
padding: 12px;
padding-left: 16px;
width: 100%;
max-width: 400px;

display: none;
align-items: center;
justify-content: space-between;

input {
  width: 100%;
  
  ::placeholder {
    opacity: 0.5;
  }
}

img {
  opacity: 0.5;
}

@media (min-width: ${theme.breakpoints.sm}) {
  display: flex;
}
`;

export const StyledInput = styled.input`
background-color: transparent;
`
