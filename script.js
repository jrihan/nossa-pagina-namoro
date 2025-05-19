// Altere para a data de início do namoro (ano, mês - 1, dia)
const dataInicio = new Date(2025, 1, 23); // 15 de maio de 2022

function atualizarContador() {
  const agora = new Date();
  const diff = agora - dataInicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = agora.getHours();
  const minutos = agora.getMinutes();
  const segundos = agora.getSeconds();

  document.getElementById("contador").innerText =
    `${dias} dias, ${horas}h ${minutos}min ${segundos}s`;
}

setInterval(atualizarContador, 1000);
