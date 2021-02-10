import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 50% 10%;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 1px 1px 10px 1px #000000;
  padding: 10px;
  width: 310px;

  h4 {
    font-size: 12pt;
    margin: 10px auto;
    font-weight: normal;
  }
  h2 {
    font-size: 14pt;
    font-weight: bold;
    margin: auto 20%;
  }
  #sub-title {
    margin: 40px 20%;
    font-weight: normal;
  }
  #btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    button {
      width: 45%;
      border: 2px solid #424142;
      padding: 10px;
      background-color: #ffffff;
      font-weight: normal;
    }
    .btn-next {
      font-weight: normal;
      background-color: #424142;
      color: white;
    }
  }

  @media (min-width: 720px) {
    margin: 20% 20%;
    width: 60%;
  }
`;

export default function ModalAmyi({ title }) {
  const handleClose = () => {};

  const handleNext = () => {};

  return (
    <Container>
      <h4>Você escolheu o</h4>
      <h2>{title}</h2>
      <h4 id="sub-title">Você confirma a sua escolha?</h4>
      <div id="btn">
        <button onClick={handleClose}>NÃO</button>
        <button className="btn-next" onChange={handleNext}>
          SIM
        </button>
      </div>
    </Container>
  );
}
