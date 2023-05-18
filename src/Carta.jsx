import { useState } from "react";
import erro from "./assets/icone_erro.png"
import quase from "./assets/icone_quase.png"
import certo from "./assets/icone_certo.png"
import seta1 from "./assets/seta_play.png"
import seta2 from "./assets/seta_virar.png"
import styled from "styled-components";

export default function Carta(props) {
    let [symbol, setSymbol] = useState(seta1);
    let [cardState, setCardState] = useState(1);
    let [answerState, setAnswerState] = useState(4);
    let estados_pergunta = [1,4];
    let estados_expandidos = [2,3];
    function EntreFases(result) {
        /* Transições */
        if (cardState == 1) {
            setCardState(2);
        } else if (cardState == 2) {
            setCardState(3);
        } else if (cardState == 3) {
            setCardState(4);
            if (result == -1) {
                setAnswerState(-1);
                setSymbol(erro);

                let concluidas = props.pontuação;
                props.setPontuação(concluidas+1);

                let emojis = [...props.emojis];
                emojis.push(erro);
                props.setEmojis(emojis);
                console.log(emojis)

            } else if (result == 0) {
                setAnswerState(0);
                setSymbol(quase);

                let concluidas = props.pontuação;
                props.setPontuação(concluidas+1);

                let emojis = [...props.emojis];
                emojis.push(quase);
                props.setEmojis(emojis);
                console.log(emojis)

            } else if (result == 1) {
                setAnswerState(1);
                setSymbol(certo);

                let concluidas = props.pontuação;
                props.setPontuação(concluidas+1);

                let emojis = [...props.emojis];
                emojis.push(certo);
                props.setEmojis(emojis);
                console.log(emojis)
            }
        }
    }
    return(
        <CartaIndiv cardState = {cardState} estados_expandidos = {estados_expandidos}>
            <Cover 
            answerState = {answerState}
            cardState = {cardState}
            estados_expandidos = {estados_expandidos}
            estados_pergunta = {estados_pergunta}> 
                <span> Pergunta {`${props.indice+1}`} </span>
                <img onClick={() => EntreFases()} src={symbol}/>
            </Cover>
            <Pergunta 
            
            cardState = {cardState}
            estados_expandidos = {estados_expandidos}>
                <span>{props.pergunta} </span>
                <div><img onClick={() => EntreFases()} src={seta2}/></div>
            </Pergunta>
            <Respostas 
            cardState = {cardState}
            estados_expandidos = {estados_expandidos}>
                <span> {props.resposta} </span>
                <Respostas_opçoes>
                    <Resposta_ruim onClick={() => EntreFases(-1)} > Não lembrei </Resposta_ruim>
                    <Resposta_media onClick={() => EntreFases(0)} > Quase não lembrei </Resposta_media>
                    <Resposta_boa onClick={() => EntreFases(1)} > Zap! </Resposta_boa>
                </Respostas_opçoes>
            </Respostas>
        </CartaIndiv>

    );
}
const CartaIndiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: ${props => props.estados_expandidos.includes(props.cardState)? "132px": "65px"};
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    padding: 12px;
`
const Cover = styled.div`
    display: ${props => props.estados_pergunta.includes(props.cardState) ? "flex": "none"};
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    text-decoration: ${props => props.cardState == 4 ? "line-through": "none"};
    color: ${props =>  {
    if(props.answerState == -1){
        return("red")
    } else if(props.answerState == 0){
        return("yellow")
    } else if(props.answerState == 1){
        return("green")
    }}};
`
const Pergunta = styled.div`
    display: ${props => props.cardState == 2 ? "flex": "none"};
    width: 100%;
    height: 100%;
    justify-content: space-between;;
    align-items: center;
    padding: 12px;
    div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
    }
`
const Respostas = styled.div`
    
    width: 100%;
    height: 100%;
    display: ${props => props.cardState == 3 ? "flex": "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 12px;
`
const Respostas_opçoes = styled.div`
    height: 87.5px;
    display: flex;
    gap: 10px;
    justify-content: space-evenly;
    align-items: center;
`
const Resposta_ruim = styled.button`
    width: 85px;
    height: 37.5px;

    background: #FF3030;
    border-radius: 5px;

    border: 1px solid rgba(0, 0, 0, 0);
`
const Resposta_media = styled.button`
    width: 85px;
    height: 37.5px;

    background: #FF922E;;
    border-radius: 5px;

    border: 1px solid rgba(0, 0, 0, 0);
`
const Resposta_boa = styled.button`
    width: 85px;
    height: 37.5px;

    background: #2FBE34;
    border-radius: 5px;

    border: 1px solid rgba(0, 0, 0, 0);
`