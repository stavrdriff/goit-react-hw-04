import styles from './Button.module.css';

const Button = ({ search, type, text, onClick }) => {

    const handleClick = (event) => { 
        onClick(event)
    }
    return (
        <button
            className={search ? styles.button + ' ' + styles.search : styles.button}
            type={type}
            onClick={(event) => {
                handleClick(event)
            }}
        >
            {text &&
                <span className={styles.text}>
                    {text}
                </span>
            }
        </button>
    )
}

export default Button;
