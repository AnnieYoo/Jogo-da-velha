const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const inputTurn = document.getElementById("inputTurn");
const key = document.querySelectorAll(".btnKey");
const startGm = document.getElementById("startGm");
const first = "O";
const second = "X";

const btn00 = document.getElementById("btn00");
const btn01 = document.getElementById("btn01");
const btn02 = document.getElementById("btn02");
const btn03 = document.getElementById("btn03");
const btn04 = document.getElementById("btn04");
const btn05 = document.getElementById("btn05");
const btn06 = document.getElementById("btn06");
const btn07 = document.getElementById("btn07");
const btn08 = document.getElementById("btn08");

document.getElementById("resetGm").addEventListener("click", function () {
  window.location.reload(true);
});

startGm.addEventListener("click", playing);

document.querySelectorAll(".btnKey").forEach(function (btnKey) {
  if (btnKey.value === "disabled") {
    alert("O jogo empatou!");
  }
});

function playing() {
  inputTurn.value = player1.value;

  document.querySelectorAll(".btnKey").forEach(function (btnKey) {
    btnKey.addEventListener("click", function (ev) {
      const btn = ev.currentTarget;
      if (player1.value === inputTurn.value) {
        btn.innerText = "O";
        btn.value = "O";
        inputTurn.value = player2.value;
        btn.setAttribute("disabled", true);
      } else if (
        btn00.value === first &&
        btn01.value === first &&
        btn02.value === first
      ) {
        btn00.style.backgroundColor = "green";
        btn01.style.backgroundColor = "green";
        btn02.style.backgroundColor = "green";
        alert("Parabéns " + player1.value + " você venceu a partida!");
      } else if (
        btn03.value === first &&
        btn04.value === first &&
        btn05.value === first
      ) {
        btn03.style.backgroundColor = "green";
        btn04.style.backgroundColor = "green";
        btn05.style.backgroundColor = "green";
        alert("Parabéns " + player1.value + " você venceu a partida!");
      } else if (
        btn06.value === first &&
        btn07.value === first &&
        btn08.value === first
      ) {
        btn06.style.backgroundColor = "green";
        btn07.style.backgroundColor = "green";
        btn08.style.backgroundColor = "green";
        alert("Parabéns " + player1.value + " você venceu a partida!");
      } else if (
        btn00.value === first &&
        btn03.value === first &&
        btn06.value === first
      ) {
        btn00.style.backgroundColor = "green";
        btn03.style.backgroundColor = "green";
        btn06.style.backgroundColor = "green";
        alert("Parabéns " + player1.value + " você venceu a partida!");
      } else if (
        btn01.value === first &&
        btn04.value === first &&
        btn07.value === first
      ) {
        btn01.style.backgroundColor = "green";
        btn04.style.backgroundColor = "green";
        btn07.style.backgroundColor = "green";
        alert("Parabéns " + player1.value + " você venceu a partida!");
      } else if (
        btn02.value === first &&
        btn05.value === first &&
        btn08.value === first
      ) {
        btn02.style.backgroundColor = "green";
        btn05.style.backgroundColor = "green";
        btn08.style.backgroundColor = "green";
        alert("Parabéns " + player1.value + " você venceu a partida!");
      } else if (
        btn00.value === first &&
        btn04.value === first &&
        btn08.value === first
      ) {
        btn00.style.backgroundColor = "green";
        btn04.style.backgroundColor = "green";
        btn08.style.backgroundColor = "green";
        alert("Parabéns " + player1.value + " você venceu a partida!");
      } else if (
        btn02.value === first &&
        btn04.value === first &&
        btn06.value === first
      ) {
        btn02.style.backgroundColor = "green";
        btn04.style.backgroundColor = "green";
        btn06.style.backgroundColor = "green";
        alert("Parabéns " + player1.value + " você venceu a partida!");
      } else if (inputTurn.value === player2.value) {
        btn.innerText = "X";
        btn.value = "X";
        inputTurn.value = player1.value;
        btn.setAttribute("disabled", true);
      } else if (
        btn00.value === second &&
        btn01.value === second &&
        btn02.value === second
      ) {
        btn00.style.backgroundColor = "green";
        btn01.style.backgroundColor = "green";
        btn02.style.backgroundColor = "green";
        alert("Parabéns " + player2.value + " você venceu a partida!");
      } else if (
        btn03.value === second &&
        btn04.value === second &&
        btn05.value === second
      ) {
        btn03.style.backgroundColor = "green";
        btn04.style.backgroundColor = "green";
        btn05.style.backgroundColor = "green";
        alert("Parabéns " + player2.value + " você venceu a partida!");
      } else if (
        btn06.value === second &&
        btn07.value === second &&
        btn08.value === second
      ) {
        btn06.style.backgroundColor = "green";
        btn07.style.backgroundColor = "green";
        btn08.style.backgroundColor = "green";
        alert("Parabéns " + player2.value + " você venceu a partida!");
      } else if (
        btn00.value === second &&
        btn03.value === second &&
        btn06.value === second
      ) {
        btn00.style.backgroundColor = "green";
        btn03.style.backgroundColor = "green";
        btn06.style.backgroundColor = "green";
        alert("Parabéns " + player2.value + " você venceu a partida!");
      } else if (
        btn01.value === second &&
        btn04.value === second &&
        btn07.value === second
      ) {
        btn01.style.backgroundColor = "green";
        btn04.style.backgroundColor = "green";
        btn07.style.backgroundColor = "green";
        alert("Parabéns " + player2.value + " você venceu a partida!");
      } else if (
        btn02.value === second &&
        btn05.value === second &&
        btn08.value === second
      ) {
        btn02.style.backgroundColor = "green";
        btn05.style.backgroundColor = "green";
        btn08.style.backgroundColor = "green";
        alert("Parabéns " + player2.value + " você venceu a partida!");
      } else if (
        btn00.value === second &&
        btn04.value === second &&
        btn08.value === second
      ) {
        btn00.style.backgroundColor = "green";
        btn04.style.backgroundColor = "green";
        btn08.style.backgroundColor = "green";
        alert("Parabéns " + player2.value + " você venceu a partida!");
      } else if (
        btn02.value === second &&
        btn04.value === second &&
        btn06.value === second
      ) {
        btn02.style.backgroundColor = "green";
        btn04.style.backgroundColor = "green";
        btn06.style.backgroundColor = "green";
        alert("Parabéns " + player2.value + " você venceu a partida!");
      } else {
        alert("O jogo empatou!");
      }
    });
  });
}

document.querySelectorAll(".btnKey").forEach(function (btnKey) {
  if (btnKey.contains("disabled")) {
    alert("O jogo empatou!");
  }
});
