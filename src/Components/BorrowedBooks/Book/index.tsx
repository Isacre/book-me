import { Books, Title, Author, Cover, Block } from "./styles";

export default function LivroEmprestado(props: { livro: any }) {
  const livro = props.livro;

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
