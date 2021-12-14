import { HeaderBackground, Content, Logo, UserArea } from "./styles";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import logo from "../../assets/Frame.svg";
import pessoa from "../../assets/pessoa.svg";
import sino from "../../assets/sino.svg";

export default function Header() {
  const url = useParams();
  console.log(url);
  return (
    <HeaderBackground>
      <Content>
        <Link to="/">
          <Logo>
            <img src={logo} alt="logo" />
            <p>Book.me</p>
          </Logo>
        </Link>
        <UserArea>
          <img src={sino} alt="sino" />
          <img src={pessoa} alt="pessoa" />
        </UserArea>
      </Content>
    </HeaderBackground>
  );
}
