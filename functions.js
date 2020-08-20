// Fiunciones declarativas

function makeCircle(param1, param2, param3, param4, param5) {
  return 1 + number;
}

// Params > 3
const paramsList = {
  param1: {
    array: [1, 2, 3],
    spa1: "spa1-1",
    spa2: "spa1-2",
  },
  param2: `param-2`,
  param3: "3",
  param4: "4",
  param5: "5",
};

/* function printParams(paramsList) {
  const {
    param1: { spa1: v1, spa2: v2 },
    param2,
  } = paramsList;
  console.log(v1, v2, param2);
}
 */
/* function printParams({ param1: { spa1: v1, spa2: v2 }, param2 }) {
  console.log(v1, v2, param2);
}
 */
function printParamsD(paramsList) {
  const { param1 } = paramsList;
  if (param1.array.length == 0) {
    return "array empty";
  }
  console.log(param1.array.map((item) => item * 2));
}
//printParams(paramsList);

//Funcioens expresivas

const printParamsE = function (paramsList) {
  const { param1 } = paramsList;
  console.log(paramsList);
};

const expresiva = function (number) {
  return 1 / number;
};

printParamsE(paramsList);

console.log(expresiva);
const result = expresiva(3);
console.log(result);
