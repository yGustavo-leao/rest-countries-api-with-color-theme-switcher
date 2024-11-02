import styled from "styled-components";

export const Container = styled.header`
    padding: 2rem 0;
    background-color: ${({ theme }) => theme.colors.element};
    color: ${({ theme }) => theme.colors.text};
`

export const Wrapper = styled.div`
    max-width: 1600px;
    margin: auto;
    display: flex;
    justify-content: space-between;

    padding: 0 1rem;

    @media (min-width: 600px) {
        padding: 0 2rem;
    }
`

export const Title = styled.h1`
    font-size: 1.2rem;
    font-weight: 900;
`

export const DarkLightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;

    cursor: pointer;
`

export const DarkLightIcon = styled.div`

`

export const DarkLightText = styled.span`
    font-weight: bold;
`