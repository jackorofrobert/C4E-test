function prime(n) {
  if (n < 2) return false;
  const max = Math.sqrt(n);
  let i = 2;
  while (i <= max) {
    if (n % i === 0) return false;
    i++;
  }

  return true;
}

function sum(start, end) {
  let s = 0;
  for (let i = start; i <= end; i++) if (prime(i)) s += i;
  return s;
}

function print() {
  let a = +document.getElementById("a").value;
  let b = +document.getElementById("b").value;
  let s = sum(a, b);
  document.getElementById("result").innerHTML = s;
}

document.getElementById("sum").addEventListener("click", print);