import styled from "styled-components";

const Livros = styled.div`
  margin: auto;
  margin-top: 30px;
  cursor: pointer;
`;
const Titulo = styled.h1`
  color: white;
  margin: auto;
  text-align: center;
  font-size: 12px;
  width: 90%;
  height: 28px;
  margin: auto;
  margin-top: 5px;
  line-height: 13px;
  font-weight: 700;

  @media(min-width: 900px) {
   font-size: calc(12px + 40%);
   line-height: calc(13px +  40%);
  }
  @media(min-width: 1100px) {
    margin-top: 15px;
    font-size: calc(12px + 60%);
   line-height: calc(13px +  60%);
  }
`;

const Autor = styled.p`
  text-align: right;
  color: white;
  margin-right: 10%;
  margin-top: 3%;
  font-size: 8px;
  width: 90%;

  @media(min-width: 900px) {
   font-size: calc(6px + 50%);
   margin-top: 12%;

  }
  @media(min-width: 1100px) {
    font-size: calc(8px + 60%);
    margin-top: 13%;
  }
`;

const Capa = styled.img`
  width: 70px;
  height: 100px;
  border: 4px solid white;
  border-radius: 10px;
  margin-bottom: -55%;
  margin-left: 15px;

  @media(min-width: 900px) {
    width: 105px;
    height: 150px;
    margin-left: 22px;
  }
  @media(min-width: 1100px) {
    width: 140px;
    height: 200px;
    margin-left: 55px;
  }
`;
const Bloco = styled.div`
  width: 100px;
  height: 100px;
  z-index: 1;
  background-color: #bf9d73;
  border-radius: 10px;
  vertical-align: top;
  div {
    padding-top: 55%;
  }

  @media(min-width: 900px){
width: 150px;
height: 150px;
  }

  @media(min-width: 1100px) {
    width: 200px;
    height: 200px;
    margin-left: 22px;
  }
`;

export default function LivroEmprestado(props: {livro: any}) {
  const livro = props.livro;

  return (
    <Livros>
      <Capa src={livro.capa} />
      <Bloco>
        <div>
          <Titulo>{livro.nome}</Titulo>
          <Autor>{livro.autor}</Autor>
        </div>
      </Bloco>
    </Livros>
  );
}
