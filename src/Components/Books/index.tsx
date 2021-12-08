import { BooksComponent } from "./styles";
import { useAppSelector } from "../../store/hooks";
import SearchBar from "../SearchBar";
import Book from "./Book";

export default function Books(props: any) {
  const Available = props.Available;
  const livros = useAppSelector((state) => state.home.livros);
  const livrosemprestados = useAppSelector((state) => state.home.emprestados);

  return (
    <>
      {Available ? (
        <>
          <SearchBar />
          <BooksComponent>
            {livros.map((livro, index) => (
              <Book
                key={livro.id}
                livro={livro}
                index={index}
                Available={Available}
              />
            ))}
          </BooksComponent>
        </>
      ) : (
        <>
          <SearchBar />
          <BooksComponent>
            {livrosemprestados.map((livro, index) => (
              <Book
                key={livro.id}
                livro={livro}
                index={index}
                Available={Available}
              />
            ))}
          </BooksComponent>
        </>
      )}
    </>
  );
}
