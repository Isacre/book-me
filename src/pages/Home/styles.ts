import styled from "styled-components";

export type Props = {
    Available?: Boolean;
    setNome?: String;
    setAutor?: String;
    setCapa?: String;
  };
  
export const Component = styled.div`
  width: 100%;
`;
export const Content = styled.div`
  width: 90%;
  margin: auto;
`;
export const YourBooks = styled.h1`
  color: #730202;
  font-size: 54px;
  width: 50%;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
  line-height: 55px;
`;

export const Selector = styled.div`
  width: 70%;
  margin: auto;

  margin-bottom: 50px;
  div {
    display: flex;
    margin: auto;
    justify-content: space-between;
  }
  button {
    margin: auto;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 15px;
  }
`;

export const AvailableBook = styled.button<Props>`
  color: ${(props) =>
    props.Available ? "rgba(115,2,2,1)" : "rgba(115,2,2,0.25)"};
  background-color: ${(props) =>
    props.Available ? "rgba(146, 42, 42, 0.2);" : "transparent"};
  padding: 5px 15px;
  border-radius: 25px;
  font-size: 12px;
`;
export const BorrowedBook = styled.button<Props>`
  color: ${(props) =>
    props.Available ? "rgba(115,2,2,0.25)" : "rgba(115,2,2,1)"};
  background-color: ${(props) =>
    props.Available ? "transparent" : "rgba(146, 42, 42, 0.2);"};
  padding: 5px 15px;
  border-radius: 25px;
  font-size: 12px;
`;

export const NewBookButton = styled.button`
  background-color: #730202;
  border: none;
  border-radius: 35px;
  color: white;
  font-size: 35px;
  color: rgba(226, 198, 198, 1);
  padding: 3px 8px;
  padding-top: 8px;
  cursor: pointer;

  :hover{
    filter: brightness(110%)
  }
`;

export const BUTTONDIV = styled.div`
  position: fixed;
  left: 80vw;
  top: 90vh;
  
`;