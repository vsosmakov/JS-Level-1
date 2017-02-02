var obj={};

function num2obj(num) {
  for (i=0;i<3;i++) {
    if (num[i]==undefined) {
      num=0+num;
    }
  }
  obj['сотни'] = num[0];
  obj['десятки'] = num[1];
  obj['единицы'] = num[2];
  return obj;
}

console.log (num2obj('750'));