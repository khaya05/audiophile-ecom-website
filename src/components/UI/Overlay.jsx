import styled from 'styled-components';

function Overlay() {
  return <Div></Div>;
}

const Div = styled.div`
  position: fixed;
  insert: 0;
  width: 100%;
  height: 100vh;
  background: hsla(0, 0%, 0%, 0.5);
  z-index: 2;
`;

// const ModalOverlay = () => {
//   return (
//     <Fragment>
//       {ReactDom.createPortal(<Overlay />, document.querySelector('#overlay'))}
//     </Fragment>
//   );
// };

export default Overlay;
