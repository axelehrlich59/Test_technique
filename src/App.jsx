import React, {useState} from "react"
import NavigationMenu from "./components/NavigationMenu"
import './App.css'
import styled, { ThemeProvider } from "styled-components"
import { theme } from "./assets/theme"
import SelectProductPage from "./components/SelectProductPage"

const App = ({}) => {
  const [data, setData] = useState([])

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <NavigationMenu/>
        <SelectProductPage data={data} setData={setData}/>
      </StyledContainer>
    </ThemeProvider>
  )
} 

export default App

const StyledContainer = styled.div`
  display: flex;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`