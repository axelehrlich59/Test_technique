import React, { useState, useEffect } from "react"
import { 
  MainContainerDisplayProduct, 
  ContainerProducts, 
  Image,
  ContainerGroupBlocs,
  ContainerDetailsTop,
  ContainerDetailsBottom,
  ContainerItems,
  DescriptionTitle,
  DescriptionContent,
  CategoryTitle,
  CategoryContent,
  PriceTitle,
  InputPriceValue,
  EuroSymbol,
  ContainerBlocPrice,
  PriceContent,
  PriceContentTitle,
  PriceValue,
  ButtonUpdate,
} from "./index.style"
import {ProductTitleContainer,TitleProductPage} from "../SelectProductPage/index.style"
import styled from "styled-components"
import { getTavCalculated } from "../../utils/functions"
import axios from "axios"

const DisplayProduct = ({
  product,
  valueToUpdate,
  //setValueToUpdate,
  //updateProduct,
}) => {


  const {title, category, image, price, description, id} = product


  return (
    <MainContainerDisplayProduct>
      <ProductTitleContainer>
        <TitleProductPage>
          {title}
        </TitleProductPage>
      </ProductTitleContainer>
      <ContainerProducts>
        <Image src={image}/>
        <ContainerGroupBlocs>
          <ContainerDetailsTop>
            {/* Description bloc */}
            <ContainerItems>
              <DescriptionTitle>
                Description
              </DescriptionTitle>
              <DescriptionContent>
                {description}
              </DescriptionContent>
            </ContainerItems>
            {/* Description bloc */}
            {/* Category bloc */}
            <ContainerItems>
              <CategoryTitle>
                Category
              </CategoryTitle>
              <CategoryContent >
                {category}
              </CategoryContent>
            </ContainerItems>
            {/* Category bloc */}
          </ContainerDetailsTop>
          <ContainerDetailsBottom>
            {/* Price bloc */}
            <ContainerItems>
              <PriceTitle>
                Price
              </PriceTitle>
              <ContainerBlocPrice>
                <EuroSymbol>
                  <InputPriceValue 
                    type="text"
                    onChange={(e) => setValueToUpdate(e.target.value)}
                  />
                </EuroSymbol>
                <PriceContent>
                  <PriceContentTitle>Price</PriceContentTitle> 
                  <p>(including VAT):</p>
                  <PriceValue>{getTavCalculated(price)}€</PriceValue> 
                </PriceContent>
              </ContainerBlocPrice>
              <ButtonUpdate onClick={() => updateProduct(valueToUpdate)}>Update product</ButtonUpdate>
            </ContainerItems>
            {/* Price bloc */}
          </ContainerDetailsBottom>
        </ContainerGroupBlocs>
      </ContainerProducts>
    </MainContainerDisplayProduct>
  )
} 

export default DisplayProduct
