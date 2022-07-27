import styled from 'styled-components';
import narutoImg from '../../images/naruto.png'


function App() {
  return (
    <Content>
      <p>quote xpto - Speaker</p>
    <button>Quote No Jutsu</button>
    <NarutoImg src={narutoImg} alt='Naruto with a kunai'/>
    </Content>
  
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;

export default App
