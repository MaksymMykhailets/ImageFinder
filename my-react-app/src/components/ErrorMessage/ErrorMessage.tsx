import React from "react";
import styles from "./ErrorMessage.module.css";
import { ErrorMessageProps } from "../App/App.types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className={styles.errorMessage}>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
