import styled from 'styled-components'
import Logo from './Logo.jsx'
import './assets/Reset.css'

export default function App() {

  return (
    <CntApp>
      <Logo/>
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
