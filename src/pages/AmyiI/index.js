import React from "react";
import { GlobalStyles } from "../../styles/GlobalApp";
import { Container } from "./styles";
import { HeaderAmyi,FormAmyi } from "../../components";

export default function AmyiI() {
  const data = [
    { id: 1, value: "marrom", color: "#6B5D42"},
    { id: 2, value: "vermelho", color: "#D66163"},
    { id: 3, value: "laranja", color: "#FFA652"},
    { id: 4, value: "amarelo", color: "#FFF35A"},
    { id: 5, value: "verde", color: "#94DF8C"},
    { id: 6, value: "azul", color: "#84BACE"},
    { id: 7, value: "roxo", color: "#BD8ACE"},
    { id: 8, value: "rosa", color: "#FF82AD"},
    { id: 9, value: "bege", color: "#E6D7BD"},
    { id: 10, value: "cinza", color: "#C5C6C5"},
    { id: 11, value: "preto", color: "#000000"},
    { id: 12, value: "white", color: "#FFFFFF"}
  ]

  return (
    <>
      <GlobalStyles />
      <Container>
        <HeaderAmyi />
        <FormAmyi 
          title="Amyi I - por Sandra Casagrande"
          questionOne="Se esse perfume tivesse uma cor, qual ela sera?"
          questionTwo="De 0 a 10, que nota você daria para a conexão do perfume Amyi II com você"
          label="(selecione quantas cores você desejar)"
          data={data}
          />
      </Container>
    </>
  );
}
