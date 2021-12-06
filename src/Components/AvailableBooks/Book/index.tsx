import { Books, Title, Author, Cover, Block } from "./styles";
import { Livro } from "../../../store/home";

type LivroDisponivelProps = {
  livro: Livro;
  index: number;
};

export default function LivroDisponivel(props: LivroDisponivelProps) {
  const { livro } = props;

  return (
    <Books>
      <Cover src={livro.capa} />
      <Block>
        <div>
          <Title>{livro.nome}</Title>
          <Author>{livro.autor}</Author>
        </div>
      </Block>
    </Books>
  );
}
