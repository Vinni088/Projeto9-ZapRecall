
import styled from "styled-components"
import Emojis from "./emojis"


export default function Pontuação(props) {
    return(
        <Pontuação_Espaço data-test="footer" login_var={props.login_var}>
            <Pontuação_msgs data-test="finish-text" concluidas = {props.pontuação}>
                    <img src={props.final[1]}/>
                      {props.final[0]} <br/>
                      {props.final[2]} 
            </Pontuação_msgs>
            <div>{`${props.pontuação}`}/4 Concluídos</div>

            <Pontuação_emojis> 
                {props.emojis.map((adress, indice) => <Emojis key = {indice} endereço = {adress}/>)} 
            </Pontuação_emojis>
        </Pontuação_Espaço>
    );
    
}

const Pontuação_Espaço = styled.div`
    position: fixed;
    bottom: 0;
    left: 0%;
    width: 100%;
    min-height: 70px;
    background: #FFFFFF;
    display: ${props => props.login_var? "flex" :"none" };
    display: ${props => props.login_var? "flex" :"none" };
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #333333;
`
const Pontuação_emojis = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

const Pontuação_msgs = styled.div`
    height: 60px;
    width: 233px;
    display: ${props => props.concluidas == 4 ? "flex": "none"};
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
        position: absolute;
        top: -4px;
        left: 45px;
    }
`


