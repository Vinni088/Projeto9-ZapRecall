import styled from "styled-components"

export default function FinalText(props) {
    if(props.concluidas == 4) {
        return(
        <Pontuação_msgs data-test="finish-text" concluidas = {props.pontuação}>
                    <img src={props.final[1]}/>
                      {props.final[0]} <br/>
                      {props.final[2]} 
        </Pontuação_msgs>);
    }
}

const Pontuação_msgs = styled.div`
    height: 60px;
    width: 233px;
    display: flex;
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