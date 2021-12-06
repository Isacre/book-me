import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";
import SearchBar from "../SearchBar";
import LivroEmprestado from "./LivroEmprestado";
const Livros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  margin: auto;
  margin-bottom: 30px;
  @media (max-width: 320px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export default function BorrowedBooks() {
  const data = useAppSelector((state) => state.home.emprestados);
  console.log(data);
  return (
    <>
      <SearchBar />
      <Livros>
        {data.map((livro) => (
          <LivroEmprestado livro={livro} />
        ))}
      </Livros>
    </>
  );
}
