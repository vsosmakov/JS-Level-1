var n;

function dectohex (n) {
  if (n>15) {
    return n.toString(16);
  } else {
    return '0'+n.toString(16);
  }
}

function RGB (r, g, b) {
  return '#'+dectohex(r)+dectohex(g)+dectohex(b);
}

console.log(RGB(155,54,45));