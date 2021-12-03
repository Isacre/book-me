import React from "react";
import styled from "styled-components";
import logo from '../../assets/Frame.svg'
import pessoa from '../../assets/pessoa.svg'
import sino from '../../assets/sino.svg'

const Component = styled.div`
background-color: #730202;
width: 100%;
height: 10vh;
`;

const Content = styled.div`
width: 85%; 
height: 100%;
justify-content:space-between;
align-items: center;
margin: auto;
display: flex;
`

const Logo = styled.div`
display: flex;
align-items: center;
color: white;
font-size: 20px;
gap: 20px;
img {
  height: 40px;
}
`;
const UserInfo = styled.div`
vertical-align: top;

img {
  height: 25px;
  

  :first-child{
    margin-right: 30px;
  }
}
`;


export default function Header() {
  return <Component>
  <Content>
   <Logo>
<img src={logo} alt='logo'/>
<p>Book.me</p>
   </Logo>

   <UserInfo>

<img src={sino} alt='sino'/>
<img src={pessoa} alt='pessoa'/>
   </UserInfo>
  </Content>
  </Component>;
}
