import styled from "styled-components";

export const HeaderBackground = styled.div`
  background-color: #730202;
  width: 100%;
  height: 12vh;
  margin-bottom: 20px;
  a {
    text-decoration: none;
  }
`;

export const HeaderContainer = styled.div`
  width: 90%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  display: flex;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 22px;
  gap: 15px;
  img {
    height: 40px;
  }
`;
export const UserInfo = styled.div`
  vertical-align: top;

  img {
    height: 20px;

    :first-child {
      margin-right: 20px;
    }
  }
`;