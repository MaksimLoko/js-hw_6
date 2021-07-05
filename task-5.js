// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).
import users from "./users.js";
// console.log(users);

const getUserWithEmail = (users, findEmail) =>
  users.filter(({ email }) => email === findEmail);

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
