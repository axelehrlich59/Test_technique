import styled from "styled-components";

export const BurgerButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    background-color: white;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1' };
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translate(0)'}
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' :  'rotate(0)'};
    }
  }
`