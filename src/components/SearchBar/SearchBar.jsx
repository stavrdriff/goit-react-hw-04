import Button from "../Button/Button";
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
          <Button type={'submit'} text={'Search'} search={true} onClick={(e) => { e.preventDefault}} />
        </form>
        <Toaster />
      </header>
    </>
  )
}

export default SearchBar;