import React from "react";
import styled from "styled-components";
import ModalAmyi from "../ModalAmyi";

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

      #label-value {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 12px;
      }
      #image-check {
        width: 80%;
        height: auto;
        background-color: white;
      } 
      .btns {
        padding: 5px;
        border: none;
        elevation: 5;
        width: 60px;
        height: 60px;
        margin: 10px;
        cursor: pointer;
      }
    }
    #others-colors {
      display: flex;
      flex-direction: column;
      margin: 30px 40px;

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

export default function FormAmyi({
  title,
  questionOne,
  questionTwo,
  label,
  data,
  image,
  linkRouter,
  localCheck,
  localSave,
  localSlider,
  titleModal
}) {
  const [value, setValue] = React.useState("");
  const [slider, setSlider] = React.useState("0");
  const [description, setDescription] = React.useState("");
  const [modal, setModal] = React.useState(false);
  const [check, setCheck] = React.useState(false);

  const CheckBoxElement = (props) => {
    return (
      <div style={{ backgroundColor: props.color }}>
        <input
          value={props.value}
          onChange={(text) => setValue(text.target.value)}
          onClick={handleCheckBox}
          type="radio"
          checked={check}
          className="btns"
          style={{
            backgroundColor: props.color,
            position: "relative",
            zIndex: -1,
          }}
        />
      </div>
    );
  };

  const handleConvert = (e) => {
    return JSON.stringify(e);
  }

  const handleCheckBox = () => {
    if (value) {
      let getValue = handleConvert(value);
      localStorage.setItem(localCheck, getValue);
    }
  };

  const handleSaveProgress = () => {
    if (value === "") {
      alert("Selecione no mínimo uma das cores ou digite sua cor favorita");
    } else {
      setModal(false);
      let getDescription = handleConvert(description);
      localStorage.setItem(localSave, getDescription);
    }
  };

  const handleNextPage = () => {
    if (value === "") {
      alert("Selecione no mínimo uma das cores");
    } else {
      setModal(true);
    }
  };

  const handleClose = () => {
    setModal(false);
  };

  const handleNext = () => {
    let getData = handleConvert(slider);
    localStorage.setItem(localSlider, getData);
    setModal(false);
    window.location.href = linkRouter;
  };

  return (
    <Container>
      <h2>{title}</h2>
      <h4>Como você sentiu esse perfume?</h4>
      <ol>
        <li>{questionOne}</li>
        <label>{label}</label>
        <div id="colors">
          {data.map((item) => {
            return (
              <label id="label-value" key={item.id}>
                {item.value === value ?
                  <img src={image} id="image-check" alt="Icon Check"/>
                  :
                  <CheckBoxElement {...item} />
                }
                {item.value}
              </label>
            );
          })}
        </div>

        <div id="others-colors">
          pensei em uma cor diferente
          <input
            placeholder="descrição"
            type="text"
            value={description}
            onChange={(text) => setDescription(text.target.value)}
          />
        </div>
        <button id="progress" onClick={handleSaveProgress}>
          SALVAR PROGRESSO
        </button>
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
      {modal ? (
        <ModalAmyi
          title={titleModal}
          handleClose={handleClose}
          handleNext={handleNext}
        />
      ) : (
        <button id="send-button" onClick={handleNextPage}>
          ENVIAR RESPOSTAS
        </button>
      )}
      <footer />
    </Container>
  );
}
