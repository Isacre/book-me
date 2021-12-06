import styled from "styled-components";
import AvailableBooks from "../../Components/AvailableBooks/index";
import BorrowedBooks from "../../Components/BorrowedBooks";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

type Props = {
  Available?: Boolean;
  setNome?: String;
  setAutor?: String;
  setCapa?: String;
};

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

const Disponiveis = styled.button<Props>`
  color: ${(props) =>
    props.Available ? "rgba(115,2,2,1)" : "rgba(115,2,2,0.25)"};
  background-color: ${(props) =>
    props.Available ? "rgba(146, 42, 42, 0.2);" : "transparent"};
  padding: 5px 15px;
  border-radius: 25px;
  font-size: 12px;
`;
const Emprestados = styled.button<Props>`
  color: ${(props) =>
    props.Available ? "rgba(115,2,2,0.25)" : "rgba(115,2,2,1)"};
  background-color: ${(props) =>
    props.Available ? "transparent" : "rgba(146, 42, 42, 0.2);"};
  padding: 5px 15px;
  border-radius: 25px;
  font-size: 12px;
`;

const NewBookButton = styled.button`
  background-color: #730202;
  border: none;
  border-radius: 35px;
  color: white;
  font-size: 35px;
  color: rgba(226, 198, 198, 1);
  padding: 3px 8px;
  padding-top: 8px;
`;

const BUTTONDIV = styled.div`
  position: fixed;
  left: 80vw;
  top: 90vh;
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
        <BUTTONDIV>
          <Link to="/adicionar">
            <NewBookButton>
              <GoPlus />
            </NewBookButton>
          </Link>
        </BUTTONDIV>
      </Content>
    </Component>
  );
}
