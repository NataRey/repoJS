//1. CAPTURAR DE ELEMENTOAS DEL HTML

const btnClick = document.getElementById('btnClick');
const inputLetras = document.getElementById('inputLetras');
const selectOption = document.getElementById('selectOption');
const fomularioDemo = document.getElementById('fomularioDemo');
const inputNombreForm = document.getElementById('inputNombreForm');


btnClick.addEventListener('click', ()=>{
    alert("El usaurio hizo clic")
});

inputLetras.addEventListener('input', (e)=>{
    const textoActual = e.target.value;
    if(textoActual.trim() ===""){
        alert("El campo esta vacio");
    }else{
        alert(`El usuario escribio ${textoActual}`);
    }
});

selectOption.addEventListener('change',(e)=>{
    const opcionSeleccionada = e.target.value;
    if(opcionSeleccionada === ""){
        alert("El usuario dejo una opcion vacia");
    }else{
        alert(`El usuario cambio de opcion y esa opcion es: ${opcionSeleccionada}`);
    }
});


fomularioDemo.addEventListener('submit', (e)=>{
    const nombreIngresado = inputNombreForm.value;
    alert(`Formulario enviado con el nombre ingresado: [${nombreIngresado}]`);
    fomularioDemo.reset();
});



