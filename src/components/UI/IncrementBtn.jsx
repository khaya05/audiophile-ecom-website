import styled from 'styled-components';

function IncrementBtn() {
  return (
    <Div className="btn-container">
      <button>-</button>
      <div>1</div>
      <button>+</button>
    </Div>
  );
}

const Div = styled.div`
  width: 120px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--light-gray);
  padding: 15px;

  button {
    background: none;
    border: none;
    color: black;
    opacity: 0.4;
    width: 1rem;
    height: 18px;
  }

  button:hover {
    color: var(--orange-main);
  }

  div,
  button {
    font-weight: 700;
    font-size: 13px;
  }

  div {
    text-align: center;
    color: black;
    opacity: 1;
  }
`;

export default IncrementBtn;
