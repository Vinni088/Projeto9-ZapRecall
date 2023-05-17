import styled from "styled-components"

export default function Cartas(props) {
    return(
        <CardSpace login_var={props.login_var}>
            <Carta> teste </Carta>
        </CardSpace>
        
    );
}

const CardSpace = styled.div`
    width: 300px;
    height: 60px;
    display: ${props => props.login_var? "flex" :"none" };
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
`

const Carta = styled.div`
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
`