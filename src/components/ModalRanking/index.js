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
    margin: 20% auto;
    background-color: #ffffff;
    
    h4 {
      font-size: 12pt;
      margin: 10px auto;
      font-weight: normal;
    }
    h2 {
      font-size: 14pt;
      font-weight: bold;
      margin: auto 55px;
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

    @media(min-width: 500px){
      #content-modal{
        margin: 40% auto;
      }
    }
  }
`;

export default function ModalRanking({ onClinkModal }) {
  return (
    <Container>
      <div id="content-modal">
        <h4>Dados salvos com sucesso!</h4>
        <div id="btn">
          <button className="btn-next" onClick={onClinkModal}>
            OK
          </button>
        </div>
      </div>
    </Container>
  );
}
