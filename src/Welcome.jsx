import Alert from "react-bootstrap/Alert";

const Welcome = () => {
  return (
    <>
      {["primary"].map((variant) => (
        <Alert className="text-center" key={variant} variant={variant}>
          Questo è un {variant} alert—attenzione!
          <p className="text-center">Benvenuti</p>
        </Alert>
      ))}
    </>
  );
};

export default Welcome;
