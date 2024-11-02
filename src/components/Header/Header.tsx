import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons"
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons"
import { Container, DarkLightContainer, DarkLightIcon, DarkLightText, Title, Wrapper } from "./Header.styled"
import { useIsDarkThemeContext } from "../../context/IsDarkThemeContext"

export const Header = () => {
    const { isDarkTheme, setIsDarkTheme } = useIsDarkThemeContext()
    return (
        <Container>
            <Wrapper>
                <Title>Where in the world?</Title>

                <DarkLightContainer onClick={e => setIsDarkTheme(!isDarkTheme)}>
                    <DarkLightIcon>
                        <FontAwesomeIcon icon={isDarkTheme ? solidMoon : regularMoon} size="lg" />
                    </DarkLightIcon>

                    <DarkLightText>{isDarkTheme ? 'Light Mode' : 'Dark Mode'}</DarkLightText>
                </DarkLightContainer>
            </Wrapper>
        </Container>
    )
}