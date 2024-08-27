import Button from "../Button/Button";
import styles from "./SearchBar.module.css"
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => { 
  const handleSubmit = (event) => {
    event.preventDefault();

    const { request } = event.target.elements;

    onSubmit(request.value);
  }

  const notify = (value) => !value && toast('Are you seriously? \n Try to type something yet!', {icon: '👏'});


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
            onChange={(e) => {notify(e.target.value)}}
          />
          <Button type={'submit'} text={'Search'} search={true} onClick={onSubmit} />
        </form>
        <Toaster />
      </header>
    </>
  )
}

export default SearchBar;