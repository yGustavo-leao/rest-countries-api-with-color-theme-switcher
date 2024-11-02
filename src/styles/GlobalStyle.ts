import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Nunito Sans", serif;
        font-optical-sizing: auto;
        font-style: normal;
        font-variation-settings:
            "wdth" 100,
            "YTLC" 500;
    }

    body {
        background-color: ${({theme}) => theme.colors.background};
    }

    button, select {
        cursor: pointer;
    }
`