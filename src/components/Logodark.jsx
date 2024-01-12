import logoProservices from "../data/Headerlogo.js";

const Logodark = () => {
  return (
    <>
      {" "}
      <img
        className={`w-8 rounded-xl my-1 `}
        src={logoProservices[2].img}
        alt="Logo de imagen principal de bienvenida"
      />
      <img
        className="w-36 rounded-sm my-2 mx-1"
        src={logoProservices[3].img}
        alt="Logo de imagen principal de bienvenida"
      />
    </>
  );
};

export default Logodark;
