import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => (
  <div className={styles.errorMessage}>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
