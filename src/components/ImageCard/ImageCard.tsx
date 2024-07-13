import React from "react";
import styles from "./ImageCard.module.css";
import { ImageCardProps } from "../App/App.types";

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div className={styles.imageCard}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={styles.imageCardImage}
      />
    </div>
  );
};

export default ImageCard;
