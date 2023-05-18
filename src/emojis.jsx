import styled from "styled-components";

export default function Emojis(props) {
    return(
        <Emoji src={props.endereço}/>
    );
}

const Emoji = styled.img`
    width: 23px;
    height: 23px;
`