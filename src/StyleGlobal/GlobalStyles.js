import styled, { createGlobalStyle } from "styled-components";

//Estilos Globais

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Righteous", sans-serif;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom right, #1e90ff, #f1c40f); /* Azul e Amarelo */
  color: white;
}
`;

export const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #f39c12; /* Amarelo Ouro */
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px #000; /* Sombras para destacar */
`;
