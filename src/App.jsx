import Pontuação from './Pontuação.jsx'
import styled from 'styled-components'
import Welcome from './welcome.jsx'
import Cartas from './Cartas.jsx'
import { useState } from 'react'
import Logo from './Logo.jsx'


export default function App() {
  /* States */
  let [login_var, setLogin_var] = useState(false);
  let [pontuação, setPontuação] = useState(0);
  let [emojis, setEmojis] = useState([]);


  return (
    <CntApp>
      <Welcome 
      login_var = {login_var}
      setLogin_var = {setLogin_var}
      />
      <Logo
      login_var = {login_var}
      setLogin_var = {setLogin_var}
      />
      <Cartas
      login_var = {login_var}
      setLogin_var = {setLogin_var}
      pontuação = {pontuação}
      setPontuação = {setPontuação}
      emojis = {emojis}
      setEmojis = {setEmojis}
      />
      <Pontuação
      login_var = {login_var}
      setLogin_var = {setLogin_var}
      pontuação = {pontuação}
      emojis = {emojis}
      />
    </CntApp>
  )
}

const CntApp = styled.div`
  background: #FB6B6B;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
