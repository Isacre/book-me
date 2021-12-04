import React from "react";
import styled from "styled-components";

const Livros = styled.div`
  margin: auto;
  margin-top: 20px;
`;
const Titulo = styled.h1`
  color: white;
  margin: auto;
  text-align: center;
  font-size: 12px;
  width: 90%;
  height: 28px;
  margin: auto;
  margin-top: 5px;
  line-height: 13px;
  font-weight: 700;
`;

const Autor = styled.p`
  text-align: right;
  color: white;
  margin-right: 10%;
  margin-top: 3%;
  font-size: 8px;
`;
const Capa = styled.img`
  width: 70px;
  height: 100px;
  border: 4px solid white;
  border-radius: 10px;
  margin-bottom: -55%;
  margin-left: 15px;
`;
const Bloco = styled.div`
  width: 100px;
  height: 100px;
  z-index: 1;
  background-color: #bf9d73;
  border-radius: 10px;
  vertical-align: top;
  div {
    padding-top: 55%;
  }
`;
export default function LivroDisponivel(props) {
  const livro = props.livro;
  return (
    <Livros>
      <Capa src={livro.capa} />
      <Bloco>
        <div>
          <Titulo>{livro.nome}</Titulo>
          <Autor>{livro.autor}</Autor>
        </div>
      </Bloco>
    </Livros>
  );
}
