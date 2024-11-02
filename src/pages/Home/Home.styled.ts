import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    row-gap: 2rem;

    @media (min-width: 1200px) {
        max-width: 1600px;
        margin: auto;
    }
`

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    @media (min-width: 750px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export const SearchInputContainer = styled.div`
    max-width: 500px;
    flex-grow: 1;
    display: flex;
    padding: 1rem 1.5rem;
    padding-right: 0;
    align-items: center;
    column-gap: 1.5rem;
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.element};
`

export const StyledIcon = styled(FontAwesomeIcon)`
    color: ${({theme}) => theme.colors.text};
`

export const SearchInput = styled.input`
    flex-grow: 1;
    background: transparent;
    border: none;
    outline: none;
    color: ${({theme}) => theme.colors.text};

    &::placeholder {
        color: ${({theme}) => theme.colors.text};
        opacity: .8;
    }
`

export const SearchSelect = styled.select`
    width: max-content;
    padding: 1rem;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: ${({theme}) => theme.colors.element};
    color: ${({theme}) => theme.colors.text};
`

export const SearchOption = styled.option`
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    margin: auto;
    width: 100%;
    justify-content: space-between;
    column-gap: 2rem;
    align-items: center;

    @media (min-width: 800px) {
        display: grid;
        grid-template-columns: repeat(2, auto);
        justify-content: center;
    }

    @media (min-width: 1200px) {
        display: grid;
        grid-template-columns: repeat(3, auto);
    }

    @media (min-width: 1600px) {
        display: grid;
        grid-template-columns: repeat(4, auto);
        justify-content: space-between;
    }
`

export const  Card = styled.div`
    min-width: 340px;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;

    background-color: ${({theme}) => theme.colors.element};
    color: ${({theme}) => theme.colors.text};
`

export const ImgContainer = styled.div`
    min-height: 240px;
    max-height: 240px;
    display: flex;
`

export const CardImg = styled.img`
    object-fit: cover;
    width: 100%;
`

export const CardSpecs = styled.div`
    padding: 2rem;
`

export const CardTitle = styled.h2`
    font-weight: 900;
    margin-bottom: 1rem;
`

export const CardInfo = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: .5rem;
    list-style: none;
`

export const CardInfoItem = styled.li`
`

export const CardInfoKey = styled.span`
    font-weight: bold;
`

export const CardInfoValue = styled.span`

`

export const Pagination = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;

    margin-bottom: 2rem;
`

export const PaginationText = styled.span`
    color: ${({theme}) => theme.colors.text};
`

export const PaginationContainer = styled.div`
    display: flex;
    max-width: 200px;
    column-gap: .5rem;
    overflow-x: scroll;
    margin: auto;
`

export const PaginationLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    padding: 1rem;
    text-decoration: none;
    border-radius: 5px;
    margin: auto;

    background: ${({theme}) => theme.colors.element};
    color: ${({theme}) => theme.colors.text};

    &.active {
        border: 1px solid ${({theme}) => theme.colors.text};
    }
`