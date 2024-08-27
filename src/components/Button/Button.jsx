import styles from './Button.module.css';
import { FaSearch } from "react-icons/fa";


const Button = ({ search, type, text }) => {
    return (
        <button
            className={search ? styles.button + ' ' + styles.search : styles.button}
            type={type}
        >
            {search &&
                <span className={styles.prepend}>
                    <FaSearch />
                </span>
            }
            {text &&
                <span className={styles.text}>
                    {text}
                </span>
            }
        </button>
    )
}

export default Button;
