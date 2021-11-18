import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --green: #33cc95;
        --blue: #5429CC;
;

        --blue-light: #6933FF; // cor do botão Nova transação

        --text-title: #363F5F;
        --text-body: #969CB3;

        --background: #f0f2f5;
        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0; 
        box-sizing: border-box;
    }

    // font-size: 16px; (Desktop)
    html{
        @media (max-width: 1080px) { // largura maxima
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    //REM -  medida no css para configurar o layout  - Ele retorna 1rem = ao tamanho do font-size da página

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif; //font do body, input, textarea e button
        font-weight: 400; //
    }

    h1, h2, h3, h4, h5, h6, strong {
        //fontes de negrito
        font-weight: 600;
    }

    button {
        cursor: pointer; //cursor especifica o cursor do mouse mostrado quando o ponteiro do mouse está sobre um elemento.
    }

    [disabled] {
        opacity: 0.6; //opacidade
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5); 

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%; //largura
        max-width: 576px; // largura maxima
        background: var(--background); 
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }
    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`