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

export default function Home() {
  const [Available, setAvailable] = useState(true);

  return (
    <Component>
      <Content>
        <YourBooks>SEUS LIVROS</YourBooks>
        <Selector>
          <div>
            <AvailableBook
              Available={Available}
              onClick={() => setAvailable(true)}
            >
              Disponíveis
            </AvailableBook>
            <BorrowedBook
              onClick={() => setAvailable(false)}
              Available={Available}
            >
              Emprestados
            </BorrowedBook>
          </div>
        </Selector>

        <Books Available={Available} />
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
