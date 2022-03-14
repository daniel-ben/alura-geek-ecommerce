import styled from 'styled-components';
import { theme } from '@ui/theme';

export const BaseButton = styled.button`
  padding: 12px 16px;
  ${theme.fonts.xs};
  font-weight: 600;
  color: white;

  &:hover {
    border: 1px solid #2A7AE4;
    color: ${theme.colors.primary[400]};
  }

  @media (min-width: 768px) {
    padding: 16px;
    ${theme.fonts.sm};
    font-weight: 400;
  }
`;