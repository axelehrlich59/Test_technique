import React, { useState, useEffect } from "react"
import BurgerMenu from "../BurgerMenu"
import { 
  MainContainerMenu, 
  TitleMenuContainer,
  TitleMenuUnderContainer,
  Elipsis,
  TitleMenu,
  NavigationContainer,
  ContainerItemLists,
  ContainerLogout,
  Marker,
  ContainemItemProducts,
  StyledHeader,
} from "./index.style"
import useWindowDimensions from "../../utils/functions/useWindowDimensions"

const NavigationMenu = () => {

  const [burgerToogle, setBurgerToogle] = useState(false)
  /* const [widthScreen, setWidthScreen] = useState(window.innerWidth)

  useEffect(() => {
    const updateDimension = () => {
      setWidthScreen(window.innerWidth)
    }
    window.addEventListener('resize', updateDimension);
    
    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
  }, [widthScreen]) */

  return (
    <StyledHeader>
      <MainContainerMenu>

        {/* Burger Button */}
          {useWindowDimensions().width < 820 && <BurgerMenu 
            onClick={setBurgerToogle}
          />}
        {/* Burger Button */}

        {/* Header title of menu */}
        <TitleMenuContainer>
          <TitleMenuUnderContainer>
            <Elipsis />
            <TitleMenu>
              Circle 
              <br/> 
              Products
            </TitleMenu>
          </TitleMenuUnderContainer>
        </TitleMenuContainer>
        {/* Header title of menu */}

        {/* Content of menu */}
        {useWindowDimensions().width > 820 && <NavigationContainer>
          <ContainerItemLists>
            <li>Dasboard</li>
            <ContainemItemProducts>
              <Marker/><li>Product management</li>
            </ContainemItemProducts>
            <li>Employees management</li>
            <hr />
          </ContainerItemLists>
          <ContainerLogout>
            <li>Logout</li>
          </ContainerLogout>
        </NavigationContainer>}
        {/* Content of menu */}

        {/* Content of menu burger view mobile*/}
        {burgerToogle && <NavigationContainer>
          <ContainerItemLists>
            <li>Dasboard</li>
            <li>Product management</li>
            <li>Employees management</li>
            <hr />
          </ContainerItemLists>
          <ContainerLogout>
            <li>Logout</li>
          </ContainerLogout>
        </NavigationContainer>}
        {/* Content of menu burger view mobile*/}
      </MainContainerMenu>
    </StyledHeader>
  )
} 

export default NavigationMenu
