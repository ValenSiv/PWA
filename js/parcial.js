const baseDeDatos = [
    {
        id: 1,
        nombre: 'Camiseta Boca Juniors 1970',
        descripcion: 'Camiseta retro titular temporada 1970 con escudo',
        precio: 1000,
        imagen: './css/img/remera-1.jpg'
    },
    {
        id: 2,
        nombre: 'Camiseta Boca Juniors 1981',
        descripcion: 'Camiseta retro Diego Armando Maradona temporada 1981',
        precio: 2000,
        imagen: './css/img/remera-2.jpg'
    },
    {
        id: 3,
        nombre: 'Camiseta Boca Juniors 1991',
        descripcion: 'Camiseta retro suplente Fiat temporada 1991',
        precio: 3000,
        imagen: './css/img/remera-3.jpg'
    },
    {
        id: 4,
        nombre: 'Camiseta Boca Juniors 1987',
        descripcion: 'Camiseta retro suplente Parmalat edicion 1987',
        precio: 4000,
        imagen: './css/img/remera-4.jpg'
    },
    {
        id: 5,
        nombre: 'Camiseta Boca Juniors 1975',
        descripcion: 'Camiseta retro Chapa Suñe temporada 1970',
        precio: 5000,
        imagen: './css/img/remera-5.jpg'
    },
    {
        id: 6,
        nombre: 'Camiseta Boca Juniors 1994',
        descripcion: 'Camiseta retro titular Parmalat temporada 1994',
        precio: 6000,
        imagen: './css/img/remera-6.jpg '
    },
    {
        id: 7,
        nombre: 'Camiseta Boca Juniors 1985',
        descripcion: 'Camiseta retro titular Adidas temporada 1985',
        precio: 3500,
        imagen: './css/img/remera-7.jpg'
    },
    {
        id: 8,
        nombre: 'Camiseta Boca Juniors 2000',
        descripcion: 'Camiseta retro suplente temporada 2000',
        precio: 4500,
        imagen: './css/img/remera-8.jpg'
    },
    {
        id: 9,
        nombre: 'Camiseta Boca Juniors 2004',
        descripcion: 'Camiseta retro alternativa Megatone blanca temporada 2004',
        precio: 6000,
        imagen: './css/img/remera-9.jpg'
    }
    
]

let carrito = [];
let total = 0;
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMmodal = document.querySelector('#modal');


function renderizarProductos() {
    baseDeDatos.forEach((info) => {

        const div = document.createElement('div');

        const tarjetas = document.createElement('div');
        tarjetas.classList.add("a");

        const Title = document.createElement('h5');

        Title.textContent = info.nombre;

        const Imagen = document.createElement('img');
        Imagen.classList.add("imagen_card");

        Imagen.setAttribute('src', info.imagen);
        const descripcion = document.createElement('p');
        descripcion.textContent = info.descripcion;
        const Precio = document.createElement('p');
        Precio.classList.add("precio");
        Precio.textContent = info.precio + '$';
        
        const Boton = document.createElement('button');
        Boton.textContent = 'Agregar al carrito';
        Boton.setAttribute('marcador', info.id);
        Boton.addEventListener('click', agregarProducto);

        tarjetas.appendChild(Imagen);
        tarjetas.appendChild(Title);
        tarjetas.appendChild(descripcion);
        tarjetas.appendChild(Precio);
        tarjetas.appendChild(Boton);
        div.appendChild(tarjetas);
        DOMitems.appendChild(div);
    });

}

function agregarProducto(evento) {

    carrito.push(evento.target.getAttribute('marcador'))

    calcularTotal();

    renderizarCarrito();

}


function renderizarCarrito() {

    DOMcarrito.textContent = '';

    const carritoSinDuplicados = [...new Set(carrito)];

    carritoSinDuplicados.forEach((item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });

        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);

        const miNodo = document.createElement('li');

        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}$`;
        const miBoton = document.createElement('button');
        DOMcarrito.appendChild(miNodo);
    });
}


function calcularTotal() {
    total = 0;
    carrito.forEach((item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        total = total + miItem[0].precio;
    });
    DOMtotal.textContent = `Pagás: $${total}`;
}



renderizarProductos();

