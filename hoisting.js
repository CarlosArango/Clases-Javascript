// Declaracion de una variable es movida al ambito al que pertenece

// javascript declara la función al inicio del ambito
/* function hoisting() {
  let x = 10;
  let p = 10;
  console.log(p);
  // Esto hace javascript internamente
  /*  let x;
  console.log(x);
  x = 10; */

const hoisting = () => {
  let x = 10;
  let p = 10;
  console.log(p);
  // Esto hace javascript internamente
  /*  let x;
  console.log(x);
  x = 10; */
};

//hoisting();

let ha = "ha - global";
function hoistingAmbito() {
  console.log(ha);
  let ha2 = "ha - local";
  console.log(ha2);
}

//hoistingAmbito();

let numero = 4;
console.log(typeof numero);
numero = "hola, probando";
console.log(typeof numero);
