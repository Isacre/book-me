import styled from "styled-components";

export const Component = styled.div`
  width: 90%;
  margin: auto;

  @media (min-width: 1100px) {
    width: 70%;
    
  }

  @media (min-width: 1500px) {
    width: 50%;
    
  }
`;
export const Capa = styled.img`
  width: 117px;
  height: 165px;
  border-radius: 10px;
  border: 2px solid #FFF;

  @media (min-width: 1100px) {
    width: 272px;
    height: 381px;
  }
`;
export const InfoContainer = styled.div`

  padding: 15px;
  border-radius: 20px;
`;
export const Name = styled.p`
  font-size: 26px;
  color: #730202;
  line-height: 27px;
  font-weight: 700;
  margin: auto;
  margin-bottom: 5px;
  height: fit-content;
  width: 100%;
 /*  @media (min-width: 474px) {
    height: 45%;
  }
  @media (min-width: 1100px) {
    font-size: calc(28px + 30%);
  } */
`;
export const Genre = styled.p`
  color: #be9c72;
  font-size: 12px;
  height: 24px;
  line-height: 27, 5px;
  font-weight: 700;

  @media (min-width: 1100px) {
    font-size: calc(12px + 30%);
  }
`;
export const Author = styled.p`
  color: #be9c72;
  font-weight: 700;
  font-size: 18px;
  text-align: right;
  margin-top: 30%;
  
  

 /*  @media (min-width: 474px) {
    height: 25%;
  }
  @media (min-width: 1100px) {
    font-size: calc(20px + 30%);
  } */
`;
export const Sinopse = styled.div`
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
    cursor: pointer;

    @media (min-width: 1100px) {
      width: 50%;
    }
  }
`;

export const StatusBox = styled.div`
  width: 100%;
  background-color: #efe7dd;
  padding: 15px;
  border-radius: 10px;
  margin-top: 160px;
  p {
    color: #be9c72;
    font-weight: 800;
    margin-bottom: 2%;
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

export const Emprestar = styled.div`
  margin-top: 5%;
  text-align: center;
  display: relative;

  button {
    color: #fff;
    background-color:#C86B6B ;
    padding: 3px 20px;
    border: none;
    outline: none;
    border-radius: 5px;
    width: 139px;
    height: 40px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }
`;

