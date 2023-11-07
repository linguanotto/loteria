import { Link } from "react-router-dom";
import { useLoteria } from "../../hooks";
import "./index.css";
 
export default function Menu() {
  const { ativo, setAtivo } = useLoteria();
  return (
    <div className="container">
      <Link
        to="/megasena"
        className={ativo === "megasena" ? "ativo" : "megasena"}
        onClick={() => setAtivo("megasena")}
      >
        {" "}
        Megasena
      </Link>
      <Link
        to="/quina"
        className={ativo === "quina" ? "ativo" : "quina"}
        onClick={() => setAtivo("quina")}
      >
        {" "}
        Quina
      </Link>
      <Link
        to="/lotofacil"
        className={ativo === "lotofacil" ? "ativo" : "lotofacil"}
        onClick={() => setAtivo("lotofacil")}
      >
        {" "}
        Lotofacil
      </Link>
    </div>
  );
}