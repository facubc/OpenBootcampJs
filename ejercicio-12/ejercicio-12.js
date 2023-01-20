function fibo(num){
    const list =[]
    if (num === 0) {
        return "lista vacia";
    }else if (num === 1) {
        list.push(1);
        return list;
    } else if(num === 2){
        list.push(1,1);
        return list;
    }else{
        list.push(1,1);
        for (let i = 1; i < num-1; i++){
            let actual = list[i];
            let anterior = list[i-1]
            let agregar = actual + anterior;
            list.push(agregar);
        }
        return list
    }
}

console.log(fibo(6));