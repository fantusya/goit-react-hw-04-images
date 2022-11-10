import errorImg from 'images/error.jpg';

import { ErrorImage } from './ErrorMessage.styled';

const errorMessage = () => {
  return (
    <div>
      <ErrorImage src={errorImg} alt="we didn't find any images" />
    </div>
  );
};

export default errorMessage;
