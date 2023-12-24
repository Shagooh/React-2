import { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const Form = ({ setError, setExito }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errores, setErrores] = useState(false);
  const validNombre = /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/;
  const validEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

  
  const validarFormulario = (submit) => {
    submit.preventDefault();
    if (nombre === ""){
        return setErrores("Ingrese su nombre")

    } else if (!validNombre.test(nombre)) {
        return setErrores("Formato de nombre invalido, ingrese solo letras");

    } else if (!validEmail.test(email) && email.length > 0) {
      return setErrores("Formato de correo inválido");

    } else if (password1.length > 1 && password1.length < 6) {
      return setErrores("La contraseña debe tener mínimo 6 caracteres");

    } else if (password1 !== password2) {
      return setErrores("Las contraseñas no coinciden");
    }
    setErrores("");

    if (
      nombre.length > 0 &&
      email.length > 0 &&
      password1.length > 0 &&
      password2.length > 0
    ) {
      setExito("¡Te has registrado con éxito!");
      setError("");

    } else {
      setError("¡Completa todos los campos!");
      setExito("");
    }
  };
  
  return (
    <form onSubmit={(e) => validarFormulario(e)}>
      <div>
        <input
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
          type="text"
          name="nombre"
          className="form-control"
          placeholder="Nombre"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          name="email"
          className="form-control"
          placeholder="name@domain.com"
        />
        <input
          onChange={(e) => setPassword1(e.target.value)}
          value={password1}
          type="password"
          name="password1"
          className="form-control"
          placeholder="Contraseña"
        />
        <input
          onChange={(e) => setPassword2(e.target.value)}
          value={password2}
          type="password"
          name="password2"
          className="form-control"
          placeholder="Repetir contraseña"
        />
      </div>

      <Button type="submit" className="btn-1" variant="dark">Registrarse</Button>

      {errores ? (<Alert className="alert alert_contraseña" variant="danger">{errores}{setExito("")}{setError("")}</Alert>) : null}
      
    </form>
  );
};

export default Form;