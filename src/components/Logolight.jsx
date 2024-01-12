import logoProservices from "../data/Headerlogo.js";

const Logolight = () => {
  return (
    <>
      {" "}
      <img
        className={`w-8 rounded-xl my-1 `}
        src={logoProservices[0].img}
        alt="Logo de imagen principal de bienvenida"
      />
      <img
        className="w-36 rounded-xl my-1"
        src={logoProservices[1].img}
        alt="Logo de imagen principal de bienvenida"
      />
    </>
  );
};
export default Logolight;
