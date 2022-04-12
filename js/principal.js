var pontuacao = document.querySelector("#pontos");
var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
pincel.fillStyle = "white";
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}
function limpaTela() {
  pincel.clearRect(0, 0, 600, 400);
}
function desenhaAlvo(x, y) {
  desenhaCirculo(x, y, 30, "red");
  desenhaCirculo(x, y, 20, "white");
  desenhaCirculo(x, y, 10, "red");
}
function sorteiaPosicao(maximo) {
  return Math.floor(Math.random() * maximo);
}

var xAleatorio = sorteiaPosicao(600);
var yAleatorio = sorteiaPosicao(400);

function atualizaTela() {
  limpaTela();
  xAleatorio = sorteiaPosicao(600);
  yAleatorio = sorteiaPosicao(400);
  desenhaAlvo(xAleatorio, yAleatorio);
}

function clicks(evento) {
  var mouseX = evento.pageX - tela.offsetLeft;
  var mouseY = evento.pageY - tela.offsetTop;
  verifica(mouseX, mouseY);
}
var pontos = 0;
function verifica(mouseX, mouseY) {
  var aviso = document.querySelector("#aviso");
  aviso.style.color = "red";
  if (mouseX < xAleatorio + 10 && mouseX > xAleatorio - 10 && mouseY < yAleatorio + 10 && mouseY > yAleatorio - 10) {
    pontos++;
    pontuacao.textContent = pontos;
    aviso.textContent = "Pontuou!!";
    setTimeout(() => {
      aviso.textContent = "";
    }, 500);
  }
}

setInterval(atualizaTela, 1000);
tela.onclick = clicks;
