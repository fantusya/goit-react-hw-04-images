import styled, { keyframes } from 'styled-components';

const wobbleBottom = keyframes`
  0%,
    100% {
      transform: translateX(0%);
      transform-origin: 50% 50%;
    }
    15% {
      transform: translateX(-8px) rotate(-3deg);
    }
    30% {
      transform: translateX(4px) rotate(3deg);
    }
    45% {
      transform: translateX(-4px) rotate(-1.8deg);
    }
    60% {
      transform: translateX(2px) rotate(1.2deg);
    }
    75% {
      transform: translateX(-2px) rotate(-0.6deg);
    }
`;

export const ImageItem = styled.li`
  /* box-shadow: 1px 4px 8px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 4px 8px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 4px 8px 0px rgba(0, 0, 0, 0.75); */
  box-shadow: 0px 3px 10px 0px rgba(255, 255, 224, 0.5);
  border: 1px solid rgba(255, 255, 224, 0.5);
  border-radius: 20px;
  &:hover {
    animation: ${wobbleBottom} 0.8s both;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 20px;
`;

export const ModalImage = styled.img`
  background-color: ${p => p.theme.colors.white};
`;
