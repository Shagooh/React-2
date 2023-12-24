import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Register from "./components/Register";
import { useState } from "react";

export default function App() {

  const [error, setError] = useState("");
  const [exito, setExito] = useState("");
  return (

    <>
      <Register
        error={error}
        exito={exito}
        setError={setError}
        setExito={setExito}
      ></Register>

    </>
  );
}
