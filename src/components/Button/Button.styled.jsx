import styled from 'styled-components';

export const LoadMoreButton = styled.button`
  margin: ${p => p.theme.space[5]}px auto ${p => p.theme.space[5]}px auto;
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
  display: block;

  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  text-align: center;
  text-transform: uppercase;

  box-shadow: 0 0 20px ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  outline: none;

  background-size: 200% auto;
  color: ${p => p.theme.colors.white};
  background-image: linear-gradient(
    to right,
    #000428 0%,
    #004e92 51%,
    #000428 100%
  );

  cursor: pointer;

  transition: ${p => p.theme.transition.main};

  &:hover {
    background-position: right center;
    color: ${p => p.theme.colors.white};
  }
`;
