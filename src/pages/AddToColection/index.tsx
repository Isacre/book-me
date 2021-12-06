import { useState } from "react";
import styled from "styled-components";
import Vector from "../../assets/Vector.svg";
import { useDispatch } from "react-redux";
import { AddBook } from "../../store/home";

const Component = styled.div`
  margin: auto;
  width: 80%;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;

const AddNewBook = styled.h1`
  color: #730202;
  font-size: 54px;
  letter-spacing: 0.5px;
  line-height: 45px;
  width: 90%;
  margin: auto;
  margin-bottom: 5%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  @media (min-width: 1024px) {
    grid-row: 1;
  }
  h2 {
    color: #730202;
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 18px;
  }

  p {
    color: #730202;
    margin-top: 10px;
    font-size: 12px;
  }

  input {
    border: 1px solid #730202;
    border-radius: 5px;
    line-height: 25px;
    outline: none;
  }
  select {
    border: 1px solid #730202;
    border-radius: 5px;
    height: 25px;
    outline: none;
  }
  option {
    background-color: #730202;
    color: white;
  }

  @media (min-width: 1024px) {
    width: 100%;
  }
`;
const Sinopse = styled.textarea`
  height: 15vh;
  outline: none;
  border: 1px solid #730202;
  padding: 3px;
`;

const ImageContainer = styled.div`
  width: 108px;
  height: 154px;
  margin: auto;
  margin-bottom: 15px;
  border-radius: 10px;
  background-color: #e0e0e0;
  border: 5px solid #730202;
  cursor: pointer;

  @media (min-width: 1024px) {
    padding: 25px;
    width: calc(216px + 10%);
    height: calc(308px + 8%);
    margin-top: 30px;
  }
`;

const Placeholderimg = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 45px;
  margin-left: 26px;

  @media (min-width: 1024px) {
    width: calc(50px + 18%);
    height: calc(50px + 18%);
    margin-top: 90px;
    margin-left: 55px;
  }
`;

const AddButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  justify-content: center;
`;
const Adicionar = styled.button`
  width: 50%;
  border-radius: 5px;
  background-color: #c86b6b;
  color: white;
  font-weight: bold;
  border: none;
  padding: 8px 20px;
  margin-bottom: 35px;
  cursor: pointer;

  :hover {
    filter: saturate(150%);
  }
`;

const UploadImage = styled.input`
  position: relative;
  width: 100%;
  opacity: 100%;
  border: none;
  outline: none;
  display: none;
`;

const Container = styled.div``;

export default function AddToColection() {
  const [Capa, setCapa] = useState<any>(null);
  const [Nome, setNome] = useState("A Sutil Arte de Ligar o F*da-Se");
  const [Autor, setAutor] = useState("Mark Manson");
  const dispatch = useDispatch();

  function Newbook() {
    const BookData = {
      nome: Nome,
      autor: Autor,
      capa: Capa,
    };
    dispatch(AddBook(BookData));
  }

  return (
    <>
      <AddNewBook>ADICIONAR LIVRO</AddNewBook>
      <Component>
        <Container>
          <label htmlFor="uploadcapa">
            <ImageContainer className="Image">
              <Placeholderimg src={Vector} />
              <UploadImage id="uploadcapa" />
              {Capa && <img src={Capa} alt="capa" />}
            </ImageContainer>
          </label>
        </Container>
        <InputContainer className="Inputs">
          <h2>Título *</h2>

          <input />
          <h2>Autor *</h2>
          <input />
          <h2>Gênero</h2>
          <select>
            <option>Não especificado</option>
            <option>Romance</option>
            <option>Ficção cientifica</option>
            <option>Literatura</option>
            <option>Outros</option>
          </select>
          <h2>Sinopse</h2>
          <Sinopse />
          <p>Informação obrigatória *</p>
          <AddButtonContainer>
            <Adicionar>Adicionar</Adicionar>
          </AddButtonContainer>
        </InputContainer>
      </Component>
    </>
  );
}
