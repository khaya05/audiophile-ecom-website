import React from 'react';
import styled from 'styled-components';
import ShopBtn from '../UI/ShopBtn';

function Category({ img, name }) {
  return (
    <Container>
      <img src={img} />
      <h3>{name}</h3>

      <div className="btn-container">
        <ShopBtn path={name} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--light-gray);
  position: relative;
  /* margin-block: 5rem; */
  height: 165px;
  width: 87.2%;
  margin-inline: auto;
  border-radius: 8px;
  text-align: center;
  padding-top:88px;

  img {
    position: absolute;
    left: calc(50% - 73.5px);
    width: 147px;
    top: -3rem;
  }

  h3 {

  }
`;

export default Category;
