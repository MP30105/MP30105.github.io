const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}


const miFormulario = document.querySelector('#miFormulario');

    miFormulario.addEventListener('submit', (event) => {
      event.preventDefault();

      // Crear un objeto JSON vacío
      const jsonData = {};

      // Asignar los valores del formulario como propiedades del objeto JSON
      const elements = event.target.elements;
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (element.name) {
          jsonData[element.name] = element.value;
        }
      }

      // Convertir el objeto JSON a una cadena JSON
      const jsonString = JSON.stringify(jsonData);
      console.log(jsonString);
      mostrar_datos(jsonString);
      formStepsNum++;
      updateFormSteps();
      updateProgressbar();


    });

///Datos
function mostrar_datos(json){

  json = JSON.parse(json);

  console.log(json);

  var datos = document.querySelector('#mostrar_datos');

  datos.innerHTML = `

  <h1>Datos Personales</h1>

  <p>Nombre: ${json.nombre}</p>
  <p>Apellido: ${json.apellido}</p>
  <p>Genero: ${json.genero_personal}</p>
  <p>Idioma: ${json.idioma}</p>
  <p>Localizacion: ${json.localizacion}</p>
  <p>Profesion: ${json.profesion}</p>
  <p>Telefono: ${json.telefono}</p>
  <p>Correo: ${json.correo}</p>


  <h1>Datos Familiares</h1>
  <p>Nombre Del Familiar: ${json.nombre_familiar}</p>
  <p>Apellido Del Familiar: ${json.apellido_familiar}</p>
  <p>Relacion Familiar: ${json.relacion}</p>
  <p>Telefono De Contacto Del Familiar: ${json.telefono_familiar}</p>
  <p>Correo De Contacto Del Familiar: ${json.correo_familiar}</p>
  <p>Detalles Del Familiar: ${json.detalle_familiar}</p>

  <h1>Condicion</h1>
  <p>Enfermedad: ${json.Enfermedad}</p>
  <p>Tiempo De Enfermedad: ${json.Enfermedad_tiempo}</p>
  <p>Detalles De Enfermedad: ${json.detalle_enfermedad}</p>

  <h1>Internamiento</h1>
  <p>Fecha De Ingreso: ${json.fecha_ingreso}</p>
  <p>Centro Medico: ${json.centro_medico}</p>
  <p>Diagnostico: ${json.diagnostico}</p>








  `

}