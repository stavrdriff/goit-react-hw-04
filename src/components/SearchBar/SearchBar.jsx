import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css"
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => { 
  const notify = (value) => !value && toast('Are you seriously? \n Try to type something yet!', { icon: '👏' });
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const { request } = event.target.elements;
    notify(request.value);

    if (request.value === '') { 
      return;
    }

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
          <button type={'submit'} className={styles.button}>
            <span className={styles.icon} aria-hidden={'true'}><FaSearch/></span>
            <span className={styles.text}>Search</span>
          </button>
        </form>
        <Toaster />
      </header>
    </>
  )
}

export default SearchBar;