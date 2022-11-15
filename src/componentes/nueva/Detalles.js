function Detalles() {
  const frecuencias = ["día", "semana", "mes", "año"];
  const iconos = ["🚴‍♀️", "⛹️‍♂️", "🏋️‍♂️", "🏄‍♀️", "🏌️‍♂️"];
  return (
    <div>
      <form>
        <label>
          Describe tu meta
          <input placeholder="ej. 52 caminatas"></input>
        </label>
        <label>
          ¿Con qué frecuencia deseas cumplir tu meta?
          <span>(ej. 1 vez a la semana)</span>
          <div>
            <input type="number"></input>
            <select>
              {frecuencias.map((opcion) => (
                <opcion value={opcion}>{opcion}</opcion>
              ))}
            </select>
          </div>
        </label>
        <label>
          ¿Cuantas veces deseas completar esta meta?
          <input type="number"></input>
        </label>
        <label>
          ¿Tienes una fecha límite?
          <input type="date"></input>
        </label>
        <label>
          ¿Cuantas veces haz completado ya esta meta?
          <input type="number"></input>
        </label>
        <label>
          Escoge el ícono para la meta
          <select>
            {iconos.map((opcion) => (
              <option value={opcion}>{opcion}</option>
            ))}
          </select>
        </label>
      </form>
      <div>
        <button>Crear</button>
        <button>Cancelar</button>
      </div>
    </div>
  );
}

export default Detalles;
