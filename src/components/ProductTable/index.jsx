import React, { useEffect, useState } from "react"
import { 
  TableBody,
  TableHeader,
  TableProducts,
  TableRow,
  HeaderCell,
} from "./index.style"
import ProductRow from "../ProductRow"
import useWindowDimensions from "../../utils/functions/useWindowDimensions"
import { getTavCalculated } from "../../utils/functions"

const ProductTable = ({
  data, setData
}) => {


  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=7')
      .then(res => res.json())
      .then(json => setData(json))
  }, [])



  return (
    <TableProducts>
      <TableHeader>
        <TableRow>
          <HeaderCell style={{display: "flex", width: useWindowDimensions.width > 820 ? "50%" : "20%"}}>Product Name</HeaderCell>
          <HeaderCell style={{display: "flex", width: "12.5%"}}>Category</HeaderCell>
          <HeaderCell style={{display: "flex", width: "6%"}}>Price</HeaderCell>
          <HeaderCell style={{display: "flex", width: "30%"}}>Price (including VAT)</HeaderCell>
        </TableRow>
      </TableHeader>
      {/* Map on the row for display each row by product*/}
      <TableBody>
        {
          Array.isArray(data) && 
          data.length > 0 &&
            data.map(element => {
              return (
                <ProductRow
                  id={element.id} 
                  data={data}
                  setData={setData}
                  productName={element.title}
                  category={element.category}
                  price={element.price}
                  priceWithVAT={getTavCalculated(element.price)}
                />
              )
            })
        }
      </TableBody>
      {/* Map on the row for display each row by product*/}
    </TableProducts>
  )
} 

export default ProductTable
