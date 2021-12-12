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
export const InfoContainer = styled.div`
  background-color: rgba(237, 228, 216, 0.9);
  width: 234px;

  height: fit-content;
  min-height: 195px;
  padding: 15px;
  border-radius: 20px;
  float: right;
  margin-top: -25%;

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
export const Name = styled.p`
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
export const Genre = styled.p`
  color: #be9c72;
  font-size: 12px;
  height: 28px;
  line-height: 27, 5px;
  font-weight: 700;

  @media (min-width: 1100px) {
    font-size: calc(12px + 30%);
  }
`;
export const Author = styled.p`
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
  margin-top: 130px;
  margin-bottom: 10px;
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
 text-align: right;
 display: relative;
 margin-top: -20px;
 
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
    cursor: pointer;
   
  }
`;

export const FirstContainer = styled.div`
  width: 100%;
`;

export const IsWith = styled.h2`
margin-top: 10px;
color: #730202;
border: 2px solid #730202;
border-radius: 5px;
font-size: 20px;
padding: 5px;
`;

export const DaysAgo = styled.p`
margin-top: 20px;
`;