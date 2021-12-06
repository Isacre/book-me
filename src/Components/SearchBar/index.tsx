import styled from "styled-components";
import lupa from "../../assets/Search.svg";

const Component = styled.div`
  display: flex;
  width: 95%;
  margin: auto;
  img {
    margin-right: 10px;
  }
  input {
    border: none;
    border-bottom: 1px solid #730202;
    width: 100%;
    outline: none;
    color: #730202;

    ::placeholder {
      color: #730202;
      padding-left: 15px;
      font-style: italic;
      font-weight: 400;
      line-height: 25px;
    }
  }
`;

const Filters = styled.select`
  border: none;
  background-color: transparent;
  color: #730202;

  option {
    background-color: #730202;
    color: #fff;
  }
`;

function SearchBar() {
  return (
    <Component>
      <img src={lupa} alt="lupa" />
      <input placeholder="Pesquisar por título" />
      <div>
        <Filters id="filters" name="filters">
          <option value="mais recentes">Mais recentes</option>
          <option value="mais recentes">Ordem Alfabetica</option>
        </Filters>
      </div>
    </Component>
  );
}

export default SearchBar;
