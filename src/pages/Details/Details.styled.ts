import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;

    @media (min-width: 1200px) {
        max-width: 1200px;
        margin: auto;
        margin-top: 2rem;
    }
`

export const ReturnButton = styled.button`
    max-width: max-content;
    padding: .5rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: .5rem;
    border: none;
    background-color: ${({theme}) => theme.colors.element};
    color: ${({theme}) => theme.colors.text};
    box-shadow: 0px 0px 10px #00000055;
`

export const DetailsContainer = styled.div`
    max-width: 340px;
    margin: auto;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    color: ${({theme}) => theme.colors.text};

    @media (min-width: 1200px) {
        max-width: none;
        flex-direction: row;
        justify-content: start;
        align-items: start;
        margin-top: 4rem;
        column-gap: 4rem;
    }
`

export const CountryImg = styled.img`
    max-width: 340px;

    grid-area: img;

    @media (min-width: 1200px) {
        max-width: 500px;
    }
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    @media (min-width: 1200px) {
        display: grid;
        grid-template-areas:
        "title title"
        "mainInfo subInfo"
        "borderCountries borderCountries";
        width: 100%;
        align-self: center;
        justify-self: center;
    }
`

export const InfoTitle = styled.h2`
    grid-area: title;
`

export const MainInfoDetails = styled.ul`
    grid-area: mainInfo;
    list-style: none;
    display: flex;
    flex-direction: column;
    row-gap: .5rem;

    width: max-content;
`

export const SubInfoDetails = styled.ul`
    grid-area: subInfo;
    list-style: none;
    display: flex;
    flex-direction: column;
    row-gap: .5rem;
    width: max-content;
`

export const MainInfo = styled.li`
`

export const SubInfo = styled.li`
`

export const Key = styled.span`
    font-weight: 500;
`

export const Value = styled.span`
    font-weight: 200;
`

export const BorderCountriesContainer = styled.div`
    grid-area: borderCountries;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    row-gap: 1rem;
    margin-bottom: 2rem;

    @media (min-width: 1200px) {
        flex-direction: row;
        column-gap: 1rem;
    }
`

export const BorderCountriesTitle = styled.span`
    font-weight: bold;
    
    @media (min-width: 1200px) {
        white-space: nowrap;
        align-self: center;
        justify-self: center;
    }
`

export const BorderCountriesLinkContainer = styled.div`
    display: flex;
    column-gap: 1rem;
    overflow-x: auto;

    max-width: 400px;
`

export const BorderCountry = styled(Link)`
    display: block;
    height: max-content;
    white-space: nowrap;
    text-decoration: none;
    padding: .5rem 2rem;
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.element};
    color: ${({theme}) => theme.colors.text};
`