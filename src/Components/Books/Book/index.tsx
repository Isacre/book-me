import { Books, Title, Author, Cover, Block } from "./styles";
import { Livro } from "../../../store/home";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

type LivroDisponivelProps = {
  livro: Livro;
  index: number;
  Available: boolean;
};

export default function LivroDisponivel(props: LivroDisponivelProps) {
  const { livro, index, Available } = props;

  return (
    <>
      {Available ? (
        <>
          <Books>
            <Link to={`info/${index}`}>
              <Cover src={livro.capa} />
              <Block>
                <div>
                  <Title>{livro.nome}</Title>
                  <Author>{livro.autor}</Author>
                  <Outlet />
                </div>
              </Block>
            </Link>
          </Books>
        </>
      ) : (
        <>
          <Books>
            <Link to={`emprestado/${index}`}>
              <Cover src={livro.capa} />
              <Block>
                <div>
                  <Title>{livro.nome}</Title>
                  <Author>{livro.autor}</Author>
                  <Outlet />
                </div>
              </Block>
            </Link>
          </Books>
        </>
      )}
    </>
  );
}