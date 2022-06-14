import React from 'react';
import styled from 'styled-components'
import Postar from './components/postar/postar';



const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Postar/>
      </MainContainer>
    );
  }
}

export default App;
