import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";
import LivroEmprestado from "./LivroEmprestado";
const Livros = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

export default function BorrowedBooks() {
  const data = useAppSelector((state) => state.home.emprestados);
  console.log(data);
  return (
    <Livros>
      {data.map((livro) => (
        <LivroEmprestado livro={livro} />
      ))}
    </Livros>
  );
}
