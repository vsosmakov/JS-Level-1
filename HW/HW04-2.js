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


console.log (countChar(prompt ('Введите строку'), prompt ('Введите символ')));