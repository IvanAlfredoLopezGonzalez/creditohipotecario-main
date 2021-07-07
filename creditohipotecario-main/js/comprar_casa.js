// comprar_casa.html
const formatCurrency = (numero) => "$" + numero.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

const valorInicialDeLaPropiedad = 2000000;
const valorPropiedadText = $("#valor-propiedad-text");
valorPropiedadText.text(formatCurrency(valorInicialDeLaPropiedad.toString()));

const engancheSlider = new Slider('#enganche-slider', {
  value: 20,
  min: 0,
  max: 100,
});

const numeroPagosSlider = new Slider('#numero-pagos-slider', {
  value: 15,
  min: 5,
  max: 20,
  step: 5,
});