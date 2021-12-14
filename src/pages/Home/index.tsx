import {
  Component,
  YourBooks,
  LentOrAvailableSelector,
  AvailableBooksButton,
  LentBooksButton,
  NewBookButton,
  BUTTONDIV,
} from "./styles";
import Books from "../../Components/Books/index";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import SearchBar from "../../Components/SearchBar";

export default function Home() {
  const [AvailableBooksSelector, setAvailableBooksSelector] = useState(true);
  const [Filter, setFilter] = useState("");
  const [optionValue, setoptionValue] = useState("Mais Recentes");

  return (
    <Component>
      <YourBooks>SEUS LIVROS</YourBooks>
      <LentOrAvailableSelector>
        <div>
          <AvailableBooksButton
            AvailableBooksSelector={AvailableBooksSelector}
            onClick={() => {
              setAvailableBooksSelector(true);
              setFilter("");
            }}
          >
            Disponíveis
          </AvailableBooksButton>
          <LentBooksButton
            onClick={() => {
              setAvailableBooksSelector(false);
              setFilter("");
            }}
            AvailableBooksSelector={AvailableBooksSelector}
          >
            Emprestados
          </LentBooksButton>
        </div>
      </LentOrAvailableSelector>
      <SearchBar
        filter={Filter}
        setFilter={setFilter}
        setOptionValue={setoptionValue}
      />
      <Books
        AvailableBooksSelector={AvailableBooksSelector}
        searchValue={Filter}
        optionValue={optionValue}
      />
      <BUTTONDIV>
        <Link to="/adicionar">
          <NewBookButton>
            <GoPlus />
          </NewBookButton>
        </Link>
      </BUTTONDIV>
    </Component>
  );
}
