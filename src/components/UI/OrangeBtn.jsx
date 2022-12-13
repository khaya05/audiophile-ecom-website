import styled from 'styled-components';

function OrangeBtn({ text, action }) {
  const handleClick = () => {
    if (action === 'add to cart') {
      console.log('added to cart');
    }
  };
  return (
    <Button onClick={handleClick} className="main-btn">
      {text}
    </Button>
  );
}

const Button = styled.button`
  background: var(--orange-main);
  border: none;
  color: white;
  height: 48px;
  width: 100%;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;

  :hover {
    background: var(--orange-main-hover);
  }
`;

export default OrangeBtn;
