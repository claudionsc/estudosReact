import styled from "styled-components";
import { string, func } from 'prop-types'; //o tipo string foi importada pra poder tipar as propriedades 
// da função (quotes), ou seja, espera-se sempre texto como propriedades, dando erro caso tenha outro tipo
// sendo interessante para identificar melhor erros de nas propriedades
import { Button } from "../../components";

export const Quotes = ({ quote, speaker, onUpdate }) => {
    return (
    <Wrapper>        
        <Quote>{quote}</Quote>
        <Speaker> - {speaker}</Speaker>
        <Button onClick={onUpdate}>Quote No Jutsu</Button>
    </Wrapper>
    );
}

Quotes.propTypes = {
    quote: string,
    speaker: string,
    onUpdate: func,
};


const Wrapper = styled.div`

    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center
`


const Quote = styled.p`
    font-size: 2em;    
    margin: 0;
`;

const Speaker = styled(Quote)`
    text-align: right;
    margin-bottom: 50px;
`;