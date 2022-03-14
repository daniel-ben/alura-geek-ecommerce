import styled from "styled-components";
import { theme } from "@ui/theme";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = styled(BaseButton)`
  background-color: ${theme.colors.primary[300]};

  &:hover {
    background-color: ${theme.colors.primary[100]};
  }
`;

