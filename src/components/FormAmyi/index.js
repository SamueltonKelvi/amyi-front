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
        font-size: 12px;
        z-index: 5;
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

export default function FormAmyi({
  title,
  questionOne,
  questionTwo,
  label,
  data
}) {
  const [value, setValue] = React.useState([]);
  const [slider, setSlider] = React.useState("0");
  const [description, setDescription] = React.useState("");
  const [modal, setModal] = React.useState(false);

  const CheckBoxElement = (props) => {
    return (
      <div style={{ backgroundColor: props.color }}>
        <input
          value={props.value}
          onChange={(text) => setValue(text.target.value)}
          type="checkbox"
          checked={props.checked}
          className="btns"
          style={
            props.checked === true
              ? { backgroundImage: props.image }
              : {
                  backgroundColor: props.color,
                  position: "relative",
                  zIndex: -1,
                }
          }
        />
      </div>
    );
  };

  const handleSaveProgress = () => {
    if (value.length === 0) {
      alert("Selecione as cores desejadas");
    } else {
      let getData = JSON.stringify(value);
      localStorage.setItem("amyi@web", getData);
    }
  };

  const handleNextPage = () => {
    setModal(true);
    handleNext();
  };

  React.useEffect(() => {
    if (!value) {
      localStorage.setItem("amyi@web", value);
    }
  }, []);

  const handleClose = () => {
    setModal(false);
  };

  const handleNext = () => {
    let getData = JSON.stringify(slider);
    localStorage.setItem("amyi@web", getData);
    setModal(false);
    window.location.href = "/amyii";
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
                <CheckBoxElement {...item} />
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
          title="Amyi I - Pimenta rosa, angelica, lactona, patchouli"
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
