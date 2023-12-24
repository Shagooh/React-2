import Form from "./Form";
import SocialButton from "./SocialButton";
import Alert from "./Alert";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'


const Register = ({error, setError, exito, setExito}) => {
  return (
    
    <div className="container">
      <h1 className="title">Crea una cuenta</h1>
      <div className="icons">
      <SocialButton 
        icon1={<FontAwesomeIcon icon={faLinkedin} />}
        icon2={<FontAwesomeIcon icon={faFacebook} />} 
        icon3={<FontAwesomeIcon icon={faGithub} />}
        />
      </div>
      <p className="para">O usa tu email para registrarte</p>
      <Form
        error={error}
        setError={setError}
        exito={exito}
        setExito={setExito}
      ></Form>
      {error ? <Alert variant="danger" error={error}></Alert> : ""} 
      {exito ? <Alert variant="success" exito={exito}></Alert> : null}
    </div>
  );
};

export default Register;