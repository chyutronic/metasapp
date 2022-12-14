import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Contexto } from "../../servicios/Memoria";
import estilos from "./Detalles.module.css";

function Detalles() {
  const [form, setForm] = useState({
    detalles: "",
    eventos: 1,
    periodo: "semana",
    icono: "ðï¸ââï¸",
    meta: 52,
    plazo: "2030-01-01",
    completado: 0,
  });

  const [estado, enviar] = useContext(Contexto);

  const { detalles, eventos, periodo, icono, meta, plazo, completado } = form;

  const onChange = (event, prop) => {
    setForm((estado) => ({ ...estado, [prop]: event.target.value }));
  };

  useEffect(() => {
    // console.log(form);
  }, [form]);

  const navegar = useNavigate();

  const crear = async () => {
    // console.log(form);
    enviar({ tipo: "crear", meta: form });
    navegar("/lista");
  };

  const frecuencias = ["dÃ­a", "semana", "mes", "aÃ±o"];
  const iconos = ["ð´ââï¸", "â¹ï¸ââï¸", "ðï¸ââï¸", "ðââï¸", "ðï¸ââï¸"];
  return (
    <div className="tarjeta">
      <form className="p-4">
        <label className="label">
          Describe tu meta
          <input
            placeholder="ej. 52 caminatas"
            className="input"
            value={detalles}
            onChange={(e) => onChange(e, "detalles")}
          ></input>
        </label>
        <label className="label">
          Â¿Con quÃ© frecuencia deseas cumplir tu meta?
          <span>(ej. 1 vez a la semana)</span>
          <div className="flex mb-6">
            <input
              type="number"
              className="input mr-6"
              value={eventos}
              onChange={(e) => onChange(e, "eventos")}
            ></input>
            <select
              className="input"
              value={periodo}
              onChange={(e) => onChange(e, "periodo")}
            >
              {frecuencias.map((opcion) => (
                <option value={opcion}>{opcion}</option>
              ))}
            </select>
          </div>
        </label>
        <label className="label">
          Â¿Cuantas veces deseas completar esta meta?
          <input
            type="number"
            className="input"
            value={meta}
            onChange={(e) => onChange(e, "meta")}
          ></input>
        </label>
        <label className="label">
          Â¿Tienes una fecha lÃ­mite?
          <input
            type="date"
            className="input"
            value={plazo}
            onChange={(e) => onChange(e, "plazo")}
          ></input>
        </label>
        <label className="label">
          Â¿Cuantas veces haz completado ya esta meta?
          <input
            type="number"
            className="input"
            value={completado}
            onChange={(e) => onChange(e, "completado")}
          ></input>
        </label>
        <label className="label">
          Escoge el Ã­cono para la meta
          <div>
            <select
              className="input"
              value={icono}
              onChange={(e) => onChange(e, "icono")}
            >
              {iconos.map((opcion) => (
                <option value={opcion}>{opcion}</option>
              ))}
            </select>
          </div>
        </label>
      </form>
      <div className={estilos.botones}>
        <button className="boton boton--negro" onClick={crear}>
          Crear
        </button>
        <button className="boton boton--gris">Cancelar</button>
      </div>
    </div>
  );
}

export default Detalles;
