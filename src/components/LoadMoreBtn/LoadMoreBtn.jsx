import Button from "../Button/Button"

const LoadMoreBtn = (onClick) => {
  const handleClick = (event) => {
    onClick(event);
  }
  return (
    <Button text={'Load more...'} onClick={(event) => handleClick(event)}/>
  )
}

export default LoadMoreBtn;