import styled from 'styled-components';

export const ImagesList = styled.ul`
  margin: ${p => p.theme.space[0]}px auto;
  padding: ${p => p.theme.space[0]}px;
  list-style: none;

  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${p => p.theme.space[4]}px;
`;
