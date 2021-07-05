// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

import users from "./users.js";
// console.log(users);

const getSortedUniqueSkills = (users) => {
  return users
    .reduce((acc, { skills }) => acc.concat(skills), [])
    .sort()
    .filter((skill, index, skills) => index === skills.indexOf(skill));
};
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
