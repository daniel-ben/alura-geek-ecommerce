import styled from 'styled-components';
import { theme } from '@ui/theme';

const BaseButtonStyle = styled.button`
  border: 1px solid #2A7AE4;
  padding: 12px 16px;
  height: 40px;

  display: flex;
  justify-content: center;
  
  ${theme.fonts.xs};
  font-weight: 600;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 16px;
    ${theme.fonts.sm};
    font-weight: 400;
    height: 51px;
  }
`;

export const PrimaryButton = styled(BaseButtonStyle)`
  background-color: ${theme.colors.primary[400]};
  color: white;
  min-width: fit-content;
  width: 133px;

  &:hover {
    background-color: ${theme.colors.primary[300]};
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    width: 166px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    width: 182px;
  }
`;

export const SecondaryButton = styled(BaseButtonStyle)`
  background-color: transparent;
  color: ${theme.colors.primary[400]};


  &:hover {
    background-color: ${theme.colors.primary[100]};
  }
`;

