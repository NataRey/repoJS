const adminUser = "admin";
const adminPass = "admin123";
let isAdmin = false;

// array para almacenar los productos creados

const listaProductos = [
    {
        nombre: "Camiseta",
        precio: 45000,
        img: "https://tse3.mm.bing.net/th/id/OIP._zNgkIn-5bVVrMLX3VGycgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
];


// traer los elementos del DOM
const login = document.getElementById("login");
const logout = document.getElementById("logout");
const loginSection = document.getElementById("login-section");
const userInput = document.getElementById("user-input");
    const passInput = document.getElementById("pass-input");
const btnLogin = document.getElementById("boton-login");
const errorLogin = document.getElementById("error-login");
const adminSection = document.getElementById("admin-section");
const formProduct = document.getElementById("form-product");
const inputName = document.getElementById("name");
const inputPrice = document.getElementById("price");
const inputImg = document.getElementById("img");
const btnSave = document.getElementById("save");
const storeSection = document.getElementById("store-section");
const products = document.getElementById("products");


// estado incial de la vista 
errorLogin.classList.add("hidden");
adminSection.classList.add("hidden");
logout.classList.add("hidden");


// renderizar productos 

renderizarProductos();



// logica para validar el logueo

login.addEventListener("click", ()=>{
    loginSection.classList.toggle("hidden");
});

btnLogin.addEventListener("click", ()=>{
    const user = userInput.value;
    const pass = passInput.value;

    if(user === adminUser && pass === adminPass){
        isAdmin = true;

        loginSection.classList.add("hidden");
        adminSection.classList.remove("hidden");

        login.classList.add("hidden");
        logout.classList.remove("hidden");

        errorLogin.classList.add("hidden");
        userInput.value = "";
        passInput.value = "";
    }else{
        errorLogin.classList.remove("hidden");
    }
});


// cerrar sesion 
logout.addEventListener("click" , ()=>{
    isAdmin = false;
    adminSection.classList.add("hidden");
    logout.classList.add("hidden");
    login.classList.remove("hidden");
});


// guardar los productos desde el formulario

formProduct.addEventListener("submit", (x)=>{
    x.preventDefault();

    const nuevoProducto ={
        nombre: inputName.value,
        precio: inputPrice.value,
        img: inputImg.value, 
    };

    listaProductos.push(nuevoProducto);

    renderizarProductos();

    //limpiar formulario

    formProduct.reset();

});

function renderizarProductos(){
    products.innerHTML = "";


    listaProductos.forEach((prod , index)=>{
        const card = document.createElement("div");
        card.classList.add("card-producto");

        card.innerHTML = `
        <img src = "${prod.img}" alt="${prod.nombre}" width = "150">
        <h3>${prod.nombre}</h3>
        <p>Precio: $${prod.precio}</p>
        <button onclick = "comprar('${prod.nombre}')">Comprar</button>
        <button onclick = "editarProducto('${index}')">Editar</button>
        <button onclick = "eliminarProducto('${index}')">Eliminar</button>

        `;

        products.appendChild(card);
    });
}

window.comprar = function(nombre){
    alert(`Compra exitosa de: ${nombre}`);

    renderizarProductos();
};

window.editarProducto = function(index){
    const producto = listaProductos[index];
    const nuevoNombre = prompt("Nuevo nombre del producto ", producto.nombre);
    const nuevoPrecio = prompt("Nuevo precio del producto: ", producto.precio);
    const nuevaImg = prompt("Nueva URL de imagen ", producto.img);

    if(nuevoNombre !== null && nuevoPrecio !== null){
        listaProductos[index]={
            nombre: nuevoNombre,
            precio: nuevoPrecio,
            img: nuevaImg || producto.img
        };

        renderizarProductos();
    }

}

window.eliminarProducto = function(index){
    listaProductos.splice(index, 1);

    renderizarProductos();
}
















