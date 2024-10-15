import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: center;
  gap: 20px;
  padding: 24px;
`;

export const ImageItem = styled.img`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 200px; /* Altura padrão para todas as imagens */
  object-fit: cover; // Faz com que a imagem se ajuste ao tamanho sem perder proporção
  cursor: pointer;
  border-radius: 10px;
  transition: transform 0.3s, opacity 0.3s;
  opacity: 0.5; /* Deixa a imagem escura inicialmente */

  &:hover {
    transform: scale(1.1); /* Aumenta levemente a imagem */
    opacity: 1; /* Mostra a imagem totalmente ao passar o mouse */
  }
`;
