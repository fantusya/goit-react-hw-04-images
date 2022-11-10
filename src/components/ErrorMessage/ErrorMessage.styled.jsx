import styled from 'styled-components';

export const ErrorImage = styled.img`
  width: 700px;
  margin-left: auto;
  margin-right: auto;

  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.doubled} ${p => p.theme.colors.secondary};
`;
