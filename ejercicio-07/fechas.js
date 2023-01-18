
const toDay = new Date();
console.log(toDay);

const cumple = new Date(1989,04,14);
console.log(cumple)

let esMayor = toDay > cumple;
console.log(esMayor);

const cumpleDay = cumple.getDate();
console.log(cumpleDay);

const cumpleMonth = cumple.getMonth();
console.log(cumpleMonth);

const cumpleYear = cumple.getFullYear();
console.log(cumpleYear);