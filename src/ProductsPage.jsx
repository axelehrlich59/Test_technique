import React, { useState, useEffect } from "react"
import NavigationMenu from "./components/NavigationMenu"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "./assets/theme"
import { useLocation, useParams } from "react-router-dom"
import axios from "axios"
import DisplayProduct from "./components/DisplayProduct"

const ProductsPage = () => {

  const { id } = useParams()
  const idToNumber = parseFloat(id)
  const location = useLocation()
  const {state} = location
  const findData = id && state?.data?.find(elem => elem?.id === idToNumber)
  const [product, setProduct] = useState([])
  //console.log(findData)
  //const [valueToUpdate, setValueToUpdate] = useState(product.price)
  //const {setData} = state

  console.log(location)


  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  const updateProduct = async() => {
    try {
      //const update = {price: valueToUpdate}
      const { data } = await axios.put(`https://fakestoreapi.com/products/${id}`, update);
      setData({...product, price: data.price})
    } catch (err) {
      console.error(err);
    }
  }


  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <NavigationMenu/>
        <DisplayProduct 
          product={product} 
          //valueToUpdate={valueToUpdate} 
          //setValueToUpdate={setValueToUpdate}
          updateProduct={updateProduct}
        />
      </StyledContainer>
    </ThemeProvider>
  )
} 

export default ProductsPage

const StyledContainer = styled.div`
  display: flex;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`