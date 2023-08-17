//Função para abrir o menu hamburger
function abrirMenu() {
  document.getElementById("containerMenuHamburguer").style.display = "flex"
}
//Funnção para fechar o menu hamburger
function fecharMenu() {
  document.getElementById("containerMenuHamburguer").style.display = "none"
}

//Função para mudar o display dos container Moon, Mars, Europa e Titan
function mudarParaMoon() {
  document.getElementById("moon").style.display = "flex"
  document.getElementById("mars").style.display = "none"
  document.getElementById("europa").style.display = "none"
  document.getElementById("titan").style.display = "none"
}

function mudarParaMars() {
  document.getElementById("moon").style.display = "none"
  document.getElementById("mars").style.display = "flex"
  document.getElementById("europa").style.display = "none"
  document.getElementById("titan").style.display = "none"
}

function mudarParaEuropa() {
  document.getElementById("moon").style.display = "none"
  document.getElementById("mars").style.display = "none"
  document.getElementById("europa").style.display = "flex"
  document.getElementById("titan").style.display = "none"
}

function mudarParaTitan() {
  document.getElementById("moon").style.display = "none"
  document.getElementById("mars").style.display = "none"
  document.getElementById("europa").style.display = "none"
  document.getElementById("titan").style.display = "flex"
}

//Função para mudar os contaienrs Commander, Mission Specialist, Pilot e Flight Engineer

function mudarParaCommander() {
  document.getElementById("commander").style.display = "flex"
  document.getElementById("missionEspecialist").style.display = "none"
  document.getElementById("pilot").style.display = "none"
  document.getElementById("flightEngineer").style.display = "none"
}

function mudarParaMissionSpecialist() {
  document.getElementById("commander").style.display = "none"
  document.getElementById("missionEspecialist").style.display = "flex"
  document.getElementById("pilot").style.display = "none"
  document.getElementById("flightEngineer").style.display = "none"
}

function mudarParaPilot() {
  document.getElementById("commander").style.display = "none"
  document.getElementById("missionEspecialist").style.display = "none"
  document.getElementById("pilot").style.display = "flex"
  document.getElementById("flightEngineer").style.display = "none"
}

function mudarParaFlightEngineer() {
  document.getElementById("commander").style.display = "none"
  document.getElementById("missionEspecialist").style.display = "none"
  document.getElementById("pilot").style.display = "none"
  document.getElementById("flightEngineer").style.display = "flex"
}