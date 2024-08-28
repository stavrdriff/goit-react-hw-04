import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ text }) => { 
  return (
    <p className={styles.error}>{ text }</p>
  )
}

export default ErrorMessage;