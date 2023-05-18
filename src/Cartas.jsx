import styled from "styled-components"
import Carta from "./Carta";
import cards from "./deck1"

export default function Cartas(props) {
    let baralho = [...cards];
    function comparador() {
        let meio = 0.5;
        return Math.random() - meio;
    }
    baralho.sort(comparador);
    baralho = baralho.slice(0, 4);
    return(
        <CardSpace login_var={props.login_var}>
            {baralho.map((adress, indice) => 
            <Carta
            key = {indice}
            indice = {indice}
            pontuação = {props.pontuação}
            setPontuação = {props.setPontuação}
            emojis = {props.emojis}
            setEmojis = {props.setEmojis}
            pergunta = {adress.question}
            resposta = {adress.answer}
            final = {props.final}
            setFinal = {props.setFinal}
            />)}
        </CardSpace>
        
    );
}

const CardSpace = styled.div`
    width: 300px;
    display: ${props => props.login_var? "flex" :"none" };
    flex-direction: column;
    border-radius: 5px;
    gap: 25px;
    margin-bottom: 100px;
`
