//Global scope => Variables globales
var initialMessage = "Initial message";
//Function scope

function functionScope() {
  for (var i = 0; i < 100; i++) {
    console.log("Antes time out ");
    setTimeout(() => {
      console.log(i);
    }, 0);

    console.log("Despues time out");
    /*   imprimirNumeros = (i) => {
      setTimeout(() => {
        console.log("Function scope", i);
      }, 100);
    };

    imprimirNumeros(i); */
  }
}

//Block scope

function blockScope() {
  for (let i = 0; i < 100; i++) {
    console.log("Antes time out ");
    setTimeout(() => {
      console.log("Block scope", i);
    }, 0);
    console.log("Despues time out");
  }
}

//Module Scope
