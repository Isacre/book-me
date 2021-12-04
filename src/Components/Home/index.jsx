import styled from "styled-components";
import AvailableBooks from "../AvailableBooks";
import BorrowedBooks from "../BorrowedBooks";
import { useState } from "react";

const Component = styled.div`
  width: 100%;
`;
const Content = styled.div`
  width: 90%;
  margin: auto;
`;
const YourBooks = styled.h1`
  color: #730202;
  font-size: 54px;
  width: 50%;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
  line-height: 55px;
`;

const Selector = styled.div`
  width: 70%;
  margin: auto;

  margin-bottom: 50px;
  div {
    display: flex;
    margin: auto;
    justify-content: space-between;
  }
  button {
    margin: auto;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 15px;
  }
`;

const Disponiveis = styled.button`
  color: ${(props) =>
    props.Available ? "rgba(115,2,2,1)" : "rgba(115,2,2,0.25)"};
  background-color: ${(props) =>
    props.Available ? "rgba(146, 42, 42, 0.2);" : "transparent"};
  padding: 5px 15px;
  border-radius: 25px;
  font-size: 12px;
`;
const Emprestados = styled.button`
  color: ${(props) =>
    props.Available ? "rgba(115,2,2,0.25)" : "rgba(115,2,2,1)"};
  background-color: ${(props) =>
    props.Available ? "transparent" : "rgba(146, 42, 42, 0.2);"};
  padding: 5px 15px;
  border-radius: 25px;
  font-size: 12px;
`;

export default function Home() {
  const [Available, setAvailable] = useState(true);

  return (
    <Component>
      <Content>
        <YourBooks>SEUS LIVROS</YourBooks>
        <Selector>
          <div>
            <Disponiveis
              Available={Available}
              onClick={() => setAvailable(true)}
            >
              Disponíveis
            </Disponiveis>
            <Emprestados
              onClick={() => setAvailable(false)}
              Available={Available}
            >
              Emprestados
            </Emprestados>
          </div>
        </Selector>
        {Available ? <AvailableBooks /> : <BorrowedBooks />}
      </Content>
      :
    </Component>
  );
}
