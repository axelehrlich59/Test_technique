import styled from "styled-components";
import { CategoryContainer } from "../ProductTable/index.style";

export const MainContainerDisplayProduct = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.productBackground};
  overflow-y: auto;
`

export const ContainerProducts = styled.div`
  display: flex;
  height: 60%;
  margin: 0px 50px 0px 50px;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`

export const ContainerImg = styled.div`
  border-radius: 3px;
`

export const Image = styled.img`
  width: 50%;
  height: 100%;
  box-shadow: 0px 2px 5px #0000001A;
  object-fit: contain;
  background: ${({theme}) => theme.colors.white} 0% 0% no-repeat padding-box;

  @media (max-width: 820px) {
    width: 100%;
  }
`

export const ContainerGroupBlocs = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContainerDetails = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;

  @media (max-width: 820px) {
    margin-top: 30px;
  }
`

export const ContainerDetailsTop = styled(ContainerDetails)``

export const ContainerDetailsBottom = styled(ContainerDetails)`
  
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

export const DescriptionTitle = styled.h2`
  color: ${({theme}) => theme.colors.productColor};
  margin-bottom: 19px;
`

export const CategoryTitle = styled(DescriptionTitle)``

export const DescriptionContent = styled.p`
  color: ${({theme}) => theme.colors.productItems}
`

export const CategoryContent = styled(CategoryContainer)`
  white-space: nowrap;
`
export const PriceTitle = styled(DescriptionTitle)``

export const InputPriceValue = styled.input`
  padding: 10px;
  border: 1px solid ${({theme}) => theme.colors.productColor};
  border-radius: 3px;
  outline: none;
  color: ${({theme}) => theme.colors.productItems};
`

export const ContainerBlocPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 88px;
  color: ${({theme}) => theme.colors.productItems};

  @media (max-width: 820px) {
    flex-direction: column;
  }
`

export const EuroSymbol = styled.span`
  position: relative;
  color: ${({theme}) => theme.colors.productItems};

  :before {
    position: absolute;
    top: 10px;
    content:"€";
    right: 5px;
  }
`

export const PriceContentTitle = styled.span`
  font-weight: bold;
`

export const PriceContent = styled.div`
  display: flex;
  gap: 3px;
`
export const PriceValue = styled(PriceContent)``

export const ButtonUpdate = styled.button`
  margin-top: 49px;
  width: 137px;
  padding: 9px 14px 10px 13px;
  background-color: ${({theme}) => theme.colors.productColor};
  color: ${({theme}) => theme.colors.white};
  border: unset;
  border-radius: 3px;
  cursor: pointer;

  @media (max-width: 820px) {
    margin-bottom: 50px;
  }
`