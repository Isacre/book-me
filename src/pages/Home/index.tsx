import {
  Component,
  Content,
  YourBooks,
  Selector,
  AvailableBook,
  BorrowedBook,
  NewBookButton,
  BUTTONDIV,
} from "./styles";
import Books from "../../Components/Books/index";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import SearchBar from "../../Components/SearchBar";

export default function Home() {
  const [Available, setAvailable] = useState(true);
  const [Filter, setFilter] = useState("");
  const [optionValue, setoptionValue] = useState("Mais Recentes");

  return (
    <Component>
      <Content>
        <YourBooks>SEUS LIVROS</YourBooks>
        <Selector>
          <div>
            <AvailableBook
              Available={Available}
              onClick={() => {
                setAvailable(true);
                setFilter("");
              }}
            >
              Disponíveis
            </AvailableBook>
            <BorrowedBook
              onClick={() => {
                setAvailable(false);
                setFilter("");
              }}
              Available={Available}
            >
              Emprestados
            </BorrowedBook>
          </div>
        </Selector>
        <SearchBar
          filter={Filter}
          setFilter={setFilter}
          setOptionValue={setoptionValue}
        />
        <Books
          Available={Available}
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
      </Content>
    </Component>
  );
}
