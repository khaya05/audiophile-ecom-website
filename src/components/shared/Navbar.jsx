import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function Navbar() {
  return (
    <Nav>
      <div className="container">
        {/* mobile menu btn */}
        <FaBars />
        <p>audiophile</p>
        <AiOutlineShoppingCart />
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  color: white;
  border: 1px solid white;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 24px; */
  }

  p {
    color: white;
    opacity: 1;
    font-size: 25px;
    font-weight: 700;
  }
`;
export default Navbar;
