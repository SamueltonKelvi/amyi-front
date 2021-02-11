import React from "react";
import { GlobalStyles } from "../../styles/GlobalApp";
import { Container } from "./styles";
import { HeaderAmyi,FormAmyi } from "../../components";

import AmyiIcon from '../../assets/checkmark.svg';

export default function AmyiII() {
  const data = [
    { id: 1, value: "marrom", color: "#6B5D42", checked: false },
    { id: 2, value: "vermelho", color: "#D66163", checked: false },
    { id: 3, value: "laranja", color: "#FFA652", checked: false },
    { id: 4, value: "amarelo", color: "#FFF35A", checked: false },
    { id: 5, value: "verde", color: "#94DF8C", checked: false },
    { id: 6, value: "azul", color: "#84BACE", checked: false },
    { id: 7, value: "roxo", color: "#BD8ACE", checked: false },
    { id: 8, value: "rosa", color: "#FF82AD", checked: false },
    { id: 9, value: "bege", color: "#E6D7BD", checked: false },
    { id: 10, value: "cinza", color: "#C5C6C5", checked: false },
    { id: 11, value: "preto", color: "#000000", checked: false },
    { id: 12, value: "white", color: "#FFFFFF", checked: false }
  ]

  return (
    <>
      <GlobalStyles />
      <Container>
        <HeaderAmyi />
        <FormAmyi 
          title="Amyi II - por Sandra Casagrande"
          questionOne="Se esse perfume tivesse uma cor, qual ela sera?"
          questionTwo="De 0 a 10, que nota você daria para a conexão do perfume Amyi II com você"
          label="(selecione quantas cores você desejar)"
          data={data}
          image={AmyiIcon}
          />
      </Container>
    </>
  );
}
