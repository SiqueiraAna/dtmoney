import styled from "styled-components";
import { darken, transparentize } from 'polished';

export const Container = styled.form`
    h2 {
        color:  var(--text-title); 
        font-size: 1.5rem; 
        margin-bottom: 2rem; 
    }

    input {
        width: 100%; // largura 
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;
    }

    &::placeholder {
        color: var(--text-body);
    }

    & + input {
        margin-top: 1rem;
    }

    button[type="submit"] {
        width: 100%; 
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--blue);
        color: #fff;
        border-radius: 025rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;  //transição quando passar o mouse encima do botão. 

        &:hover {
            filter: brightness(0.9);  
        }
    }
`;

    export const TransactionTypeContainer =styled.div`
        margin: 1rem 0; // Distanciar em cima e embaiaxo 
        display: grid;
        grid-template-columns: 1fr 1fr; // Duas colunas
        gap: 0.5rem; // Espaçamento entre cada um dos botões. 
    `;

    interface RadioBoxProps {  //propriedade
        isActive: boolean;
        activecolor: 'green' | 'red';
    }

    const colors = {
        green: '#33CC95',
        red: '#E52540'
    };

    export const RadioBox = styled.button<RadioBoxProps>`
        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;

        background: ${(props) => props.isActive 
            ? transparentize(0.9, colors[props.activecolor])
            : 'transparent'
        };

        display: flex;
        align-items: center;
        justify-content: center;

        transition: border-color 0.2s; // 

        &:hover { // escurecer a borda do botão, quando passar o mouse por cima. 
            border-color: ${darken(0.1, '#d7d7d7')};
        }

        img {
            width: 20px; // Largura da imagem
            height: 20px; // Altura da imagem 
        }

        span{
            display: inline-block;
            margin-top: 1rem;
            font-size: 1rem;
            color: var(--text-title);
        }
    `;