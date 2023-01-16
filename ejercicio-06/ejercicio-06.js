
const compras = [
    "leche",
    "pan",
    "carne",
    "arroz",
    "haina",
    "jugo"
];
console.log(compras);

compras.push("aceita de girasol");
console.log(compras);

compras.pop();
console.log(compras);

const peliculas = [
    {
        titulo:"Dune",
        director:"Nolan",
        fecha: 1989
    },
    {
        titulo:"Matrix",
        director:"Wachowski",
        fecha: 2012
    },
    {
        titulo:"La Dama del agua",
        director:"Del Toro",
        fecha: 2015
    }    
];

const peliculasFilter = peliculas.filter(pelicula =>pelicula.fecha >2010);
console.log(peliculasFilter);

const peliculasDirectores = peliculas.map(peliculas => peliculas.director);
console.log(peliculasDirectores);

const peliculasTitulos = peliculas.map(peliculas => peliculas.titulo);
console.log(peliculasTitulos);

const peliculasConcatenada = peliculasDirectores.concat(peliculasTitulos);
console.log(peliculasConcatenada);

const peliculaPropagacion = [...peliculasTitulos, ...peliculasDirectores];
console.log(peliculaPropagacion);

