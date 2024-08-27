import Button from "../Button/Button";
import styles from "./SearchBar.module.css"

const SearchBar = ({ onSubmit }) => { 
  const handleSubmit = (event) => {
    event.preventDefault();
    const { request } = event.target.elements;

    onSubmit(request.value);
  }
  return (
    <>
      <header className={styles.header}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type={'text'}
            autoComplete={'off'}
            autoFocus
            placeholder={'Search images and photos'}
            name={'request'}
          />
          <Button type={'submit'} text={'Search'} search={true} />
        </form>
      </header>
    </>
  )
}

export default SearchBar;