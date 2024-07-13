import React from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";
import { ImageModalProps } from "../App/App.types";

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
      contentLabel="Image Modal"
    >
      {image && (
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={styles.modalImage}
          onClick={onClose}
        />
      )}
    </Modal>
  );
};

export default ImageModal;
