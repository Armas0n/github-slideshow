"use strict";

/* Данные в жс делятся на группы. Первая группа это простые типы данных. Сюда относят:
Все числовые
string
boolean
null
undefined
Symbol
Bigint
*/

/* Вторая группа данных это объекты
* Массивы
* Функции
* Объект даты
* Regular Expressions
* Ошибки
*/

// 1. Числа
let ist = 15.6; // Такого понятия как float в жс изначально нет, есть просто тип данных "number"
let mal = 'Rune Sword';

console.log(ist/0); // Тут получим тип данных infinity
console.log(mal * 10); // тут получим NotANumber (NaN)
console.log(typeof ist);

// 2. Строки

/* Тут все просто, строки всегда в кавычках, каких именно разницы нет. Хоть в `косых`*/

// 3. null
// console.log(shittyperemennaya);
// в результате получим null, так как переменная ссылается на пустоту

// 4. undefined
let zod;
console.log(zod); // по результатам этого кода получим undefined, так как переменная вроде задана, но значения у неё нет



// Вторая группа данных

// 1. Списки и они же массивы
let spisok = [32, 22, 'heelo', 'world', true];
console.log(spisok[3]); // обращаемся к значению ворлд с помощью индекса, который ведет свой отсчет с 0.

// 2. Объекты (они же словари в Питоне)

let objectello = {
  age: ist,
  name: mal,
  IsMarried: false
};

console.log(objectello['age']); // Обратились к объекту и запросили у него ключ age. На выходе получим число ist
console.log(objectello.name); // Гораздо более удобный вариант обращения к объектам через точку и название ключа.

