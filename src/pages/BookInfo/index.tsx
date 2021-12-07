import styled from "styled-components";
import { useParams } from "react-router";
import { useAppSelector } from "../../store/hooks";

const Component = styled.div`
  width: 90%;
  margin: auto;
`;
const Capa = styled.img`
  width: 181px;
  height: 254px;
  border-radius: 10px;
  position: relative;
  z-index: -1;

  @media (min-width: 1100px) {
    width: 272px;
    height: 381px;
  }
`;
const InfoContainer = styled.div`
  background-color: rgba(237, 228, 216, 0.9);
  width: 234px;
  height: fit-content;
  padding: 15px;
  border-radius: 20px;
  float: right;
  margin-top: -35%;

  @media (max-width: 375px) {
    width: 204px;
  }
  @media (min-width: 461px) {
    width: calc(98% - 181px);
    height: 254px;
    margin-top: 0;
  }
  @media (min-width: 1100px) {
    width: calc(98% - 272px);
    height: 381px;
    margin-top: 0;
  }
`;
const Name = styled.p`
  font-size: 28px;
  color: #730202;
  line-height: 27px;
  font-weight: 700;
  margin: auto;
  margin-bottom: 5px;
  height: fit-content;
  width: 100%;
  @media (min-width: 474px) {
    height: 45%;
  }
  @media (min-width: 1100px) {
    font-size: calc(28px + 30%);
  }
`;
const Genre = styled.p`
  color: #be9c72;
  font-size: 12px;
  height: 28px;
  line-height: 27, 5px;
  font-weight: 700;

  @media (min-width: 1100px) {
    font-size: calc(12px + 30%);
  }
`;
const Author = styled.p`
  color: #be9c72;
  font-weight: 700;
  font-size: 20px;
  text-align: right;
  height: 28px;

  @media (min-width: 474px) {
    height: 25%;
  }
  @media (min-width: 1100px) {
    font-size: calc(20px + 30%);
  }
`;
const Sinopse = styled.div`
  text-align: center;

  button {
    color: #fff;
    background-color: #730202;
    padding: 7px 20px;
    border: none;
    outline: none;
    border-radius: 20px;
    width: 123px;
    height: 42px;
    font-size: 22px;
  }
`;

const StatusBox = styled.div`
  width: 100%;
  background-color: #efe7dd;
  padding: 15px;
  border-radius: 10px;
  margin-top: 130px;
  p {
    color: #be9c72;
    font-weight: 800;
    margin-bottom: 3%;
  }

  h1 {
    color: #730202;
    font-weight: 700;
    font-size: 28px;
  }

  @media (min-width: 461px) {
    margin-top: 20px;
  }
`;

const Emprestar = styled.div`
  margin-top: 5%;
  text-align: center;
  display: relative;

  button {
    color: #fff;
    background-color: #730202;
    padding: 8px 20px;
    border: none;
    outline: none;
    border-radius: 20px;
    width: 139px;
    height: 40px;
    font-size: 20px;
  }
`;

const FirstContainer = styled.div`
  width: 100%;
`;
export default function BookInfo() {
  const data = useAppSelector((state) => state.home.livros);
  const { livro } = useParams();
  const BookIndex = Number(livro);
  const selectedBook = data[BookIndex];

  return (
    <Component>
      <FirstContainer>
        <Capa src={selectedBook.capa} alt={selectedBook.nome} />

        <InfoContainer>
          <Genre>{selectedBook.categoria}</Genre>
          <Name>{selectedBook.nome}</Name>
          <Author>{selectedBook.autor}</Author>
          <Sinopse>
            <button>Sinopse</button>
          </Sinopse>
        </InfoContainer>
      </FirstContainer>
      <StatusBox>
        <p>Status</p>
        <h1>Atualmente este livro está em sua biblioteca</h1>
        <Emprestar>
          {" "}
          <button>Emprestar</button>
        </Emprestar>
      </StatusBox>
    </Component>
  );
}
