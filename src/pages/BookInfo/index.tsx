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
import LendBookPage from "../LendBookPage";

export default function BookInfo() {
  const data = useAppSelector((state) => state.home.livros);
  const { livro } = useParams();
  const BookIndex = Number(livro);
  const selectedBook = data[BookIndex];
  const [ShowSinopse, setShowSinopse] = useState(false);
  const [LendBook, setLendBook] = useState(true);

  return (
    <>
      {LendBook ? (
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
              <h1>Atualmente este livro está em sua biblioteca</h1>
              <Emprestar onClick={() => setLendBook(false)}>
                {" "}
                <button>Emprestar</button>
              </Emprestar>
            </StatusBox>
          </Component>
        </>
      ) : (
        <LendBookPage selectedBook={selectedBook} />
      )}
    </>
  );
}
