const tipoCreditoSelect = $('#tipo-credito__select');
const costoCasaLabel = $('#comprar-casa-cantidad__label');
const opcionSimulacionSelect = $('#opcion-de-simulacion__select');
const comprarCasaForm = $('#comprar-casa__form');
const comprarTerrenoForm = $('#comprar-terreno__form');
const remodelarCasaForm = $('#remodelar-casa__form');
const cambiarHipotecaForm = $('#cambiar-hipoteca__form');
const obtenerLiquidezForm = $('#obtener-liquidez__form');
const terrenoOpcionSimulacionSelect = $('#terreno-opcion-simulacion__select');
const costoTerrenoLabel = $('#comprar-terreno-cantidad__label');
const remodelarOpcionSimulacionSelect = $('#remodelar-opcion-simulacion__select');
const remodelarLabel = $('#remodelar-casa-cantidad__label');
const obtenerLiquidezOpcionSimulacionSelect = $('#liquidez-opcion-simulacion__select');
const obtenerLiquidezLabel = $('#liquidez-cantidad__label');
const mainForm = $('#main-form');
const tipoCreditoContainer = $('#tipo-credito-container');
const valorPropiedadContainer = $('#valor-proiedad-container');
const valorPropiedadLabel = $('#valor-propiedad__label');
const mainFormValorPropiedad = $('#main-form-valor-propiedad');
const comprarCasaMontoQueNecesitas = $('#comprar-casa-monto-que-necesitas');
const comprarCasaPorcentajeEnganche = $('#comprar-casa-porcentaje-enganche');
const comprarCasaValorEnganche = $('#comprar-casa-valor-enganche');
const comprarCasaPorcentajeFinanciamiento = $('#comprar-casa-porcentaje-financiamiento');
const comprarCasaValorFinanciamiento = $('#comprar-casa-valor-financiamiento');
const comprarCasaPorcentajeCofinanciamiento = $('#comprar-casa-porcentaje-cofinanciamiento');
const comprarCasaValorCofinanciamiento = $('#comprar-casa-valor-cofinanciamiento');
const comprarCasasPorcentajeMensualidad = $('#comprar-casa-porcentaje-mensualidad');
const cofinanciamientoToggleButton = $('#cofinanciamiento-toggle__button');
const engancheFinanciamientoContainer = $('#enganche-financiamiento-container');
let isCofinanciamiento = false;

$('#valor-casa').val('2,000,000');

const toggleCofinanciamiento = () => {
  const button = $('#cofinanciamiento__toggle');
  const form = $('#cofinanciamiento__form');
  const cofinanciamientoSlider = $('#cofinanciamiento-slider__container');
  const financiamientoSlider = $('#financiamiento-slider__container');
  const [start] = comprarCasaCofinanciamientoSlider.getValue();
  const porcentajeFinanciamiento = 100 - start;
  const valorFinanciamiento = Math.round(valorPropiedadSlider.getValue() * porcentajeFinanciamiento / 100);
  const porcentajeCofinanciamiento = (100 - start) / 2;
  const valorCofinanciamiento = Math.round(valorPropiedadSlider.getValue() * porcentajeCofinanciamiento / 100); 
  isCofinanciamiento = !isCofinanciamiento;
  
  if (isCofinanciamiento) {
    // Mobile
    button.html('<i class="fas fa-minus"></i>');
    form.show();
    cofinanciamientoSlider.show();
    financiamientoSlider.hide();
    comprarCasaPorcentajeFinanciamiento.val(`${porcentajeCofinanciamiento}%`);
    comprarCasaPorcentajeCofinanciamiento.val(`${porcentajeCofinanciamiento}%`);
    comprarCasaValorFinanciamiento.val(formatCurrency(valorCofinanciamiento.toString()));
    comprarCasaValorCofinanciamiento.val(formatCurrency(valorCofinanciamiento.toString()));
    $('#calcular-card-financiamiento-value').text(formatCurrency(valorCofinanciamiento.toString()));

    // Desktop
    $('.financiamiento-slider__container-desktop').hide();
    $('.cofinanciamiento-slider__container-desktop').show();
    $('#porcentajeFinanciamiento').val(`${porcentajeCofinanciamiento}%`);
    $('#porcentajeCofinanciamiento').val(`${porcentajeCofinanciamiento}%`);
    $('#valorFinanciamiento').val(formatCurrency(valorCofinanciamiento.toString()));
    $('#valorCofinanciamiento').val(formatCurrency(valorCofinanciamiento.toString()));
    $('#te-prestamos').text(formatCurrency(valorCofinanciamiento.toString()));
  } else {
    // Mobile
    button.html('<i class="fas fa-plus"></i>');
    form.hide();
    cofinanciamientoSlider.hide();
    financiamientoSlider.show();
    comprarCasaPorcentajeFinanciamiento.val(`${porcentajeFinanciamiento}%`);
    comprarCasaValorFinanciamiento.val(formatCurrency(valorFinanciamiento.toString()));
    $('#calcular-card-financiamiento-value').text(formatCurrency(valorFinanciamiento.toString()));

    // Desktop
    $('.financiamiento-slider__container-desktop').show();
    $('.cofinanciamiento-slider__container-desktop').hide();
    $('#porcentajeFinanciamiento').val(`${porcentajeFinanciamiento}%`);
    $('#valorFinanciamiento').val(formatCurrency(valorFinanciamiento.toString()));
    $('#te-prestamos').text(formatCurrency(valorFinanciamiento.toString()));
  }
};

const getLabel = (value) => {
  if (value === 'costo-casa') {
    return '¿Cuánto cuesta la casa que quieres?';
  }
  if (value === 'costo-terreno') {
    return '¿Cuánto cuesta el terreno que quieres?';
  }
  if (value === 'valor-casa') {
    return '¿Cuánto cuesta la casa que quieres remodelar?';
  }
  if (value === 'valor-casa-liquidez')  {
    return '¿Cuánto vale tu casa?';
  }
  if (value === 'monto-que-necesitas') {
    return '¿Cuánto dinero necesitas?';
  }
  if (value === 'mensualidad-que-quieres') {
    return '¿Cuánto quieres pagar al mes?';
  }
  return '';
};

const formatCurrency = (numero) => '$' + numero.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

let valorInicialDeLaPropiedad = 2000000;
const valorPropiedadText = $("#valor-propiedad-text");
valorPropiedadText.text(formatCurrency(valorInicialDeLaPropiedad.toString()));

const valorPropiedadSlider = new Slider("#valor-propiedad-slider", {
  value: valorInicialDeLaPropiedad,
  min: 500000,
  max: 10000000,
});

const comprarCasaEngancheSlider = new Slider('#comprar-casa-enganche-slider', {
  value: 20,
  min: 10,
  max: 80,
});

const comprarCasaEngancheSliderDesktop = new Slider('#comprar-casa-enganche-slider-desktop', {
  value: 20,
  min: 10,
  max: 80,
});

const comprarCasaCofinanciamientoSlider = new Slider('#comprar-casa-cofinanciamiento-slider', {
  id: 'cofinanciamiento-slider',
  min: 0,
  max: 100,
  range: true,
  value: [20, 40],
  formatter: (value) => {
    if (value.length === 2) {
      const [start, end] = value;
      const porcentajeEnganche = start;
      const porcentajeFinanciamiento = end - start;
      const porcentajeCofinanciamiento = 100 - end;
      return `${porcentajeEnganche} : ${porcentajeFinanciamiento} : ${porcentajeCofinanciamiento}`;
    }
    return null;
  },
});

const comprarCasaCofinanciamientoSliderDesktop = new Slider('#comprar-casa-cofinanciamiento-slider-desktop', {
  id: 'cofinanciamiento-slider-desktop',
  min: 0,
  max: 100,
  range: true,
  value: [20, 40],
  formatter: (value) => {
    if (value.length === 2) {
      const [start, end] = value;
      const porcentajeEnganche = start;
      const porcentajeFinanciamiento = end - start;
      const porcentajeCofinanciamiento = 100 - end;
      return `${porcentajeEnganche} : ${porcentajeFinanciamiento} : ${porcentajeCofinanciamiento}`;
    }
    return null;
  },
});

const actualizarEngancheFinanciamiento = (newValue) => {
  const valorEnganche = Math.round(valorPropiedadSlider.getValue() * newValue / 100);
  const valorFinanciamiento = Math.round(valorPropiedadSlider.getValue() * (100 - newValue) / 100);
  const rangeValue = [newValue, ((100 - newValue) / 2) + newValue];

  // Mobile Version
  comprarCasaPorcentajeEnganche.val(`${newValue}%`);
  comprarCasaValorEnganche.val(formatCurrency(valorEnganche.toString()));
  comprarCasaPorcentajeFinanciamiento.val(`${100 - newValue}%`);
  comprarCasaValorFinanciamiento.val(formatCurrency(valorFinanciamiento.toString()));
  $('#calcular-card-financiamiento-value').text(formatCurrency(valorFinanciamiento.toString()));
  comprarCasaCofinanciamientoSlider.setValue(rangeValue);

  // Desktop Version
  $('#porcentajeEnganche').val(`${newValue}%`);
  $('#valorEnganche').val(formatCurrency(valorEnganche.toString()));
  $('#porcentajeFinanciamiento').val(`${100 - newValue}%`);
  $('#valorFinanciamiento').val(formatCurrency(valorFinanciamiento.toString()));
  $('#te-prestamos').text(formatCurrency(valorFinanciamiento.toString()));
  comprarCasaCofinanciamientoSliderDesktop.setValue(rangeValue);
};

const actualizarCofinanciamiento = ([ start, end ]) => {
  const valorEnganche = Math.round(valorPropiedadSlider.getValue() * start / 100);
  comprarCasaPorcentajeEnganche.val(`${start}%`);
  comprarCasaValorEnganche.val(formatCurrency(valorEnganche.toString()));

  const valorFinanciamiento = Math.round(valorPropiedadSlider.getValue() * (end - start) / 100);
  comprarCasaPorcentajeFinanciamiento.val(`${end - start}%`);
  comprarCasaValorFinanciamiento.val(formatCurrency(valorFinanciamiento.toString()));

  const valorCofinanciamiento = Math.round(valorPropiedadSlider.getValue() * (100 - end) / 100);
  comprarCasaPorcentajeCofinanciamiento.val(`${100 - end}%`);
  comprarCasaValorCofinanciamiento.val(formatCurrency(valorCofinanciamiento.toString()));

  $('#calcular-card-financiamiento-value').text(formatCurrency(valorFinanciamiento.toString()));

  // Desktop
  $('#porcentajeEnganche').val(`${start}%`);
  $('#valorEnganche').val(formatCurrency(valorEnganche.toString()));
  $('#porcentajeFinanciamiento').val(`${end - start}%`);
  $('#porcentajeCofinanciamiento').val(`${100 - end}%`);
  $('#valorFinanciamiento').val(formatCurrency(valorFinanciamiento.toString()));
  $('#valorCofinanciamiento').val(formatCurrency(valorCofinanciamiento.toString()));
  $('#te-prestamos').text(formatCurrency(valorFinanciamiento.toString()));
};

actualizarEngancheFinanciamiento(20);

valorPropiedadSlider.on('change', ({
  newValue
}) => {
  valorInicialDeLaPropiedad = newValue;
  valorPropiedadText.text(formatCurrency(newValue.toString()));
  actualizarEngancheFinanciamiento(20);
});

comprarCasaEngancheSlider.on('change', ({ newValue }) => actualizarEngancheFinanciamiento(newValue));
comprarCasaEngancheSliderDesktop.on('change', ({ newValue }) => actualizarEngancheFinanciamiento(newValue));
comprarCasaCofinanciamientoSlider.on('change', ({ newValue }) => actualizarCofinanciamiento(newValue));
comprarCasaCofinanciamientoSliderDesktop.on('change', ({ newValue }) => actualizarCofinanciamiento(newValue));

tipoCreditoSelect.change((e) => {
  const selectedOption = e.target.value;
  selectedOption === 'comprar-casa' ? comprarCasaForm.show() : comprarCasaForm.hide();
  selectedOption === 'comprar-terreno' ? comprarCasaForm.show() : comprarCasaForm.hide();
  selectedOption === 'remodelar-casa' ? remodelarCasaForm.show() : remodelarCasaForm.hide();
  selectedOption === 'cambiar-hipoteca' ? cambiarHipotecaForm.show() : cambiarHipotecaForm.hide();
  selectedOption === 'obtener-liquidez' ? obtenerLiquidezForm.show() : obtenerLiquidezForm.hide();
});

$('#obtener-liquidez__select').change((e) => {
  const selectedOption = e.target.value;
  selectedOption === 'monto-que-necesitas' ? $('#obtener-liquidez__monto-que-necesitas').show() : $('#obtener-liquidez__monto-que-necesitas').hide();
  selectedOption === 'mensualidad-que-quieres' ? $('#obtener-liquidez__mensualidad-que-quieres').show() : $('#obtener-liquidez__mensualidad-que-quieres').hide();
  console.log(selectedOption);
});

opcionSimulacionSelect.change((e) => {
  const selectedOption = e.target.value;
  selectedOption === 'monto-que-necesitas' ? comprarCasaMontoQueNecesitas.show() : comprarCasaMontoQueNecesitas.hide();
  if (selectedOption === 'mensualidad-que-quieres') {
    engancheFinanciamientoContainer.hide();
    $('#comprar-casa-mensualidad-que-necesitas').show();
  } else {
    engancheFinanciamientoContainer.show();
    $('#comprar-casa-mensualidad-que-necesitas').hide();
  }
  costoCasaLabel.text(getLabel(selectedOption));
});
terrenoOpcionSimulacionSelect.change((e) => costoTerrenoLabel.text(getLabel(e.target.value)));
remodelarOpcionSimulacionSelect.change((e) => remodelarLabel.text(getLabel(e.target.value)));
obtenerLiquidezOpcionSimulacionSelect.change((e) => obtenerLiquidezLabel.text(getLabel(e.target.value)));

let currentTipoDeCredito = null;

const handleTipoDeCreditoButton = (tipoDeCredito) => {
  currentTipoDeCredito = tipoDeCredito;
  tipoCreditoContainer.hide();
  valorPropiedadContainer.show();
  valorPropiedadLabel.text(getLabel(currentTipoDeCredito));

  if (tipoDeCredito === 'costo-casa') {
    $('#estimar-valor__fill').hide();
    $('#estimar-valor__container').show();
  } else {
    $('#estimar-valor__fill').show();
    $('#estimar-valor__container').hide();
  }
};

const handleConfirmarValorPropiedad = () => {
  valorPropiedadContainer.hide();
  mainForm.show();
  mainFormValorPropiedad.text(formatCurrency(valorInicialDeLaPropiedad.toString()));
  currentTipoDeCredito === 'costo-casa' || currentTipoDeCredito === 'costo-terreno' ? comprarCasaForm.show() : comprarCasaForm.hide();
  currentTipoDeCredito === 'remodelar-casa' ? remodelarCasaForm.show() : remodelarCasaForm.hide();
  currentTipoDeCredito === 'valor-casa' ? cambiarHipotecaForm.show() : cambiarHipotecaForm.hide();
  currentTipoDeCredito === 'valor-casa-liquidez' ? obtenerLiquidezForm.show() : obtenerLiquidezForm.hide();

  if (currentTipoDeCredito === 'costo-terreno') {
    $('#opcion-de-simulacion__select option:eq(0)').text('Valor del terreno');
  } else {
    $('#opcion-de-simulacion__select option:eq(0)').text('Valor de la casa');
  }
};

const amortizacionModal = new bootstrap.Modal(document.getElementById('amortizacion__modal'), {
  backdrop: true,
  keyboard: true,
  focus: true,
});

const masInformacionModal = new bootstrap.Modal(document.getElementById('mas-informacion__modal'), {
  backdrop: true,
  keyboard: true,
  focus: true,
});

const estimarValorModal = new bootstrap.Modal(document.getElementById('estimar-valor__modal'), {
  backdrop: true,
  keyboard: true,
  focus: true,
});

let mesesAPagar = 5;

const updateYearPayments = (el, val) => {
  mesesAPagar = val;
  $('.numero-años-container').each(function()  {
    $(this).children('div').each(function() {
      $(this).css("background-color","#e7e7e7");
      $(this).css("color","#6c757d");
    });
    $(el).css("background-color","#adb5bd");
    $(el).css("color","#fff");
  });
};


const mostrarAmortizacionModal = () => {
  estimarValorModal.hide();
  masInformacionModal.hide();
  amortizacionModal.show();
  const valor = document.getElementById('comprar-casa-valor-financiamiento');
  $('#amortizacion__tbody').empty();
  const periodos = mesesAPagar *  12;
  getTablaAmortizacion(asignarValorPesos(valor), periodos, tBody);
};

const mostarMasInformacionModal = () => {
  estimarValorModal.hide();
  amortizacionModal.hide();
  masInformacionModal.show();
};

const mostrarEstimarValorModal = () =>  {
  $('#estimar-valor__form').show();
  $('#estimar-valor__recomendacion').hide();
  amortizacionModal.hide();
  masInformacionModal.hide();
  estimarValorModal.show();
};

const showCalcularCard = () => {
  $('#calcular__card').show();
  document.querySelector('#calcular__card').scrollIntoView({
    behavior: 'smooth' 
  });
};

const imageHouse = document.getElementById("image__house");
const cardHouse = document.getElementById("card__selecccion--house");
const cardBuilding = document.getElementById("card__selecccion--building");
const imagebuilding = document.getElementById("image__building");
let isSelectedHouse = false;
let isSelectedBuilding = false;

cardHouse.onclick = function (changeImage) {
  isSelectedHouse = !isSelectedHouse;
  if (isSelectedHouse) {
    imageHouse.src = "../img/house-blue.jpeg";
    isSelectedBuilding = false;
    imagebuilding.src = "../img/building-grey.jpeg";
  } else {
    imageHouse.src = "../img/house-grey.jpeg";
  }
}
cardBuilding.onclick = function (changeImageB) {
  isSelectedBuilding = !isSelectedBuilding;
  if (isSelectedBuilding) {
    imagebuilding.src = "../img/building-blue.jpeg";
    isSelectedHouse = false;
    imageHouse.src = "../img/house-grey.jpeg";
  } else {
    imagebuilding.src = "../img/building-grey.jpeg";
  }
}

const obtenerRecomendacion = () => {
  $('#estimar-valor__form').hide();
  $('#estimar-valor__recomendacion').show();
};