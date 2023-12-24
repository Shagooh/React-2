import Button from 'react-bootstrap/Button';

const socialButton = ({icon1,icon2,icon3}) => {

  return (
    <>
        <Button className="icon" variant="light">{icon1}</Button>
        <Button className="icon" variant="light">{icon2}</Button>
        <Button className="icon" variant="light">{icon3}</Button>
      </>
    );
  };
  
  export default socialButton;