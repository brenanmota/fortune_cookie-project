const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const main = document.querySelector("main")

function handleClick(event) {
  event.preventDefault()

  screen1.classList.add("hide")
  screen2.classList.remove("hide")

  main.style.height = "52.5rem"

}

const btnOpen = document.querySelector("#btnOpen")
const btnReturn = document.querySelector("#btnReturn")

btnOpen.addEventListener('click', handleClick)
btnReturn.addEventListener('click', function () {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
  main.style.height = "42.5rem"

})

