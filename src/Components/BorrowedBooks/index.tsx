import { Books } from "./styles";
import { useAppSelector } from "../../store/hooks";
import SearchBar from "../SearchBar";
import Book from "./Book";

export default function BorrowedBooks() {
  const livros = useAppSelector((state) => state.home.emprestados);

  return (
    <>
      <SearchBar />
      <Books>
        {livros.map((livro) => (
          <Book key={livro.nome} livro={livro} />
        ))}
      </Books>
    </>
  );
}
