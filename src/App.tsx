import styled from 'styled-components';
import NavBar from './components/NavBar';
import Content from './components/Content';

const AppDiv = styled.div`
  /* this divs wraps the main components */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export default function App(){
  return(
    <AppDiv>
      <NavBar />
      <Content />
    </AppDiv>
  )
}



