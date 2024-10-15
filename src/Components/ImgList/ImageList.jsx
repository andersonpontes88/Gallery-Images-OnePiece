import React from "react";
import { Grid, ImageItem } from "./style";

function ImageList({ images, onImageClick }) {
  return (
    <Grid>
      {images.map((image, index) => (
        <ImageItem
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          src={image}
          alt={`Imagem ${index + 1}`}
          onClick={() => onImageClick(image)}
        />
      ))}
    </Grid>
  );
}

export default ImageList;
