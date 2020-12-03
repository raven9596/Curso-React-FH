// Funciones

// const saludar = function (nombre) {
//   return `Hola, ${nombre}`;
// };

const saludar2 = (nombre) => {
  return `hola, ${nombre}`;
};
const saludar3 = (nombre) => `hola, ${nombre}`;
const saludar4 = () => `hola Mundo`;

// console.log(saludar("Goku"));
console.log(saludar2("Vegeta"));
console.log(saludar3("Goku"));
console.log(saludar4());

// return normal
// const getUser = () => {
//   return {
//     uid: "ABC123",
//     username: "El_Papi1502",
//   };
// };

// return implicito
const getUser = () => ({
  uid: "ABC123",
  username: "El_Papi1502",
});

const user = getUser();

console.log(user);

// Tarea
const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Gilbert");
console.log(usuarioActivo);
