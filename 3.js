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
function task13() {
  for(let i = 2; i <= 10; i+=2) alert(i);
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