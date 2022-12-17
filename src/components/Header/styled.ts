import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({theme}) => css`
  background-image: linear-gradient(45grad, ${theme.colorsOne.highBlue}, ${theme.colorsTwo.purple}, ${theme.colorsOne.highBlue});
  color: ${theme.colorsOne.secundary};
  font-size: ${theme.font.sizes.large};
  padding: ${theme.spacings.medium};
  text-align: center;
  `}

  a {
    padding: 1.7rem;
    font-weight: bold;
  }
`;