//Funciones en JS
const saludar = function (nombre) {};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar2("Ale"));
console.log(saludar3("Bianchi"));
console.log(saludar4());

const getUser = () => ({
  uid: "ABC123",
  username: "El_Papi1502",
});

console.log(getUser());

const getUsuarioActivo = (nombre) => ({
  uid: "ABC123",
  username: nombre,
});

const userActivo = getUsuarioActivo("Ale");
console.log(userActivo);
