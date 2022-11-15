import estilos from "./Detalles.module.css";

function Detalles() {
  const frecuencias = ["día", "semana", "mes", "año"];
  const iconos = ["🚴‍♀️", "⛹️‍♂️", "🏋️‍♂️", "🏄‍♀️", "🏌️‍♂️"];
  return (
    <div className="tarjeta">
      <form className="p-4">
        <label className="label">
          Describe tu meta
          <input placeholder="ej. 52 caminatas" className="input"></input>
        </label>
        <label className="label">
          ¿Con qué frecuencia deseas cumplir tu meta?
          <span>(ej. 1 vez a la semana)</span>
          <div className="flex mb-6">
            <input type="number" className="input mr-6"></input>
            <select className="input">
              {frecuencias.map((opcion) => (
                <option value={opcion}>{opcion}</option>
              ))}
            </select>
          </div>
        </label>
        <label className="label">
          ¿Cuantas veces deseas completar esta meta?
          <input type="number" className="input"></input>
        </label>
        <label className="label">
          ¿Tienes una fecha límite?
          <input type="date" className="input"></input>
        </label>
        <label className="label">
          ¿Cuantas veces haz completado ya esta meta?
          <input type="number" className="input"></input>
        </label>
        <label className="label">
          Escoge el ícono para la meta
          <div>
            <select className="input">
              {iconos.map((opcion) => (
                <option value={opcion}>{opcion}</option>
              ))}
            </select>
          </div>
        </label>
      </form>
      <div className={estilos.botones}>
        <button className="boton boton--negro">Crear</button>
        <button className="boton boton--gris">Cancelar</button>
      </div>
    </div>
  );
}

export default Detalles;
