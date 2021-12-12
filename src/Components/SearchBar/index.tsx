import { Component, Filters } from "./styles";
import lupa from "../../assets/Search.svg";

function SearchBar(props: any) {
  const filter = props.filter;
  const { setFilter, setOptionValue } = props;

  return (
    <Component>
      <img src={lupa} alt="lupa" />
      <input
        placeholder="Pesquisar por título"
        value={filter}
        onChange={(event) => setFilter(event?.target.value)}
      />
      <div>
        <Filters
          onChange={(event) => setOptionValue(event.target.value)}
          id="filters"
          name="filters"
        >
          <option value="Mais Recentes">Mais recentes</option>
          <option value="Ordem Alfabetica">Ordem Alfabetica</option>
        </Filters>
      </div>
    </Component>
  );
}

export default SearchBar;
