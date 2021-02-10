import React from "react";
import { GlobalStyles } from "../../styles/GlobalApp";
import { Container } from "./styles";
import { HeaderAmyi } from "../../components";

export default function AmyiI() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <HeaderAmyi />
      </Container>
    </>
  );
}
