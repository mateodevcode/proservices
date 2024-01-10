import { useAuth } from "../context/useContext";

const Enlace = ({ nombre }) => {
  const { themma } = useAuth();

  return (
    <li
      className={`my-1.5 font-semibold cursor-pointer text-sm ${
        themma == "light" ? "hover:bg-slate-500" : "hover:bg-red-600"
      } w-44 rounded-md py-1 pl-2`}
    >
      {nombre}
    </li>
  );
};

export default Enlace;
