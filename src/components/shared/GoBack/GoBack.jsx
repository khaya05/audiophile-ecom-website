import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function GoBack() {
  const navigate = useNavigate();
  return <Button onClick={() => navigate(-1)}>Go Back</Button>;
}

const Button = styled.button`
  background: none;
  border: none;
  color: hsla(0, 0%, 0%, 0.7);
  margin: 1rem 0 24px;

  :hover {
    cursor: pointer;
    color: var(--orange-main);
    text-decoration: underline;
  }

  @media (min-width: 48em) {
    margin: 2rem 0 24px;
  }

  @media (min-width: 90em) {
    margin: 79px 0 56px;
  }
`;

export default GoBack;
