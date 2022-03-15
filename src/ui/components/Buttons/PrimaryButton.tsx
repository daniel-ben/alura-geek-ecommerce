import styled from "styled-components";
import { theme } from "@ui/theme";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = styled(BaseButton)`
  background-color: ${theme.colors.primary[400]};
  width: fit-content;

  &:hover {
    background-color: ${theme.colors.primary[300]};
  }
`;

