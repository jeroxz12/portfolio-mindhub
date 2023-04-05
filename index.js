const proyectos = document.querySelectorAll('.proyecto');
const btnBack =  document.getElementById('btnBack');
const btnNext =  document.getElementById('btnNext');

let proyectoClicked = 0;
let contadorCarrousel = 0;
const textoBtnVerMas = 'Ver Mas';
let pToGetDisplayed = "";

const  arrayTextosProyectos = [
    "proyecto1", "proyecto2", "proyecto3", "proyecto4", "proyecto5", "proyecto6"
];


btnBack.addEventListener( 'click', () => {
    accionarSlide("back");

})
btnNext.addEventListener( 'click', () => {
    accionarSlide("next");
})
const accionarSlide = (accion) => {
    if(contadorCarrousel > 0 || contadorCarrousel < 5){
    if(accion.toLowerCase() === 'next'){
        contadorCarrousel++;
        proyectos[contadorCarrousel - 1].style.display = 'none'
        proyectos[contadorCarrousel].style.display = 'flex'
    } else if (accion.toLowerCase() === 'back') {
        contadorCarrousel--;
        proyectos[contadorCarrousel + 1].style.display = 'none'
        console.log(proyectos[contadorCarrousel + 1].childNodes);
        proyectos[contadorCarrousel].style.display = 'flex'             

    } else {

    }
    } else {
        contadorCarrousel > 5 ? contadorCarrousel = 0 : contadorCarrousel = 5;
        return;
    }
}
const getButton = (linkClicked) => {
    for (let index = 0; index < arrayTextosProyectos.length; index++) {
        if ((linkClicked - 1) === index){
            pToGetDisplayed = arrayTextosProyectos[index];
            proyectoClicked = index;
        }
    }
    displayProyectoDesc();

}
const displayProyectoDesc = () => {
    let proyectoSeleccionado = proyectos[proyectoClicked].children[0];
    if( proyectoSeleccionado.style.display == 'none'){
            proyectoSeleccionado.style.display = 'block';
            // proyectoSeleccionado.textContent = arrayTextosProyectos[proyectoClicked - 1];
            proyectos[proyectoClicked].childNodes[3].classList.remove('proyecto_link')
            proyectos[proyectoClicked].childNodes[3].classList.add('proyecto_link_close')
            proyectos[proyectoClicked].childNodes[3].textContent = 'X'
    } else {
            proyectoSeleccionado.style.display = 'none';
            proyectos[proyectoClicked].childNodes[3].classList.remove('proyecto_link_close')
            proyectos[proyectoClicked].childNodes[3].classList.add('proyecto_link')
            proyectos[proyectoClicked].childNodes[3].textContent = 'Ver Mas'
    }
}
