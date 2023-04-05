import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 20%;
  @media (max-width: 820px) {
    width: 100%;
  }
`

export const MainContainerMenu = styled.nav`
  height: 100vh;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.productColor};

  @media (max-width: 820px) {
    height: 100%;
    padding: 3px;
  }
`
export const TitleMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 58px 88px 116px 88px;

  @media (max-width: 820px) {
    width: 100%;
    padding: 5px;
  }
`

export const TitleMenuUnderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const TitleMenu = styled.h4``

export const Elipsis = styled.div`
  width: 58px;
  height: 58px;
  border: 9px solid;
  border-radius: 50%;

  @media (max-width: 820px) {
    width: 35px;
    height: 35px;
  }
`

export const NavigationContainer = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
`

export const ContainerItemLists = styled.ul`
  width: 70%;
  padding-left: 35px;
  display: flex;
  flex-direction: column;
  gap: 35px;

  li {
    list-style-type: none;
  }

  li::marker {
    font-size: 1.4rem;
    font-weight: bold;
  }

  hr {
    border-color: #8E86FF;
    margin-bottom: 35px;
  }

  @media (max-width: 820px) {
    margin-top: 15px;
    gap: 5px;
    padding: 5px;
    font-size: 0.9rem;

    hr {
      margin-bottom: 10px;
    }
  }
  
` 
export const ContainemItemProducts = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`
export const ContainerLogout = styled.ul`
  width: 70%;
  padding-left: 35px;
  display: flex;
  flex-direction: column;
  
  li {
    list-style-type: none;
  }

  @media (max-width: 820px) {
    padding: 5px;
    font-size: 0.9rem;
  }
`

export const Marker = styled.div`
  padding-left: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.white}
`

