import {
  Component,
  Capa,
  InfoContainer,
  Name,
  Genre,
  Author,
  Sinopse,
  StatusBox,
  Emprestar,
  FirstContainer,
  IsWith,
  DaysAgo,
} from "./styles";
import { useParams } from "react-router";
import { useAppSelector } from "../../store/hooks";
import SinopseBox from "../../Components/SinopseBox";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { RecoverBook } from "../../store/home";
import { useNavigate } from "react-router";

export default function BookInfo() {
  const data = useAppSelector((state) => state.home.emprestados);
  const { livro } = useParams();
  const BookIndex = Number(livro);
  const selectedBook = data[BookIndex];
  const [ShowSinopse, setShowSinopse] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function GetBookBack() {
    const dados = {
      Book: {
        nome: selectedBook.nome,
        autor: selectedBook.autor,
        capa: selectedBook.capa,
        categoria: selectedBook.categoria,
        sinopse: selectedBook.sinopse,
        id: `book-${Math.floor(Math.random() * 3214)}`,
      },
      Index: BookIndex,
    };
    dispatch(RecoverBook(dados));
    navigate("/");
  }
  return (
    <>
      {ShowSinopse && (
        <SinopseBox
          selectedBook={selectedBook}
          setShowSinopse={setShowSinopse}
        />
      )}

      <Component>
        <FirstContainer>
          <Capa src={selectedBook.capa} alt={selectedBook.nome} />

          <InfoContainer>
            <Genre>{selectedBook.categoria}</Genre>
            <Name>{selectedBook.nome}</Name>
            <Author>{selectedBook.autor}</Author>
            <Sinopse>
              <button onClick={() => setShowSinopse(!ShowSinopse)}>
                Sinopse
              </button>
            </Sinopse>
          </InfoContainer>
        </FirstContainer>
        <StatusBox>
          <p>Status</p>
          <h1>Atualmente este livro está com</h1>
          <IsWith>{selectedBook.emprestado}</IsWith>
          <DaysAgo>Há 14 dias</DaysAgo>
          <Emprestar>
            <button onClick={GetBookBack}>Recuperar</button>
          </Emprestar>
        </StatusBox>
      </Component>
    </>
  );
}
