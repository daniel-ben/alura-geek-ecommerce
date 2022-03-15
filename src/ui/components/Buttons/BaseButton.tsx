import styled from 'styled-components';
import { theme } from '@ui/theme';

export const BaseButton = styled.button`
  border: 1px solid #2A7AE4;
  padding: 12px 16px;
  height: 40px;

  display: flex;
  justify-content: center;
  
  ${theme.fonts.xs};
  font-weight: 600;
  color: white;

  @media (min-width: 768px) {
    padding: 16px;
    ${theme.fonts.sm};
    font-weight: 400;
    height: 51px;
  }
`;