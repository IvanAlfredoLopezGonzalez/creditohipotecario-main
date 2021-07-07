// valor_propiedad.html
const formatCurrency = (numero) => "$" + numero.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

const valorInicialDeLaPropiedad = 2000000;
const valorPropiedadText = $("#valor-propiedad-text");
valorPropiedadText.text(formatCurrency(valorInicialDeLaPropiedad.toString()))

const valorPropiedadSlider = new Slider("#valor-propiedad-slider", {
  value: valorInicialDeLaPropiedad,
  min: 500000,
  max: 10000000,
});

valorPropiedadSlider.on('change', ({
  newValue
}) => valorPropiedadText.text(formatCurrency(newValue.toString())));