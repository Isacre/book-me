import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";
import SearchBar from "../SearchBar";
import LivroDisponivel from "./LivroDisponivel";

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
export default function AvailableBooks() {
  const data = useAppSelector((state) => state.home.livros);

  return (
    <>
      <SearchBar />
      <Livros>
        {data.map((livro, index) => (
          <LivroDisponivel livro={livro} index={index} />
        ))}
      </Livros>
    </>
  );
}