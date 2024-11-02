import { useNavigate, useParams } from "react-router-dom"
import { useDataContext } from "../../context/DataContext"
import { BorderCountriesContainer, BorderCountriesLinkContainer, BorderCountriesTitle, BorderCountry, Container, CountryImg, DetailsContainer, InfoContainer, InfoTitle, Key, MainInfo, MainInfoDetails, ReturnButton, SubInfo, SubInfoDetails, Value } from "./Details.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import { DataType } from "../../@types/DataType"
import { useEffect, useState } from "react"

export const Details = () => {
    const { countryName } = useParams()
    const { data } = useDataContext()
    const navigate = useNavigate()
    const [currentCountry, setCurrentCountry] = useState<DataType | undefined>()
    const [borderCountries, setBorderCountries] = useState<string[]>()

    useEffect(() => {
        setCurrentCountry(data.find(country => country.name.toLowerCase() === countryName?.toLowerCase()))
    }, [data, countryName])

    useEffect(() => {
        setBorderCountries(data.filter(country => currentCountry?.borders?.includes(country.alpha3Code)).map(country => country.name))
    }, [currentCountry, data])

    return (
        <>
            {currentCountry && <Container>
                <ReturnButton onClick={e => navigate(-1)} >
                    <FontAwesomeIcon icon={faArrowLeftLong} /> Back
                </ReturnButton>

                <DetailsContainer>
                    <CountryImg src={currentCountry?.flag} alt="Country flag" />

                    <InfoContainer>
                        <InfoTitle>{currentCountry?.name}</InfoTitle>

                        <MainInfoDetails>
                            <MainInfo>
                                <Key>Native Name: </Key> <Value>{currentCountry?.nativeName}</Value>
                            </MainInfo>
                            <MainInfo>
                                <Key>Population: </Key> <Value>{currentCountry?.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Value>
                            </MainInfo>
                            <MainInfo>
                                <Key>Region: </Key> <Value>{currentCountry?.region}</Value>
                            </MainInfo>
                            <MainInfo>
                                <Key>Sub Region: </Key> <Value>{currentCountry?.subregion}</Value>
                            </MainInfo>
                            <MainInfo>
                                <Key>Capital: </Key> <Value>{currentCountry?.capital}</Value>
                            </MainInfo>
                        </MainInfoDetails>

                        <SubInfoDetails>
                            <SubInfo>
                                <Key>Top Level Domain: </Key> <Value>{currentCountry?.topLevelDomain}</Value>
                            </SubInfo>
                            <SubInfo>
                                <Key>Currencies: </Key> <Value>{currentCountry?.currencies?.[0]?.name}</Value>
                            </SubInfo>
                            <SubInfo>
                                <Key>Languages: </Key> <Value>{currentCountry?.languages.map(language => language.name).join(', ')}</Value>
                            </SubInfo>
                        </SubInfoDetails>

                        <BorderCountriesContainer>
                            <BorderCountriesTitle>Border Countries: </BorderCountriesTitle>

                            <BorderCountriesLinkContainer>
                                {
                                    borderCountries?.map(countryName => <BorderCountry key={Math.random()} to={`/details/${encodeURIComponent(countryName)}`}>{countryName}</BorderCountry>)
                                }
                            </BorderCountriesLinkContainer>
                        </BorderCountriesContainer>
                    </InfoContainer>
                </DetailsContainer>
            </Container>}
        </>
    )
}