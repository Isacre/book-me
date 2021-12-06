import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/Frame.svg";
import pessoa from "../../assets/pessoa.svg";
import sino from "../../assets/sino.svg";

const Component = styled.div`
  background-color: #730202;
  width: 100%;
  height: 12vh;
  margin-bottom: 30px;
  a {
    text-decoration: none;
  }
`;

const Content = styled.div`
  width: 90%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  display: flex;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 22px;
  gap: 15px;
  img {
    height: 40px;
  }
`;
const UserInfo = styled.div`
  vertical-align: top;

  img {
    height: 20px;

    :first-child {
      margin-right: 20px;
    }
  }
`;

export default function Header() {
  return (
    <Component>
      <Content>
        <Link to="/">
          <Logo>
            <img src={logo} alt="logo" />
            <p>Book.me</p>
          </Logo>
        </Link>
        <UserInfo>
          <img src={sino} alt="sino" />
          <img src={pessoa} alt="pessoa" />
        </UserInfo>
      </Content>
    </Component>
  );
}
