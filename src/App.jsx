import React, { useState } from "react";
import ImageList from "./Components/ImgList/ImageList";
import ImageModal from "./Components/ImgModal/ImageModal";
import { Container, Title } from "./StyleGlobal/GlobalStyles";

const imageUrls = [
  "https://images5.alphacoders.com/134/1345309.jpeg",
  "https://images7.alphacoders.com/134/1345308.jpeg",
  "https://images5.alphacoders.com/134/1346850.png",
  "https://images7.alphacoders.com/132/1329456.jpeg",
  "https://images4.alphacoders.com/616/616945.png",
  "https://images2.alphacoders.com/516/516664.jpg",
  "https://images3.alphacoders.com/135/thumb-1920-1355326.jpeg",
  "https://images3.alphacoders.com/164/thumb-1920-164959.jpg",
  "https://images8.alphacoders.com/131/thumb-1920-1312288.jpeg",
  "https://images3.alphacoders.com/123/thumb-1920-123037.jpg",
];

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Função para abrir o modal e definir a imagem selecionada
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  //Função para fechar o modal
  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Title>Galeria de Imagens - One Piece</Title>
      <ImageList images={imageUrls} onImageClick={openModal} />
      {isModalOpen && (
        <ImageModal imageUrl={selectedImage} onClose={closeModal} />
      )}
    </Container>
  );
}

export default App;
