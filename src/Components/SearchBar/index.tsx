import { Component, Filters } from "./styles";
import lupa from "../../assets/Search.svg";

function SearchBar(props: any) {
  const filter = props.filter;
  const { setFilter } = props;

  return (
    <Component>
      <img src={lupa} alt="lupa" />
      <input
        placeholder="Pesquisar por título"
        value={filter}
        onChange={(event) => setFilter(event?.target.value)}
      />
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
