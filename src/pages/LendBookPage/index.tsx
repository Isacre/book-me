import {
  Component,
  Capa,
  InfoContainer,
  Name,
  Genre,
  Author,
  Emprestar,
} from "./styles";
import { useState } from "react";
import styled from "styled-components";

const HeaderTEXT = styled.h1`
  font-size: 54px;
  color: rgba(115, 2, 2, 1);
  margin-bottom: 10px;
`;
const Content = styled.div`
  border-radius: 20px;
  background-color: rgba(237, 228, 216, 0.9);
  display: grid;
  grid-template-columns: 1fr 2fr;
`;
const CapaContainer = styled.div`
  padding: 10px 15px;
`;

const Inputs = styled.div`
  width: 100%;

  p {
    font-size: 18px;
    color: rgba(115, 2, 2, 1);
    margin-top: 20px;
  }
  div {
    display: flex;
    text-align: bottom;
  }

  span {
    font-size: 10px;
    text-align: end;
    color: rgba(115, 2, 2, 1);
  }
  input {
    width: 100%;
    border: 2px solid #730202;
    border-radius: 5px;
    line-height: 35px;
    padding-left: 5px;
    outline: none;
  }

  textarea {
    width: 100%;
    border: 2px solid #730202;
    border-radius: 5px;
    line-height: 35px;
    padding-left: 5px;
    outline: none;
  }
`;

export default function LendBookPage(props: any) {
  const selectedBook = props.selectedBook;
  const [Who, setWho] = useState("");

  return (
    <Component>
      <HeaderTEXT>EMPRESTAR LIVRO</HeaderTEXT>
      <Content>
        <CapaContainer>
          <Capa src={selectedBook.capa} alt={selectedBook.nome} />
        </CapaContainer>

        <InfoContainer>
          <Genre>{selectedBook.categoria}</Genre>
          <Name>{selectedBook.nome}</Name>
          <Author>{selectedBook.autor}</Author>
        </InfoContainer>
      </Content>
      <Inputs>
        <p>A quem? *</p>
        <input placeholder="John Doe" />
        <div>
          <p>Até quando?</p>{" "}
          <span>'(ignorar caso empreste indefinidamente)'</span>
        </div>
        <input placeholder="28/04/2025" />
        <p>Observação</p>
        <textarea />
      </Inputs>
      <Emprestar>
        <button>Emprestar</button>
      </Emprestar>
    </Component>
  );
}
