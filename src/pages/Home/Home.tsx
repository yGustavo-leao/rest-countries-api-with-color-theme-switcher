import { useEffect, useRef, useState } from "react"
import { useDataContext } from "../../context/DataContext"
import { Card, CardContainer, CardImg, CardInfo, CardInfoItem, CardInfoKey, CardInfoValue, CardSpecs, CardTitle, Container, ImgContainer, Pagination, PaginationContainer, PaginationLink, PaginationText, SearchContainer, SearchInput, SearchInputContainer, SearchOption, SearchSelect, StyledIcon } from "./Home.styled"
import { DataTypeArray } from "../../@types/DataType"
import { generatePages } from "./utils/generatePages"
import { useNavigate, useParams } from "react-router-dom"
import { debounce } from "./utils/debounce"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export const Home = () => {

    const { data } = useDataContext()
    const [currentFilter, setCurrentFilter] = useState('All')
    const [currentData, setCurrentData] = useState<DataTypeArray>()
    const [paged, setPaged] = useState<DataTypeArray[]>()
    const [numberOfPages, setNumberOfPages] = useState<number[]>()
    const searchInputRef = useRef<HTMLInputElement>(null)
    const { page } = useParams()
    const navigate = useNavigate()
    const debouncedSearch = debounce(handleSearch, 500)

    useEffect(() => {
        if (currentFilter === 'All') setCurrentData(data);
        else setCurrentData(data.filter(currentData => currentData.region === currentFilter));

        if (searchInputRef && searchInputRef.current) searchInputRef.current.value = ''
    }, [currentFilter, data])

    useEffect(() => {
        if (currentData) setPaged(generatePages(8, currentData));
    }, [currentData])

    useEffect(() => {
        if (paged) {
            let tempNumberOfPages: number[] = []
            for (let index = 0; index < paged?.length; index++) tempNumberOfPages.push(index);
            setNumberOfPages(tempNumberOfPages)
        }

        navigate('/0')
    }, [paged])

    function handleSearch(value: string) {
        let researchedData: DataTypeArray = []
        researchedData = currentData?.filter(country => country.name.toLowerCase().includes(value.toLowerCase())) || []
        if (researchedData.length > 0) setPaged(generatePages(9, researchedData));
        else setPaged([])
    }

    return (
        <Container>
            <SearchContainer>
                <SearchInputContainer>
                    <StyledIcon icon={faMagnifyingGlass} />
                    <SearchInput type="text" placeholder="Search for a country..." ref={searchInputRef} onChange={e => debouncedSearch(e.target.value)} />
                </SearchInputContainer>

                <SearchSelect defaultValue="Filter by Region" onChange={e => {
                    setCurrentFilter(e.target.value)
                    navigate('/0')
                }} >
                    <SearchOption disabled style={{
                        display: 'none'
                    }} >Filter by Region</SearchOption>
                    <SearchOption value="All">All</SearchOption>
                    <SearchOption value="Africa">Africa</SearchOption>
                    <SearchOption value="Americas">America</SearchOption>
                    <SearchOption value="Asia">Asia</SearchOption>
                    <SearchOption value="Europe">Europe</SearchOption>
                    <SearchOption value="Oceania">Oceania</SearchOption>
                </SearchSelect>
            </SearchContainer>

            <CardContainer>
                {
                    paged?.[Number(page)]?.map(country =>
                        <Card key={Math.random()} onClick={e => navigate(`/details/${encodeURIComponent(country.name)}`)} >
                            <ImgContainer>
                                <CardImg src={country.flag} alt="Country flag" />
                            </ImgContainer>
                            <CardSpecs>
                                <CardTitle>{country.name}</CardTitle>
                                <CardInfo>
                                    <CardInfoItem>
                                        <CardInfoKey>Population: </CardInfoKey>
                                        <CardInfoValue>{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</CardInfoValue>
                                    </CardInfoItem>

                                    <CardInfoItem>
                                        <CardInfoKey>Region: </CardInfoKey>
                                        <CardInfoValue>{country.region}</CardInfoValue>
                                    </CardInfoItem>

                                    <CardInfoItem>
                                        <CardInfoKey>Capital: </CardInfoKey>
                                        <CardInfoValue>{country.capital}</CardInfoValue>
                                    </CardInfoItem>
                                </CardInfo>
                            </CardSpecs>
                        </Card>
                    )
                }
            </CardContainer>

            <Pagination>
                <PaginationText>Page: {page} of {numberOfPages ? numberOfPages.length - 1 : page}</PaginationText>

                <PaginationContainer>
                    {
                        numberOfPages?.map(pageIndex =>
                            <PaginationLink key={Math.random()} to={`/${pageIndex}`} replace >{pageIndex}</PaginationLink>
                        )
                    }
                </PaginationContainer>
            </Pagination>
        </Container>
    )
}