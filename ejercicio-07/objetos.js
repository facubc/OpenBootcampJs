
const datosFacu = {
    nombre:"Facu",
    apellido : "Bessé",
    edad : 33,
    altura: 170,
    eresDesarrollador : true
};

const amigoUno = {
    nombre:"Emi",
    apellido : "Bessé",
    edad : 10,
    altura: 140,
    eresDesarrollador : true
};

const amigoDos = {
    nombre:"Fer",
    apellido : "Bessé",
    edad : 7,
    altura: 120,
    eresDesarrollador : true
};




let edadPersona = datosFacu.edad;
console.log(edadPersona)

const amigos = [datosFacu, amigoUno, amigoDos];
console.log(amigos);

amigos.sort((a, b) => b.edad-a.edad);
console.log(amigos)