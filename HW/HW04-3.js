function isEven(n) {
  switch (n) {
    case 0: return alert ('Ваше число ЧЕТНОЕ');
    case 1: return alert ('Ваше число НЕЧЕТНОЕ');
    default: return isEven(n-2);
  }}

isEven(+prompt('Введите число для проверки на четность:'));

// если ввести отрицательное число (точно так же как и очень большое), то переполняется стек вызовов фунуции.
// для решения этой проблемы можно испльзовать методы setTimeout и setInterval.

