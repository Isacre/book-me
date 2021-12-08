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
} from "./styles";
import { useParams } from "react-router";
import { useAppSelector } from "../../store/hooks";
import SinopseBox from "../../Components/SinopseBox";
import { useState } from "react";

export default function BookInfo() {
  const data = useAppSelector((state) => state.home.emprestados);
  const { livro } = useParams();
  const BookIndex = Number(livro);
  const selectedBook = data[BookIndex];
  const [ShowSinopse, setShowSinopse] = useState(false);

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
          <h1>Atualmente está com</h1>
          <h2>{selectedBook.emprestado}</h2>
          <Emprestar>
            {" "}
            <button>Recuperar</button>
          </Emprestar>
        </StatusBox>
      </Component>
    </>
  );
}
