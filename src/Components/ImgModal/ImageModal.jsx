import React from "react";
import { CloseButton, ModalContent, ModalImage, ModalOverlay } from "./style";

function ImageModal({ imageUrl, onClose }) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>✖</CloseButton>
        <ModalImage src={imageUrl} alt="Imagem ampliada" />
      </ModalContent>
    </ModalOverlay>
  );
}

export default ImageModal;
