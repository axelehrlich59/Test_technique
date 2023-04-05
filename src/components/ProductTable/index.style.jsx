import styled from "styled-components";



export const TableProducts = styled.table`
  width: 100%;
  font-size: 0.9em;
  border-radius: 3px;
  color: ${({theme}) => theme.colors.white};

  thead tr {
    padding: 21px 20px 22px 20px;
    background-color: ${({theme}) => theme.colors.productColor};
  }

  tbody tr {
    padding: 21px 20px 22px 20px;
  }
`

export const TableHeader = styled.thead`
  white-space: nowrap;
`

export const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`

export const TableBody = styled.tbody`
  tr {
    margin-top: 10px;
    box-shadow: 0px 2px 5px #0000001A;
    border-radius: 3px;
  }
`

export const HeaderCell = styled.th`
  padding: 0px 20px 0px;
`

export const TableCell = styled.td`
  color: ${({theme}) => theme.colors.productItems};
  font-weight: bold;
  text-align: start;
`

export const CategoryContainer = styled.div`
  padding: 5px 13px 7px 13px;
  border-radius: 17px;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({category, theme}) => category === "jewelery" ? theme.colors.green : theme.colors.orange};
`