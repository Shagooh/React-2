import Alert from "react-bootstrap/Alert";

function theAlert({variant, error, exito }) {
  return (
    <>
      <Alert className="bootstrap-alert" variant={variant}>{exito}{error}</Alert>
    </>
  );
}

export default theAlert;