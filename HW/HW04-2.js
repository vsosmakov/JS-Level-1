//Первая часть задания

//function countBs(str){
// var i = 0, countB = 0;
//  while (i < str.length) {
//   if (str.charAt(i) == 'в') {
//     countB++;
//   }
//  i++;
// }
//  return (countB);
//}

//Вторая часть задания

function countChar(str, sim){
 var i = 0, countB = 0;
  while (i < str.length) {
   if (str.charAt(i) == sim) {
     countB++;
   }
  i++;
 }
  return (countB);
}

var str = prompt ('Введите строку');
var sim = prompt ('Введите символ');

alert ('в вашей строке ' + countChar(str,sim) + ' символа ' + '"' + sim + '"');

