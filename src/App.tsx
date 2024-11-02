import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lighTheme } from "./styles/theme";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import { DataTypeArray } from "./@types/DataType";
import { DataContext } from "./context/DataContext";
import countryData from './data/data.json'
import { Details } from "./pages/Details/Details";
import { GlobalStyled } from "./styles/GlobalStyle";
import { IsDarkThemeContext } from "./context/IsDarkThemeContext";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const [data, setData] = useState<DataTypeArray>([])

  useEffect(() => {
    setData(countryData)
  }, [])

  return (
    <DataContext.Provider value={{ data, setData }}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lighTheme}>
        <IsDarkThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
          <BrowserRouter>
            <Header />
            <GlobalStyled />
            <Routes>
              <Route path="/" element={<Navigate to="/0" replace />} />
              <Route path="/:page" element={<Home />} />
              <Route path="/details/:countryName" element={<Details />} />
            </Routes>
          </BrowserRouter>
        </IsDarkThemeContext.Provider>
      </ThemeProvider>
    </DataContext.Provider>
  );
}

export default App;
