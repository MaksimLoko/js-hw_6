/*Напиши функции которые с помощью перебирающих методов массива (никаких for, splice и т. д.) выполняют следующие операции над массивом объектов пользователей из файла users.js.
Задание 1
Получить массив имен всех пользователей (поле name).
*/
import users from "./users.js";
// console.log(users);

const getUserNames = (users) =>
  users.map((user) => {
    return user.name;
  });

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// =============================================
// let friends = [
//   { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
//   { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
//   { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
//   { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
// ];

// let friendsNames = friends.map((friend) => {
//   return friend.name;
// });
// console.log(friendsNames);
