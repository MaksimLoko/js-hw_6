// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.

import users from "./users.js";
// console.log(users);

const calculateTotalBalance = (users) => {
  let totalBalance = users.reduce((total, user) => total + user.balance, 0);
  return totalBalance;
};
console.log(calculateTotalBalance(users)); // 20916

// =========================================
// const calculateTotalBalance = (users) => {
//   let total = users.map((user) => {
//     return user.balance;
//   });
//   let nums = total.reduce((acc, elem, index, arr) => {
//     return acc + elem;
//   }, 0);
//   return nums;
// };
// console.log(calculateTotalBalance(users)); // 20916
// =========================================
