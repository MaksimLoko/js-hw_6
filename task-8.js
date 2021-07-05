// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

import users from "./users.js";
// console.log(users);

const getUsersWithFriend = (users, friendName) => {
  let findName = users.filter(({ friends }) => friends.includes(friendName));
  let names = findName.map(({ name }) => name);
  return names;
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
