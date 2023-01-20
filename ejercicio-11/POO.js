class Estudiante{
    #nombre
    #asignaturas
    
    constructor(nombre){
        this.#nombre = nombre
        this.#asignaturas = ["JavaScript","HTML","CSS"]
    }
    getDatos(){
        return{
            nombre : this.#nombre,
            asignaturas : this.#asignaturas
        }

    }
}
const estudiante_01 = new Estudiante("Facu");
console.log(estudiante_01.getDatos());