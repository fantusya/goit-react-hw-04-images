import styled from 'styled-components';
import { MdImageSearch as Icon } from 'react-icons/md';

export const Header = styled.header`
  text-align: center;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;

  background: #0f0c29;
  background: linear-gradient(to left, #24243e, #302b63, #0f0c29);
  box-shadow: 0px 5px 8px 0px rgba(255, 255, 224, 0.5);
  border-bottom: 1px dotted rgba(255, 255, 224, 0.5);
  /* -webkit-box-shadow: 0px 4px 5px 0px rgba(255, 255, 224, 0.5);
  -moz-box-shadow: 0px 4px 5px 0px rgba(255, 255, 224, 0.5); */
`;

export const Form = styled.form`
  display: inline-block;
  position: relative;
`;

export const Input = styled.input`
  padding: ${p => p.theme.space[4]}px;
  min-width: 500px;

  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};

  border: ${p => p.theme.borders.doubled} ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.normal};
  outline: none;

  background-color: ${p => p.theme.colors.bgInput};
  color: ${p => p.theme.colors.border};
`;

export const ButtonSearch = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-30%, -50%);

  padding: ${p => p.theme.space[2]}px;

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  border-radius: ${p => p.theme.radii.normal};
  outline: none;

  background-color: ${p => p.theme.colors.bgIcon};
  color: ${p => p.theme.colors.border};

  cursor: pointer;

  transition: color ${p => p.theme.transition.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;

export const MdImageSearch = styled(Icon)`
  fill: currentColor;
`;
