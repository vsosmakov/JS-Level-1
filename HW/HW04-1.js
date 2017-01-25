function min (a, b) {
  if (a > b) {
    alert('a = ' + a + '; b = ' + b + '; min b: '+b);
      return b;
  } else {
    alert('a = ' + a + '; b = ' + b + '; min a: '+a);
      return a;
  }
}

var ii = +prompt('Сколько раз повторять сравнение?');

for (var i = 0; i < ii; i++) {
  var a = +prompt('Введите a:');
  var b = +prompt('Введите b:');
  console.log(a + ' ', b + ' ', min(a, b));
}
  