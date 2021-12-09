import styled from "styled-components";


export const BooksComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  margin: auto;
  margin-bottom: 30px; 

  
  @media (max-width: 320px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const DidintFoundbooks = styled.img`
height: 60vh;
width: 65vw;
`;

export const NoBookDiv = styled.div`
text-align: center;
`;