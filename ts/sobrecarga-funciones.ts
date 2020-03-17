interface Serie {
  titulo: string,
  temporadas: number
}

type customType = string | number | Serie;

function filtrar(datos: Array<string>): Array<string>;
function filtrar(datos: Array<number>): Array<number>;
function filtrar(datos: Array<Serie>): Array<Serie>;

function filtrar(datos: Array<customType>): Array<customType> {
  if (typeof(datos[0]) == 'string') {
    return ['asda'];
  } else if (typeof(datos[0]) == 'number') {
    return [1, 2];
  } else {
    return [{titulo: 'S1', temporadas: 2}];
  }
}
