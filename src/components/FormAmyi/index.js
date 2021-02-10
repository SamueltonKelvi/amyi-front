import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin: 10px 35%;
    text-align: center;
  }
  h4 {
    margin: 5px 0px;
  }
  ol {
    margin: 10px 15%auto;
    font-size: 12pt;
    text-align: center;

    li {
      text-align: left;
      margin: auto 20px;
    }
    label {
      margin: 10px;
      font-size: 10pt;
    }
    #colors {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin: 20px auto;

      label {
        font-size: 10px;
        z-index: 5;
        position: relative;
      }
      .btns {
        padding: 5px;
        border: none;
        elevation: 5;
        width: 60px;
        height: 60px;
        margin: 10px;
        z-index: 0;
      }
    }
    #others-colors {
      margin: 30px auto;

      input {
        width: 80%auto;
        margin-top: 10px;
        padding: 10px;
        border: none;
        border-bottom: 1px solid #000;
        text-align: center;
        vertical-align: middle;
      }
    }
    #quest {
      margin-top: 50px;
      margin-bottom: 20px;
    }
    .slider {
      margin: 10px;
    }
    .slider {
      -webkit-appearance: none;
      width: 70%;
      height: 4px;
      background: #d3d3d3;
      outline: none;
      opacity: 0.7;
      -webkit-transition: 0.2s;
      transition: opacity 0.2s;
    }
    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 13px;
      cursor: pointer;
      background-color: #424142;
    }
  }
  #progress {
    background-color: #848684;
    padding: 10px;
    border: none;
    color: #ffffff;
    font-size: 10pt;
    margin: 10px auto;
  }
  #send-button {
    background-color: #424142;
    padding: 10px;
    border: none;
    color: #ffffff;
    font-size: 10pt;
    margin: 20px auto 50px auto;
  }
  footer {
    padding: 10px;
    width: 100%;
    height: 50px;
    background-color: #424142;
  }
`;

// import IconSelect from '../../assets/checkmark.svg';

export default function FormAmyi({ title, questionOne, questionTwo, label }) {
  const [value, setValue] = React.useState("");
  const [slider, setSlider] = React.useState("0");
  const [select, setSelect] = React.useState(false);

  const handleEvent = () => {
    console.log(`Dado aqui ${value}`);
  };

  return (
    <Container>
      <h2>{title}</h2>
      <h4>Como você sentiu esse perfume?</h4>
      <ol>
        <li>{questionOne}</li>
        <label>{label}</label>
        <div id="colors">
          <label>
            <input
              name="brown"
              value={value}
              onChange={(brown) => setValue(brown.target.value)}
              type="checkbox"
              className="btns"
              onClick={handleEvent}
              style={{ backgroundColor: "#6B5D42" }}
            />
            marrom
          </label>
          <label>
            <input
              name="red"
              value="red"
              type="checkbox"
              className="btns"
              onClick={handleEvent}
              style={{ backgroundColor: "#D66163" }}
            />
            vermelho
          </label>
          <label>
            <input
              name="orange"
              value="orange"
              type="checkbox"
              className="btns"
              style={{ backgroundColor: "#FFA652" }}
            />
            laranja
          </label>

          <label>
            <input
              name="yellow"
              value="yellow"
              type="checkbox"
              className="btns"
              style={{ backgroundColor: "#FFF35A" }}
            />
            amarelo
          </label>

          <label>
            <input
              name="green"
              value="green"
              type="checkbox"
              className="btns"
              style={{ backgroundColor: "#94DF8C" }}
            />
            verde
          </label>

          <label>
            <input
              name="blue"
              value="blue"
              type="checkbox"
              className="btns"
              style={{ backgroundColor: "#84BACE" }}
            />
            azul
          </label>

          <label>
            <input
              name="purple"
              value="purple"
              type="checkbox"
              className="btns"
              style={{ backgroundColor: "#BD8ACE" }}
            />
            roxo
          </label>

          <label>
            <input
              name="pink"
              value="pink"
              type="checkbox"
              className="btns"
              style={{ backgroundColor: "#FF82AD" }}
            />
            rosa
          </label>

          <label>
            <input
              name="beige"
              value="beige"
              type="checkbox"
              className="btns"
              style={{ backgroundColor: "#E6D7BD" }}
            />
            bege
          </label>

          <label>
            <input
              name="grey"
              value="grey"
              type="checkbox"
              className="btns"
              style={{ backgroundColor: "#C5C6C5" }}
            />
            cinza
          </label>

          <label>
            <input
              name="black"
              value="black"
              type="checkbox"
              className="btns"
              style={{ backgroundColor: "#000000" }}
            />
            preto
          </label>

          <label>
            <input
              name="white"
              value="white"
              type="checkbox"
              className="btns"
              style={{ backgroundColor: "#FFFFFF" }}
            />
            branco
          </label>
        </div>
        <div id="others-colors">
          pensei em uma cor diferente
          <input placeholder="descrição" type="text" />
        </div>
        <button id="progress">SALVAR PROGRESSO</button>
        <div id="quest">
          <li>{questionTwo}</li>
          <label>Arraste para selecionar sua nota</label>
          <h2>{slider}</h2>
          <input
            type="range"
            min="0"
            max="10"
            value={slider}
            className="slider"
            onChange={(number) => setSlider(number.target.value)}
          />
        </div>
      </ol>
      <button id="send-button">ENVIAR RESPOSTAS</button>
      <footer />
    </Container>
  );
}
