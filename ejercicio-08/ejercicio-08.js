 function verdadero(){
    return false;
 }

function saludo(){
    console.log("hola soy una promesa");
}

function error(){
    console.log("algo salio mal");
}

 const promesa = new Promise(saludo, error =>{
    if (verdadero){
        setTimeout(saludo,500);
    }else{
        error();
    }
 });

 
promesa
    .then(()=> console.log("ok"))
    .catch(()=> console.log("mal"))
    .finally(()=> console.log("siempre"));
