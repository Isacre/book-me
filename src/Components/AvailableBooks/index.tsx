import { Books } from "./styles";
import { useAppSelector } from "../../store/hooks";
import SearchBar from "../SearchBar";
import Book from "./Book";

export default function AvailableBooks() {
  const livros = useAppSelector((state) => state.home.livros);

  return (
    <>
      <SearchBar />
      <Books>
        {livros.map((livro, index) => (
          <Book key={livro.id} livro={livro} index={index} />
        ))}
      </Books>
    </>
  );
}
