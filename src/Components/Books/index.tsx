import { BooksComponent, DidintFindbooks, NoBookDiv } from "./styles";
import { useAppSelector } from "../../store/hooks";
import Book from "./Book";
import NotFound from "../../assets/Notfound.svg";

export default function Books(props: any) {
  const AvailableBooksSelector = props.AvailableBooksSelector;
  const searchValue = props.searchValue;

  // Dados brutos e filtrados dos livros disponíveis;
  const livros = useAppSelector((state) => state.home.livros);
  const FilteredAvailableBooks = livros.filter((filtro) =>
    filtro.nome.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Dados brutos e filtrados dos livros emprestados;
  const livrosemprestados = useAppSelector((state) => state.home.emprestados);
  const FilteredLentBooks = livrosemprestados.filter((filtro) =>
    filtro.nome.toLowerCase().includes(searchValue.toLowerCase())
  );
  const optionValue = props.optionValue;

  //Funções de filtro dos livros
  const sort =
    optionValue !== "Mais Recentes" &&
    FilteredAvailableBooks.sort(function (a, b) {
      if (a.nome.toLowerCase() < b.nome.toLowerCase()) return -1;
      if (a.nome.toLowerCase() > b.nome.toLowerCase()) return 1;
      return 0;
    });

  const sortLent =
    optionValue !== "Mais Recentes" &&
    FilteredLentBooks.sort(function (a, b) {
      if (a.nome.toLowerCase() < b.nome.toLowerCase()) return -1;
      if (a.nome.toLowerCase() > b.nome.toLowerCase()) return 1;
      return 0;
    });
  console.log(sortLent);
  console.log(sort);

  return (
    <>
      {AvailableBooksSelector ? (
        <>
          {FilteredAvailableBooks.length === 0 && (
            <NoBookDiv>
              <DidintFindbooks src={NotFound} />
              <h1>Não encontramos nada</h1>
            </NoBookDiv>
          )}
          <BooksComponent>
            {FilteredAvailableBooks.map((livro, index) => (
              <Book
                key={livro.id}
                livro={livro}
                index={index}
                Available={AvailableBooksSelector}
              />
            ))}
          </BooksComponent>
        </>
      ) : (
        <>
          {FilteredLentBooks.length === 0 && (
            <NoBookDiv>
              <DidintFindbooks src={NotFound} />
              <h1>Não encontramos nada</h1>
            </NoBookDiv>
          )}
          <BooksComponent>
            {FilteredLentBooks.map((livro, index) => (
              <Book
                key={livro.id}
                livro={livro}
                index={index}
                Available={AvailableBooksSelector}
              />
            ))}
          </BooksComponent>
        </>
      )}
    </>
  );
}
