import styled from 'styled-components';
import YX1Earphones from './YX1Earphones/YX1Earphones';
import ZX7Speaker from './ZX7Speaker/ZX7Speaker';
import ZX9Speaker from './ZX9Speaker/ZX9Speaker';

function FeaturedProducts() {
  return (
    <Container>
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
    </Container>
  );
}

const Container = styled.div``;

export default FeaturedProducts;
