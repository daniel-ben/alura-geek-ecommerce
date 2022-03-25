import styled from 'styled-components';
import { theme } from '@ui/theme';
import { SecondaryButton } from '@common/components';
import { LoginButtonProps } from './types';

export const StyledButton = styled(SecondaryButton)<LoginButtonProps>`
  width: 133px;
  display: ${props => props.searchBarDisplay ? "none" : "flex"};
  
  @media (min-width: ${theme.breakpoints.sm}) {
    display: flex;
    width: 166px;
    margin: 0 0 0 auto;
    order: 3;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    width: 182px;
  }
`
