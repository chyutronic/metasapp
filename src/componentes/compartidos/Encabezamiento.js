import estilos from "./Encabezado.module.css";
import { ReactComponent as LogoSVG } from "../../img/logo.svg";
import { ReactComponent as PerfilSVG } from "../../img/perfil.svg";
import Vinculo  from "./Vinculo";

function Encabezamiento() {
  return (
    <header className={estilos.encabezado}>
      <div className={estilos.contenedor}>
        <LogoSVG className={estilos.logo} />
        <a href="/" className={estilos.titulo}>
          Metas App
        </a>
      </div>
      <nav>
        <Vinculo href="/perfil" Icono={PerfilSVG}></Vinculo>
      </nav>
    </header>
  );
}

export default Encabezamiento;
