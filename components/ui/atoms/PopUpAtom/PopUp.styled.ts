import styled from "styled-components";

export const PopUpWrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export const PopUpSubWrapper = styled.div`
  padding: 8.7rem 21rem;
  border-radius: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 50;
  background: rgba(34, 21, 81, 0.6);
  backdrop-filter: blur(35px);
  gap: 2rem;
`

export const PopUpButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: calc(2.5rem + 1vw);
`
export const PopUpPercentButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: calc(0.6rem + 1vw);
`
