import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  #content-modal {
    display: flex;
    flex-direction: column;
    padding: 10px;
    text-align: center;
    width: 310px;
    height: auto;
    margin: 40% auto;
    background-color: #ffffff;
  }

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

export default function ModalAmyi({ title, handleClose, handleNext }) {
  return (
    <Container>
      <div id="content-modal">
        <h4>Você escolheu o</h4>
        <h2>{title}</h2>
        <h4 id="sub-title">Você confirma a sua escolha?</h4>
        <div id="btn">
          <button onClick={handleClose}>NÃO</button>
          <button className="btn-next" onChange={handleNext}>
            SIM
          </button>
        </div>
      </div>
    </Container>
  );
}
