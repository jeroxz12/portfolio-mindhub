const proyectos = [{
                id: 1 ,
                titulo: "Proyecto 1",
                descripcion: "Este es mi proyecto numero 1",
                imagen: "./assets/img/logos/logo-javascript.svg"
            },{
                id: 2 ,
                titulo: "Proyecto 2",
                descripcion: "Este es mi proyecto numero 2",
                imagen: "./assets/img/logos/logo-javascript.svg"
            },{
                id: 3 ,
                titulo: "Proyecto 3",
                descripcion: "Este es mi proyecto numero 3",
                imagen: "./assets/img/logos/logo-javascript.svg"
            },{
                id: 4 ,
                titulo: "Proyecto 4",
                descripcion: "Este es mi proyecto numero 4",
                imagen: "./assets/img/logos/logo-javascript.svg"
            }];
          
// Variables y Constantes de carrousel
let carousselIndex = 0;

const btnBack = document.getElementById('btnBack');
const btnNext = document.getElementById('btnNext');
const divProyecto = document.querySelector('.proyecto').childNodes[1];
const btnVerMas = document.querySelector('.proyecto_link');
const parrafoDesc = document.querySelector('.proyecto_desc');
const main = document.querySelector('.main');
// Constantes del menu hamburguesa
const btnCerrarMenu = document.getElementById('btnCerrarMenu');
const btnAbrirMenu = document.getElementById('btnAbrirMenu');
const sidebar = document.getElementById('sidebar');
// Eventos y Funciones del menu
btnAbrirMenu.addEventListener('click', () => {
    sidebar.style.display = 'grid';
    btnAbrirMenu.style.display = 'none';

})
btnCerrarMenu.addEventListener('click', () => {
    sidebar.style.display = 'none';
    btnAbrirMenu.style.display = 'inline-block';
})

// Eventos y funciones del carrousel
btnNext.addEventListener('click', () => {
    carousselIndex += 1
    if(carousselIndex > 3 ){
        carousselIndex = 0
    }
    cambiarInfoDeProyecto(carousselIndex)
    cerrarParrafo()

})
btnBack.addEventListener('click', () => {
    carousselIndex -= 1
    if(carousselIndex < 0 ){
        carousselIndex = 3
    }
    cambiarInfoDeProyecto(carousselIndex)
    cerrarParrafo()
})
btnVerMas.addEventListener('click', () => {
    if(!divProyecto.classList.contains('proyecto_desc_hidden')){
        divProyecto.classList.toggle('proyecto_desc_hidden')
        btnVerMas.textContent = 'Ver Mas'
    
    } else{
        divProyecto.classList.remove('proyecto_desc_hidden')
        btnVerMas.textContent = 'Ver Menos'
    }
})
const cerrarParrafo = () => {
    divProyecto.classList.add('proyecto_desc_hidden')
        btnVerMas.textContent = 'Ver Mas'

}
const cambiarInfoDeProyecto = (index) => {
    divProyecto.childNodes[1].textContent = proyectos[index].titulo;
    divProyecto.childNodes[3].textContent = proyectos[index].descripcion; 
}

cambiarInfoDeProyecto(carousselIndex)
