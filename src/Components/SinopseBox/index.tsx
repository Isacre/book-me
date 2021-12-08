import styled from "styled-components";

const Component = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.37);
  color: white;
  position: absolute;
  margin-top: -30px;
  cursor: pointer;

  @media (max-width: 605px) {
    height: 110%;
  }
`;

const Content = styled.div`
  width: 80%;
  padding: 15px;
  background: #efe7dd;
  border-radius: 15px;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  position: absolute;
  top: calc(50% - 15vh);
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 1100px) {
    width: 40%;
  }

  p {
    color: rgba(115, 2, 2, 1);
    line-height: 20px;
  }
`;

export default function SinopseBox(props: any) {
  const selectedBook = props.selectedBook;
  const { setShowSinopse } = props;
  return (
    <Component onClick={() => setShowSinopse(false)}>
      <Content>
        <p>{selectedBook.sinopse}</p>
      </Content>
    </Component>
  );
}
