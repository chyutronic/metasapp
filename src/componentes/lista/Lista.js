import Meta from "./Meta";

const listaMock = [{
    "id": "1",
    "detalles": "Correr en 30 minutos",
    "periodo": "día",
    "eventos": 1,
    "icono": "🏃",
    "meta": 365,
    "plazo": "2030-01-01",
    "completado": 5
},
{
    "id": "2",
    "detalles": "Leer libros",
    "periodo": "año",
    "eventos": 6,
    "icono": "📚",
    "meta": 12,
    "plazo": "2025-03-19",
    "completado": 0
},
{
    "id": "3",
    "detalles": "Viajar a parques nacionales",
    "periodo": "mes",
    "eventos": 3,
    "icono": "✈️",
    "meta": 60,
    "plazo": "2028-02-14",
    "completado": 25
}];


function Lista() {
    return (
        listaMock.map(meta => <Meta {...meta}></Meta>)
      );
}

export default Lista;

