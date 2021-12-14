import styled from "styled-components";

export type Props = {
  AvailableBooksSelector?: Boolean;
    setNome?: String;
    setAutor?: String;
    setCapa?: String;
  };
  
export const Component = styled.div`
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

export const LentOrAvailableSelector = styled.div`
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

export const AvailableBooksButton = styled.button<Props>`
  color: ${(props) =>
    props.AvailableBooksSelector ? "rgba(115,2,2,1)" : "rgba(115,2,2,0.25)"};
  background-color: ${(props) =>
    props.AvailableBooksSelector ? "rgba(146, 42, 42, 0.2);" : "transparent"};
  padding: 5px 15px;
  border-radius: 25px;
  font-size: 12px;
  transition: 0.5s;
`;
export const LentBooksButton = styled.button<Props>`
  color: ${(props) =>
    props.AvailableBooksSelector ? "rgba(115,2,2,0.25)" : "rgba(115,2,2,1)"};
  background-color: ${(props) =>
    props.AvailableBooksSelector ? "transparent" : "rgba(146, 42, 42, 0.2);"};
  padding: 5px 15px;
  border-radius: 25px;
  font-size: 12px;
  transition: 0.5s;
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