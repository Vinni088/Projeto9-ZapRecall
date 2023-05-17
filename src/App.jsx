import styled from 'styled-components'
import Welcome from './welcome.jsx'
import Cartas from './Cartas.jsx'
import { useState } from 'react'
import Logo from './Logo.jsx'
import './assets/Reset.css'



export default function App() {
  /* States */
  let [login_var, setLogin_var] = useState(false);

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
      />
    </CntApp>
  )
}

const CntApp = styled.div`
  background: #FB6B6B;
  width: 100%;
  height: 100vmin;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
