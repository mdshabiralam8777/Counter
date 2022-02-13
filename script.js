let value = document.querySelector("#value");
// let plus = document.querySelector(".high");
// let minus = document.querySelector(".low");
// let reset = document.querySelector(".reset");

let count = 0;
function increment() {
    count++;
    value.innerText = count;
}
function decrement() {
    count--;
    value.innerText = count;
}
function reset() {
    count = 0;
    value.innerText = count;
}