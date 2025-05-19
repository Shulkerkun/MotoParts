document.addEventListener('DOMContentLoaded', () => {
  const pista = document.getElementById('listaImmagini');
  const slide = document.querySelectorAll('.slideImmagine');
  const bottonePrecedente = document.getElementById('bottonePrecedente');
  const bottoneSuccessivo = document.getElementById('bottoneSuccessivo');
  const totaleSlide = slide.length;
  let indice = 0;

  function aggiornaCarosello() {
    pista.style.transform = `translateX(-${indice * 100}%)`;
  }

  function slideSuccessiva() {
    indice = (indice + 1) % totaleSlide;
    aggiornaCarosello();
  }

  function slidePrecedente() {
    indice = (indice - 1 + totaleSlide) % totaleSlide;
    aggiornaCarosello();
  }

  bottoneSuccessivo.addEventListener('click', slideSuccessiva);
  bottonePrecedente.addEventListener('click', slidePrecedente);
});
