import styled from "styled-components"
import logo from "./assets/logo.png"


export default function Welcome(props) {

    function login(){
        let current = props.login_var;
        props.setLogin_var(!current);
    }

    return(
        <WelcomeScreenContainer login_var={props.login_var} >
            <WelcomeImg   src={logo}/>
            <WelcomeText> ZapRecall </WelcomeText>
            <WelcomeButton onClick={() => login()}> Iniciar Recall! </WelcomeButton>
        </WelcomeScreenContainer>
    );
}

const WelcomeScreenContainer = styled.div`
    background: #FB6B6B;
    width: 100%;
    height: 100vmin;
    display: ${props => props.login_var ? "none": "flex"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const WelcomeImg = styled.img`
    width: 136px;
    height: 161px;
`
const WelcomeText = styled.div`
    width: 257px;
    height: 59px;
    margin-top: 15px;
    font-family: 'Righteous';
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
const WelcomeButton = styled.button`
    width: 246px;
    height: 54px;
    margin-top: 30px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    font-family: 'Recursive';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;

    text-align: center;

    color: #D70900;
`