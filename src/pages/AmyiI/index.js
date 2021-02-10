import React from "react";
import { GlobalStyles } from "../../styles/GlobalApp";
import { Container } from "./styles";
import { HeaderAmyi,FormAmyi } from "../../components";

export default function AmyiI() {
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
          />
      </Container>
    </>
  );
}
