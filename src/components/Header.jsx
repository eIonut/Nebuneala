import React from 'react'
import { styled } from 'styled-components'
const HeaderStyle = styled.header`
  width: 100%;
  height: 15rem;
  background-color: #171A26;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 10rem;
  padding-left: 4rem;
  font-size: 1.6rem;

    @media only screen and (max-width: 800px) {
 padding-left: 4rem;
 font-size: 1.2rem;
}

   @media only screen and (max-width: 700px) {
 padding-left: 2rem;
}

 @media only screen and (max-width: 402px) {
 padding: 8rem 2rem;
}
`
const Logo = styled.p`
color: #FE9A51;
`
const Header = () => {
  return (
    <HeaderStyle>
      <Logo>NEBUNEALA</Logo>
      <h1>Learn smokes, grenades and flashes and WIN your matches within seconds!</h1>
    </HeaderStyle>
  )
}

export default Header;
