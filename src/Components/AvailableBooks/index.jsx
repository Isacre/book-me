import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";
import LivroDisponivel from "./LivroDisponivel";

export default function AvailableBooks() {
  const data = useAppSelector((state) => state.home.livros);
  console.log(data);
  return (
    <div>
      {data.map((livro) => (
        <LivroDisponivel data={data} />
      ))}
    </div>
  );
}
