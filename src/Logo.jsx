import styled from "styled-components"
import logo from "./assets/logo.png"

export default function Logo() {
    return(
        <CntLogo>
            <ImgLogo src={logo}/>
            <TextoLogo>ZapRecall</TextoLogo>
        </CntLogo>
    );
}
const CntLogo = styled.div`
    width: 300px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
`;

const TextoLogo = styled.h1`
    width: 204px;
    height: 44px;
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.012em;

    color: #FFFFFF;
`
const ImgLogo = styled.img`
    width: 52px;
    height: 60px;
`
