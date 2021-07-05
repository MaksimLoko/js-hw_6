// Задание 3
// Получить массив имен пользователей по полу (поле gender).
import users from "./users.js";
// console.log(users);

const getUsersWithGender = (users, sex) =>
  users.filter(({ gender }) => gender === sex).map(({ name }) => name);

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
