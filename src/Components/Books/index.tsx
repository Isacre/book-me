import { BooksComponent, DidintFoundbooks, NoBookDiv } from "./styles";
import { useAppSelector } from "../../store/hooks";
import Book from "./Book";
import NotFound from "../../assets/Notfound.svg";

export default function Books(props: any) {
  const Available = props.Available;
  const searchValue = props.searchValue;

  const livros = useAppSelector((state) => state.home.livros);
  const FilteredAvailableBooks = livros.filter((filtro) =>
    filtro.nome.toLowerCase().includes(searchValue.toLowerCase())
  );

  const livrosemprestados = useAppSelector((state) => state.home.emprestados);
  const FilteredLentBooks = livrosemprestados.filter((filtro) =>
    filtro.nome.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      {Available ? (
        <>
          {FilteredAvailableBooks.length === 0 && (
            <NoBookDiv>
              <DidintFoundbooks src={NotFound} />
              <h1>Não encontramos nada</h1>
            </NoBookDiv>
          )}
          <BooksComponent>
            {FilteredAvailableBooks.map((livro, index) => (
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
          {FilteredLentBooks.length === 0 && (
            <NoBookDiv>
              <DidintFoundbooks src={NotFound} />
              <h1>Não encontramos nada</h1>
            </NoBookDiv>
          )}
          <BooksComponent>
            {FilteredLentBooks.map((livro, index) => (
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
