import {
  Component,
  AddNewBook,
  InputContainer,
  SinopseBox,
  ImageContainer,
  Preview,
  Placeholderimg,
  AddButtonContainer,
  Adicionar,
  UploadImage,
  Container,
  InsertImage,
} from "./styles";
import { useState } from "react";
import Vector from "../../assets/Vector.svg";
import { useDispatch } from "react-redux";
import { AddBook } from "../../store/home";

export default function AddToColection() {
  const [Capa, setCapa] = useState("");
  const [Nome, setNome] = useState("");
  const [Autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [NewImage, setNewImage] = useState(false);
  const [Sinopse, setSinopse] = useState("");
  const dispatch = useDispatch();

  function Newbook() {
    const BookData = {
      nome: Nome,
      autor: Autor ? Autor : "Autor Desconhecido",
      capa: Capa
        ? Capa
        : "https://i.pinimg.com/236x/b4/9e/7a/b49e7a7298b855f8bf2cd3f5923ea7ab.jpg",
      categoria: genero ? genero : "Outros",
      sinopse: Sinopse ? Sinopse : "Sinopse não informada",
      id: `book-${Math.floor(Math.random() * 3214)}`,
      emprestado: "",
      em: "",
      ate: "",
      obs: "",
    };
    if (Nome) {
      dispatch(AddBook(BookData));
      window.alert("Livro adicionado a biblioteca");
    } else window.alert("Por favor, insira um nome");
  }

  return (
    <>
      <AddNewBook>ADICIONAR LIVRO</AddNewBook>
      <Component>
        <Container>
          <ImageContainer onClick={() => setNewImage(!NewImage)}>
            <Placeholderimg src={Vector} />
            <UploadImage />
            {Capa !==
              "https://i.pinimg.com/236x/b4/9e/7a/b49e7a7298b855f8bf2cd3f5923ea7ab.jpg" ||
              ("" && <Preview src={Capa} alt="capa" />)}
          </ImageContainer>
          {NewImage && (
            <InsertImage
              placeholder="Insira o link da capa aqui"
              value={Capa}
              onChange={(event) => setCapa(event.target.value)}
            ></InsertImage>
          )}
        </Container>
        <InputContainer className="Inputs">
          <h2>Título *</h2>
          <input onChange={(e) => setNome(e.target.value)} value={Nome} />
          <h2>Autor *</h2>
          <input onChange={(e) => setAutor(e.target.value)} value={Autor} />
          <h2>Gênero</h2>
          <input
            onChange={(event) => setGenero(event.target.value)}
            value={genero}
            list="generos"
          />
          <datalist id="generos">
            <option value="Não especificado">Não especificado</option>
            <option value="Romance">Romance</option>
            <option value="Drama">Drama</option>
            <option value="Poesia">Poesia</option>
            <option value="Conto">Conto</option>
            <option value="Ficção cientifica">Ficção cientifica</option>
            <option value="Literatura">Literatura</option>
            <option value="Outros">Outros</option>
          </datalist>

          <h2>Sinopse</h2>
          <SinopseBox
            onChange={(event) => setSinopse(event?.target.value)}
            value={Sinopse}
          />
          <p>Informação obrigatória *</p>
          <AddButtonContainer>
            <Adicionar onClick={Newbook}>Adicionar</Adicionar>
          </AddButtonContainer>
        </InputContainer>
      </Component>
    </>
  );
}
