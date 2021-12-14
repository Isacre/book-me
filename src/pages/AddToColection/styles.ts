import styled from "styled-components";

export const Component = styled.div`
  margin: auto;
  width: 80%;
  

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;

export const PageTitle = styled.h1`
  color: #730202;
  font-size: 54px;
  letter-spacing: 0.5px;
  line-height: 45px;
  width: 90%;
  margin: auto;
  margin-bottom: 5%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  @media (min-width: 1024px) {
    grid-row: 1;
  }
  h2 {
    color: #730202;
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 18px;
  }

  p {
    color: #730202;
    margin-top: 10px;
    font-size: 12px;
  }

  input {
    border: 1px solid #730202;
    border-radius: 5px;
    line-height: 25px;
    outline: none;
  }
  select {
    border: 1px solid #730202;
    border-radius: 5px;
    height: 25px;
    outline: none;
  }
  option {
    background-color: #730202;
    color: white;
  }

  @media (min-width: 1024px) {
    width: 100%;
  }
`;
export const SinopseBox = styled.textarea`
  height: 15vh;
  outline: none;
  border: 1px solid #730202;
  padding: 3px;
`;

export const ImageContainer = styled.div`
  width: 108px;
  height: 154px;
  margin: auto;
  margin-bottom: 15px;
  border-radius: 10px;
  background-color: #e0e0e0;
  border: 5px solid #730202;
  cursor: pointer;

  @media (min-width: 1024px) {
    width: calc(108px + 33%);
    height: calc(154px + 33%);
    margin-top: 30px;
  }
`;

export const Preview = styled.img`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: -98px;
  padding: 1px;
  border-radius: 6px;
  @media (min-width: 1024px) {
    margin-top: -195px;
  }
`;

export const Placeholderimg = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 45px;
  margin-left: 11px;

  @media (min-width: 1024px) {
    width: calc(50px + 16%);
    height: calc(50px + 18%);
    margin-top: 90px;
  }
`;

export const AddButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  justify-content: center;
`;
export const Adicionar = styled.button`
  width: 50%;
  border-radius: 5px;
  background-color: #c86b6b;
  color: white;
  font-weight: bold;
  border: none;
  padding: 8px 20px;
  margin-bottom: 35px;
  cursor: pointer;

  :hover {
    filter: saturate(150%);
  }
`;

export const UploadImage = styled.input`
  position: relative;
  width: 100%;
  opacity: 100%;
  border: none;
  outline: none;
  display: none;
`;

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const InsertImage = styled.input`
  border: 1px solid #730202;
  border-radius: 5px;
  line-height: 25px;
  outline: none;
  width: 50%;
`;
