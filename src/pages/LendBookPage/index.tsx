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
import { useDispatch } from "react-redux";
import { BorrowBook } from "../../store/home";
import { useNavigate } from "react-router-dom";

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
    color: rgba(115, 2, 2, 1);
    margin-top: 26px;
    margin-left: 10px;
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
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  const hoje = dd + "-" + mm + "-" + yyyy;
  const navigate = useNavigate();
  const selectedBook = props.selectedBook;
  const BookIndex = props.BookIndex;
  const [LentTill, setLentTill] = useState("Indefinido");
  const [Obs, setObs] = useState("");
  const [Receiver, setReceiver] = useState("");
  const dispatch = useDispatch();

  function LendBook() {
    const BookData = {
      Book: {
        nome: selectedBook.nome,
        autor: selectedBook.autor,
        capa: selectedBook.capa,
        categoria: selectedBook.categoria,
        sinopse: selectedBook.sinopse,
        id: `book-${Math.floor(Math.random() * 3214)}`,
        emprestado: Receiver,
        em: hoje,
        ate: LentTill,
        obs: Obs,
      },
      Index: BookIndex,
    };
    if (Receiver !== "") {
      dispatch(BorrowBook(BookData));

      navigate("/");
    } else {
      window.alert("Por favor informe o destinatário");
    }
  }

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
        <input
          placeholder="John Doe"
          onChange={(e) => setReceiver(e.target.value)}
          value={Receiver}
        />
        <div>
          <p>Até quando?</p>{" "}
          <span>'(ignorar caso empreste indefinidamente)'</span>
        </div>
        <input
          type="date"
          min={new Date().toISOString().split("T")[0]}
          placeholder="28/04/2025"
          onChange={(e) => setLentTill(e.target.value)}
          value={LentTill}
        />
        <p>Observação</p>
        <textarea
          value={Obs}
          onChange={(event) => setObs(event.target.value)}
        />
      </Inputs>
      <Emprestar>
        <button onClick={LendBook}>Emprestar</button>
      </Emprestar>
    </Component>
  );
}
