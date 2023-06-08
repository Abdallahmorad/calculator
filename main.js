const input = document.getElementById("input");
const allChars = document.querySelectorAll(".calculator .char");
const allOperators = document.querySelectorAll(".operators");
const equals = document.querySelector(".equal-btn");
const clear = document.querySelector(".cl-btn");
const del = document.querySelector(".dl-btn");
const result = document.querySelector(".result");

allChars.forEach((char) => {
  char.addEventListener("click", () => {
    input.value += char.innerText;
  });
});
allOperators.forEach((operator) => {
  operator.addEventListener("click", () => {
    input.value += operator.innerText;
  });
});

clear.addEventListener("click", function () {
  input.value = "";
  result.innerHTML = "";
});
del.addEventListener("click", function () {
  input.value = input.value.slice(0, -1);
});

equals.addEventListener("click", function () {
  result.innerText = eval(input.value);
  input.value = result.innerHTML;
  result.innerHTML = "";
});
