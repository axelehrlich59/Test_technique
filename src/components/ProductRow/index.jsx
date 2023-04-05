import React, { useEffect, useState } from "react"
import { 
  CategoryContainer,
  TableCell,
  TableRow,
} from "../ProductTable/index.style"
import useWindowDimensions from "../../utils/functions/useWindowDimensions"
import { useNavigate } from "react-router-dom"

const ProductRow = ({
  productName,
  category,
  price, 
  priceWithVAT,
  id,
  data,
  setData,
}) => {

  const navigate = useNavigate()

  return (
    <TableRow 
      key={id}
      onClick={() => navigate(`/product/${id}`, {state:{data}})}
    >
      <TableCell 
        style={{
          display: "flex", 
          width: useWindowDimensions.width > 820 ? "50%" : "20%"
          }}
        >
          {productName}
        </TableCell>
      <TableCell 
        style={{
          display: "flex", 
          width: "12.5%", 
          whiteSpace:"nowrap", 
          height: "fit-content",
        }}>
        <CategoryContainer category={category}>
          {category}
        </CategoryContainer>
      </TableCell>
      <TableCell style={{display: "flex", width: "6%"}}>{price}€</TableCell>
      <TableCell style={{display: "flex", width: "20%"}}>{priceWithVAT}€</TableCell>
    </TableRow>
  )
} 

export default ProductRow
