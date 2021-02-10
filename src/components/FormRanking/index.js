import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px auto;

  #content-image {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 25pt;
      color: #6b6d6b;
    }
    img{
        width: 100%;
        height: auto;
    }
  }
  h4 {
    font-size: 16pt;
    font-weight: bold;
    margin: 10px;
  }
  label {
    width: 100%;
    font-size: 14pt;
    font-weight: 400;

    input {
        margin: 10px;
    }
  }
`;

export default function FormRanking({
  title,
  name,
  description,
  image,
  note,
  alt,
}) {
  return (
    <Container>
      <div id="content-image">
        <h1>{title}</h1>
        <img src={image} alt={alt} />
      </div>
      <h4>{name}</h4>
      <span>{description}</span>
      <h4>Nota: {note}</h4>
      <label>
        <input type="radio" />
        Quero esse perfume
      </label>
    </Container>
  );
}
