const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0

function init() {


  function konamiListener(e) {
    const key = e.key
    console.log(key)
  }

  document.body.addEventListener('keydown', konamiListener)
}
