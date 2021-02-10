import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f7f3f7;

  #header-top {
      width: 100%;
      height: auto;
      padding: 5px;
      text-align: center;

    h1 {
      margin: 10px 20%;
    }
    span {
      margin: 10px;
      padding: 10px;
    }
  }
`;
export const Footer = styled.footer`
  width: 100%;
  height: 50px;
  padding: 10px;
  background-color: #424142;
`;
