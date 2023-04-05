import React, { useState } from "react"
import { 
  MainContainerProduct, 
  ProductTableContainer, 
  ProductTitleContainer,
  TitleProductPage, 
} from "./index.style"
import ProductTable from "../ProductTable"

const SelectProductPage = ({
  data, setData
}) => {

  return (
    <MainContainerProduct>
      <ProductTitleContainer>
        <TitleProductPage>Products management</TitleProductPage>
      </ProductTitleContainer>
      <ProductTableContainer>
        <ProductTable data={data} setData={setData}/>
      </ProductTableContainer>
    </MainContainerProduct>
  )
} 

export default SelectProductPage
