import { createContext, useReducer } from "react";

const listaMock = [
  {
    id: "1",
    detalles: "Correr en 30 minutos",
    periodo: "día",
    eventos: 1,
    icono: "🏃",
    meta: 365,
    plazo: "2030-01-01",
    completado: 5,
  },
  {
    id: "2",
    detalles: "Leer libros",
    periodo: "año",
    eventos: 6,
    icono: "📚",
    meta: 12,
    plazo: "2025-03-19",
    completado: 0,
  },
  {
    id: "3",
    detalles: "Viajar a parques nacionales",
    periodo: "mes",
    eventos: 3,
    icono: "✈️",
    meta: 60,
    plazo: "2028-02-14",
    completado: 25,
  },
];

const estadoInicial = {
  orden: [],
  objetos: {},
};

function reductor(estado, accion) {
  // eslint-disable-next-line default-case
  switch (accion.tipo) {
    case "colocar": {
      const metas = accion.metas;
      const nuevoEstado = {
        orden: metas.map((meta) => meta.id),
        objetos: metas.reduce(
          (objeto, meta) => ({ ...objeto, [meta.id]: meta }),
          {}
        ),
      };
      return nuevoEstado;
    }
    case "crear": {
      const id = Math.random(); //accion.meta.id;
      const nuevoEstado = {
        orden: [...estado.orden, id],
        objetos: {
          ...estado.objetos,
          [id]: accion.meta,
        },
      };
      return nuevoEstado;
    }
  }
}

const metas = reductor(estadoInicial, { tipo: "colocar", metas: listaMock });

export const Contexto = createContext(null);

function Memoria({ children }) {
  const [estado, enviar] = useReducer(reductor, metas);
  return (
    <Contexto.Provider value={[estado, enviar]}>{children}</Contexto.Provider>
  );
}

export default Memoria;
