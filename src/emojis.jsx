import styled from "styled-components";
import erro from "./assets/icone_erro.png"
import quase from "./assets/icone_quase.png"
import certo from "./assets/icone_certo.png"

export default function Emojis(props) {
    let data_test = "";
    if(props.endereço === erro){
        data_test= "no-btn";
    } else if (props.endereço === quase){
        data_test = "partial-btn";
    } else if (props.endereço === certo){
        data_test = "zap-btn";
    }
    return(
        <Emoji data-test={data_test} src={props.endereço}/>
    );
}

const Emoji = styled.img`
    width: 23px;
    height: 23px;
`