import styled from "styled-components";

export const MainContainerProduct = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.productBackground};
  overflow-y: auto;
`

export const ProductTitleContainer = styled.div`
  display: flex; 
  justify-content: center;
  padding: 68px 0px 66px 0px;
  text-align: center;
`

export const TitleProductPage = styled.h1`
  color: ${({theme}) => theme.colors.productColor}
`

export const ProductTableContainer = styled.div`
  display: flex;
  padding: 0px 50px 0px 50px;

  @media (max-width: 820px) {
    padding: 0px 10px;
  }
` 
