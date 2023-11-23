<h1 align="center"> МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</h1>
<br>
<br>
<br>
<br>
<br>
<br>
<p align="center">Лабораторная работа №3</p>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<p align="right">Выполнил: Шандро Никита Богданович</p>
<p align="right">Проверил: Соболев Е. И.</p>
<br>
<br>
<br>
<br>
<br>
<br>

<p align="center">г. Южно-Сахалинск <br> 2023 год</p>

<h2 align="center">Введение</h2>
<p align="justify">Основы языка JavaScript</p>

<h2>Цели и задачи</h2>
<br>
1. Что выведет код ниже?
alert( null || 2 || undefined );
<br>
2.Что выведет код ниже?
alert( alert(1) || 2 || alert(3) );
<br>
3. Что выведет код ниже?
alert( 1 && null && 2 );
<br>
4. Что выведет alert (И)?
alert( alert(1) && alert(2) );
<br>
5. Что выведет этот код?
alert( null || 2 && 3 || 4 );
<br>
6. Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно. «Включительно» означает, что значение переменной age может быть равно 14 или 90.
<br>
7.Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно. Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
<br>
8. Какие из перечисленных ниже alert выполнятся?
Какие конкретно значения будут результатами выражений в условиях if(...)?
<br>
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
<br>
9. Проверка логина
важность: 3
Напишите код, который будет спрашивать логин с помощью prompt.
Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
Пароль проверять так:
Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».
Блок-схема:
Для решения используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода.
Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null.
<br>
10. Какое последнее значение выведет этот код? Почему?
let i = 3;
while (i) {
  alert( i-- );
}
<br>
11. Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
Оба цикла выводят alert с одинаковыми значениями или нет?
Префиксный вариант ++i:
let i = 0;
while (++i < 5) alert( i );
Постфиксный вариант i++
let i = 0;
while (i++ < 5) alert( i );
<br>
12. Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом. Оба цикла выведут alert с одинаковыми значениями или нет?
Постфиксная форма:
for (let i = 0; i < 5; i++) alert( i );
Префиксная форма:
for (let i = 0; i < 5; ++i) alert( i );
<br>
13. При помощи цикла for выведите чётные числа от 2 до 10.
<br>
14. Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
<br>
15. Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее. Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC). Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
<br>
16. Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1. Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток. Например, 5 — это простое число, оно не может быть разделено без остатка на 2, 3 и 4. Напишите код, который выводит все простые числа из интервала от 2 до n. Для n = 10 результат должен быть 2,3,5,7.
<br>
17. Напишите if..else, соответствующий следующему switch:
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;
  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;
  default:
    alert( 'We hope that this page looks ok!' );
}
<br>
18. Перепишите код с использованием одной конструкции switch:
 const number = +prompt('Введите число между 0 и 3', '');
if (number === 0) {
  alert('Вы ввели число 0');
}
if (number === 1) {
  alert('Вы ввели число 1');
}
if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
<br>
19. Следующая функция возвращает true, если параметр age больше 18. В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
Будет ли эта функция работать как-то иначе, если убрать else?
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
Есть ли хоть одно отличие в поведении этого варианта?
<br>
20. Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос confirm и возвращает его результат.
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
Сделайте два варианта функции checkAge:
Используя оператор ?
Используя оператор ||
<br>
21. Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
Пример вызовов:
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
<br>
22. Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
<br>
23. 7 kyu https://www.codewars.com/kata/highest-and-lowest
<br>
24. 7 kyu https://www.codewars.com/kata/disemvowel-trolls
<br>
25. 7 kyu https://www.codewars.com/kata/isograms
<br>
26. 7 kyu https://www.codewars.com/kata/digits-explosion
<br>
27. 6 kyu https://www.codewars.com/kata/handshake-problem
<br>
28. 6 kyu https://www.codewars.com/kata/duplicate-encoder
<br>
29. 6 kyu https://www.codewars.com/kata/n-th-fibonacci
<br>
30. 6 kyu https://www.codewars.com/kata/multiples-of-3-or-5
<br>
31.
Придумайте просто Telegram бота, при создании используйте Node JS, ,библиотеку использующую Telegram API,  express

<h2>Решение задач</h2>

```js
// Задача 1
function task1() {
  alert( null || 2 || undefined ); // Будет выведено: 2.
}
  
  // Задача 2
function task2() {
  alert( alert(1) || 2 || alert(3) ); // Будет выведено: сначала 1, затем 2.
}
  
  // Задача 3
  function task3() {
  alert( 1 && null && 2 ); // Будет выведено: null.
}
  
  // Задача 4
  function task4() {
  alert( alert(1) && alert(2) ); // Будет выведено: cначала 1, затем undefined.
}
  
  // Задача 5
   function task5() {
  alert( null || 2 && 3 || 4 ); // Будет выведено: 3.
}
  
  // Задача 6
  function task6() {
   age = prompt("Введите возраст");
if (age >= 14 || age <= 90){
    alert("correct");
} else {
    alert("incorrect");
}
}
  
  // Задача 7
 function task7() {
  //1 вариант
  age = prompt("Введите возраст");
  if (!(age >= 14 || age <= 90)){
      alert("correct");
  } else {
      alert("incorrect");
  }
  /* 2 вариант
  if (age < 14 || age > 90) {
      alert("correct");
  } else {
      alert("incorrect");
  }
    */
}
  
  // Задача 8
  function task8() {
  if (-1 || 0) alert( 'first' ); //выполнится, результат -1
  if (-1 && 0) alert( 'second' ); //невыполнится, результат 0
  if (null || -1 && 1) alert( 'third' ); //выполнится, результат 1
}
  
  // Задача 9
   function task9() {
    let response = prompt("Кто там?");
  if (response == "Админ")
  {
      let password = prompt("Пароль?");
  
      if (password == "Я Главный"){
          alert("Здравствуйте!");
      } else if (password == null) {
          alert("Отменено");
      } else {
          alert("Неверный пароль.")
      }
  } 
  else if (response == null){
      alert("Я вас не знаю.");
  } else {
      alert("Отменено");
  }
}
  
  // Задача 10
  function task10() {
  let i = 3;
  while (i) {
    alert( i-- ); // Будут выведены числа  3, 2, 1, так как цикл прирвется когда переменная i примет значение 0. В js 0 приравнивается false.
  }
}
  
  // Задача 11
  function task11() {
  alert("Префиксный вариант ++i");
  let i = 0;
  while (++i < 5) alert( i ); //Будут выведены числа: 1, 2, 3, 4.

  alert("Постфиксный вариант i++");
  i = 0;
  while (i++ < 5) alert( i ); //Будут выведены числа: 1, 2, 3, 4, 5.
}
  
  // Задача 12
 function task12() {
  alert("Постфиксная форма:");
  for (let i = 0; i < 5; i++) alert( i ); //Будут выведены числа: 0, 1, 2, 3, 4.
    
  alert("Префиксная форма:");
  for (let i = 0; i < 5; ++i) alert( i ); //Будут выведены числа: 0, 1, 2, 3, 4.
}
  
  // Задача 13
 let number = prompt("Введите число");
  while(number <= 100 && number != null)
    {
      number = prompt("Введите число");
    }
}
  
  // Задача 14
  function task14() {
  let i = 0;
  while (i < 3){
      alert(`number ${i}!`);
      i++;
  }
}
  
  // Задача 15
 function task15() {
  let number = prompt("Введите число");
  while(number <= 100 && number != null)
    {
      number = prompt("Введите число");
    }
}
  
  // Задача 16
  function task16() {
  let n = prompt("Введите n");
let array = [2];
for(let i = 3; i <= n; i++){
    for(let j = 0; j < array.length; j++){
        if(i % array[j] == 0){
            break;
        }
        if(j == array.length - 1)
        {
            array.push(i)
        }
    }
}
alert(array);
}
  
  // Задача 17
  function task17() {
  let browser = prompt("What browser are you using?");
if (browser == 'Edge')
{
    alert("You've got the Edge!");
} else if (browser == "Chrome" || browser == 'Firefox'
            || browser =='Safari' || browser == 'Opera'){
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}
}
  
  // Задача 18
  function task18() {
  switch(parseInt(prompt("Введите число между 0 и 3"))){
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
  }
}
  
  // Задача 19
   function task19() {
  alert("Вариант 1");
  checkAge1(parseInt(prompt("Введите возраст:")));
  alert("Вариант 2");
  checkAge2(parseInt(prompt("Введите свой возраст:")));
  

function checkAge1(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Родители разрешили?');
    }
  }

function checkAge2(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Родители разрешили?');
}
}
//Отличий в этих вариантах нет.
  
  // Задача 20
  function task20() {
  alert("Вариант 1 с оператором ?");
    checkAge3(parseInt(prompt("Введите возраст:")));
    alert("Вариант 2 с оператором ||");
    checkAge4(parseInt(prompt("Введите свой возраст:")));


function checkAge3(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}

function checkAge4(age) {
    return age > 18 || confirm('Родители разрешили?');
}
}
  
  // Задача 21
  function task21() {
  let a = parseInt(prompt("Введите a"));
  let b = parseInt(prompt("Введите b"));
  alert(`Минимальное число из (${a}, ${b}): ${min(a,b)}`);
}
function min(a, b){
  if (a > b) return b;
  else if (a < b) return a;
  else return a;
}
  
  // Задача 22
   function task22() {
  let x =  parseInt(prompt("Введите x"));
  let n =  parseInt(prompt("Введите n"));
  alert(`Число ${x} в степени ${n} равно ${pow(x,n)}`);
}
function pow(x, n){
  for(let i = 1; i < n; i++)
      x*=x;
  return x;
}
  
  // Задача 31
const TelegramBot = require('node-telegram-bot-api');

// Заменить TELEGRAM_BOT_TOKEN на свой токен
const bot = new TelegramBot('TELEGRAM_BOT_TOKEN', {polling: true});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет! Я бот, который инвертирует прописные буквы в заглавные. Просто отправь мне текст, и я верну его с инвертированными буквами.');
});

bot.onText(/^(?!\/start).+$/, (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const invertedText = invertCapitalLetters(text);
  bot.sendMessage(chatId, invertedText);
});

function invertCapitalLetters(text) {
  let invertedText = '';
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    if (char === char.toUpperCase()) {
      invertedText += char.toLowerCase();
    } else {
      invertedText += char.toUpperCase();
    }
  }
  return invertedText;
}

  
```

<h2>Вывод</h2>
Научился основом JavaScript
