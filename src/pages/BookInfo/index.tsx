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
import SinopsePage from "../../Components/SinopsePage";
import { useState } from "react";

export default function BookInfo() {
  const data = useAppSelector((state) => state.home.livros);
  const { livro } = useParams();
  const BookIndex = Number(livro);
  const selectedBook = data[BookIndex];
  const [ShowSinopse, setShowSinopse] = useState(false);

  return (
    <>
      {ShowSinopse && (
        <SinopsePage
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
          <Emprestar>
            {" "}
            <button>Emprestar</button>
          </Emprestar>
        </StatusBox>
      </Component>
    </>
  );
}
