import React from "react";
import styles from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "../App/App.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => (
  <button className={styles.loadMoreBtn} onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreBtn;
