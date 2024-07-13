import React from "react";
import { ThreeDots } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader: React.FC = () => (
  <div className={styles.loaderContainer}>
    <ThreeDots color="gray" height={30} width={30} />
  </div>
);

export default Loader;
