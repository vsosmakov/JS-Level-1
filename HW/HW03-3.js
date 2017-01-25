var i=0, b='# ', w=' #';

while (i<2) {
  b += b;
  w += w;
  i++;
}

i=0;

while (i<4) {
  console.log (b);
  console.log (w);
  i++;
}
