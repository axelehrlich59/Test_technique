import React from "react"
import { 
  BurgerButton
} from "./index.style"

const BurgerMenu = ({
  onClick,
}) => {

  return (
    <BurgerButton 
      type="button"
      onClick={
        () => onClick(previousState => !previousState)
      }
    >
      <div />
      <div />
      <div />
    </BurgerButton>
  )
} 

export default BurgerMenu
