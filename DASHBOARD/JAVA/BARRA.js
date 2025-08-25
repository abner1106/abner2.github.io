// Datos de productos (simulados)
const products = [
    // Cervezas ($35-$80)
    { id: 1, name: 'Modelo Especial Media', category: 'cervezas', price: 40, description: '', image: 'images/bebidas/cervezas/MODELO_ESPECIAL_MEDIA.png' },
    { id: 2, name: 'Heineken 00 Lata', category: 'cervezas', price: 40, description: '', image: 'images/bebidas/cervezas/HINEKEN_00_LATA.png' },
    { id: 3, name: 'Corona Lata', category: 'cervezas', price: 35, description: '', image: 'images/bebidas/cervezas/CORONA_LATA.png' },
    { id: 4, name: 'Mega Corona', category: 'cervezas', price: 80, description: '', image: 'images/bebidas/cervezas/MEGA_CORONA.png' },
    { id: 5, name: 'Mega Vic', category: 'cervezas', price: 80, description: '', image: 'images/bebidas/cervezas/MEGA_VIC.png' },
    { id: 6, name: 'Mega Lagger', category: 'cervezas', price: 80, description: '', image: 'images/bebidas/cervezas/MEGA_LAGGER.png' },
    { id: 7, name: 'Mega Modelo Especial', category: 'cervezas', price: 80, description: '', image: 'images/bebidas/cervezas/MEGA_MODELO_ESPECIAL.png' },
    { id: 8, name: 'Mega Pacífico', category: 'cervezas', price: 80, description: '', image: 'images/bebidas/cervezas/MEGA_PACIFICO.png' },
    { id: 9, name: 'Corona Media', category: 'cervezas', price: 35, description: '', image: 'images/bebidas/cervezas/CORONA_MEDIA.png' },
    { id: 10, name: 'Victoria Media', category: 'cervezas', price: 35, description: '', image: 'images/bebidas/cervezas/VICTORIA_MEDIA.png' },
    { id: 11, name: 'Pacífico Media', category: 'cervezas', price: 40, description: '', image: 'images/bebidas/cervezas/PACIFICO_MEDIA.png' },
    { id: 12, name: 'XX Media', category: 'cervezas', price: 35, description: '', image: 'images/bebidas/cervezas/XX_MEDIA.png' },
    { id: 13, name: 'Heineken Media', category: 'cervezas', price: 40, description: '', image: 'images/bebidas/cervezas/HINEKEN_MEDIA.png' },
    { id: 14, name: 'Amstel Ultra Media', category: 'cervezas', price: 40, description: '', image: 'images/bebidas/cervezas/AMSTEL_ULTRA_MEDIA.png' },
    { id: 15, name: 'Modelo Oscura Media', category: 'cervezas', price: 40, description: '', image: 'images/bebidas/cervezas/MODELO_OSCURA_MEDIA.png' },

    // Drinks ($130-$160)
    { id: 16, name: 'Apple King', category: 'drinks', price: 130, description: 'Bebida fuerte y deliciosa con esencia de manzana', image: 'images/bebidas/APPLE_KING-removebg-preview.png' },
    { id: 17, name: 'Asteroide', category: 'drinks', price: 135, description: 'Cóctel cítrico y burbujeante', image: 'images/bebidas/ASTEROIDE-removebg-preview.png' },
    { id: 19, name: 'Ponche Saurio', category: 'drinks', price: 150, description: 'Mezcla de ponche con un toque exótico', image: 'images/bebidas/PONCHE_SAURIO-removebg-preview.png' },
    { id: 20, name: 'Rayo Tropical', category: 'drinks', price: 145, description: 'Explosión tropical en cada sorbo', image: 'images/bebidas/RAYO_TROPICAL-removebg-preview.png' },
    { id: 21, name: 'Extinción', category: 'drinks', price: 160, description: 'Cóctel rojo intenso y dulce', image: 'images/bebidas/Xtincion.png' },
    { id: 22, name: 'Tamarindo Hell', category: 'drinks', price: 155, description: 'Bebida fuerte con notas frutales oscuras', image: 'images/bebidas/Tamarindo_hell.png' },
    { id: 23, name: 'Tricera Mango', category: 'drinks', price: 155, description: 'Bebida fuerte sabor manguito', image: 'images/bebidas/TREICERMANGO.png' },
    { id: 24, name: 'Mandarin Punch', category: 'drinks', price: 155, description: 'Bebida sabor Naranja mandarina', image: 'images/bebidas/Mandarinpunch.png' },
    { id: 25, name: 'Apple Queen', category: 'drinks', price: 145, description: 'Refrescante bebida con sabor a manzana y un toque de alcohol', image: 'images/bebidas/APPLE_QUEEN.png' },
    { id: 26, name: 'Mojito Limón', category: 'drinks', price: 145, description: 'Cóctel clásico con limón y hierbabuena, ligeramente gasificado', image: 'images/bebidas/MOJITO_LIMON.png' },
    { id: 18, name: 'Linterna Verde Smash', category: 'drinks', price: 150, description: 'Cóctel vibrante con sabores cítricos y un toque refrescante', image: 'images/bebidas/LINTERNA_VERDE_SMASH.png' },
    { id: 21, name: 'Tequila Rex', category: 'drinks', price: 155, description: 'Tequila fuerte con un rugido jurásico, ideal para valientes', image: 'images/bebidas/TEQUILA_REX.png' },
    { id: 22, name: 'Jurassic Island', category: 'drinks', price: 155, description: 'Cóctel de manzana verde con una explosión de sabor jurásico', image: 'images/bebidas/Jurassic_Island.png' },
    { id: 23, name: 'Summer Drink', category: 'drinks', price: 145, description: 'Bebida dulce y veraniega, ideal para días calurosos', image: 'images/bebidas/SUMMER_dRINK.png' },
    { id: 33, name: 'Blodi Sandgria', category: 'drinks', price: 150, description: 'Bebida refrescante con vino y frutas rojas', image: 'images/bebidas/BLODI_SANGRIA.png'},
    { id: 33, name: 'Ultra Violeta', category: 'drinks', price: 150, description: 'Bebida refrescante de sabor uva y mora', image: 'images/bebidas/ULTRAVIOLETA.png'},
    { id: 35, name: 'Banquio Sandia', category: 'drinks', price: 150, description: 'Bebida refrescante de sabor sandia', image: 'images/bebidas/BRANQUIO_SANDIA.png'},
    { id: 37, name: 'Bombonsita', category: 'drinks', price: 160, description: 'Bebida dulce con bealys', image: 'images/bebidas/BOMBONCITA.png'},

    // Miches ($140-$170)
    { id: 35, name: 'Miche Maracuyá Grande', category: 'miches', price: 125, description: 'Michelada grande con jugo natural de maracuyá', image: 'images/bebidas/MICHE_MARACUYA_GRANDE.png' },
    { id: 36, name: 'Miche Cubana Grande', category: 'miches', price: 125, description: 'Michelada estilo cubano con salsas y limón', image: 'images/bebidas/MICHE_CUBANA_GRANDE.png' },
    { id: 37, name: 'GoMichela Grande Mango', category: 'miches', price: 1, description: 'Michelada con mango natural y chile en polvo', image: 'images/bebidas/MICHE_GRANDE_MANGO.png' },

    
    // Azulitos ($130-$150)
    { id: 19, name: 'Azulito Smash', category: 'azulitos', price: 150, description: 'Bebida azul intensa con sabor dulce y tropical', image: 'images/bebidas/AZULITO_SMASH.png' },
    { id: 20, name: 'Azulito Saurio', category: 'azulitos', price: 150, description: 'Versión electrizante del azulito con un giro jurásico', image: 'images/bebidas/AZULITO_SAURIO.png' },
    { id: 18, name: 'Azulito Frost', category: 'azulitos', price: 140, description: 'Bebida Dulce con sabor a mora azul', image: 'images/bebidas/AZULITO_FROST-removebg-preview.png' },
    { id: 21, name: 'Pati Azulito', category: 'azulitos', price: 150, description: 'Versión Cute del azulito', image: 'images/bebidas/PATI_AZULITO.png' },
    { id: 22, name: 'SKY Azulito', category: 'azulitos', price: 150, description: 'Versión fuerte del azulito', image: 'images/bebidas/SKY_AZULITO.png' },

    
    // Tritones ($600)
    { id: 33, name: 'Tritón De Azulito', category: 'tritones', price: 600, description: 'Botella grande para compartir', image: 'images/bebidas/triton_azulito.png' },
    { id: 34, name: 'Tritón De 3L', category: 'tritones', price: 600, description: 'Cervesa Al Gusto', image: 'images/bebidas/TRITON3.PNG' },
    { id: 35, name: 'Tritón de 5L', category: 'tritones', price: 600, description: 'Cervesa Al Gusto', image: 'images/bebidas/TRITON5.PNG' },
    
    // Alimentos ($125-$150)
    
    { id: 38, name: 'Palomitas', category: 'alimentos', price: 12, description: 'Palomitas clásicas con mantequilla y sal', image: 'images/alimentos/PALOMITAS.png' },
    { id: 39, name: 'Chicharrienes', category: 'alimentos', price: 12, description: 'Crujientes chicharrines con salsa y limón', image: 'images/alimentos/CHICHARRINES.png' },
    { id: 40, name: 'Alitas Habanero (6pz)', category: 'alimentos', price: 155, description: '6 alitas bañadas en salsa habanero picante', image: 'images/alimentos/ALITAS_HABANERO.png' },
    { id: 41, name: 'Alitas BBQ (6pz)', category: 'alimentos', price: 155, description: '6 alitas en deliciosa salsa BBQ', image: 'images/alimentos/ALITAS_BBQ.png' },
    { id: 41, name: 'Papas A la Francesa', category: 'alimentos', price: 155, description: 'Deliciosas papitas naturales echas al momento', image: 'images/alimentos/PAPAS_FRANCESAS.png' },

    
    // Promos ($130-$160)
    { id: 39, name: 'Rachas', category: 'promos', price: 130, description: '1 cerveza + porción de alitas', image: 'images/PROMOS/TIK_TOK.jpg' },
    { id: 40, name: 'Cumpleaños', category: 'promos', price: 160, description: 'Lleva 2 drinks por el precio de 1', image: 'images/PROMOS/CUMPLEAÑOS.jpg' },
    { id: 41, name: 'Triton de Viernes', category: 'promos', price: 150, description: '2 bebidas + nachos grandes', image: 'images/PROMOS/TRITON_AZULITO.jpg' }
];

// Estado de la aplicación
let currentOrder = {
    tableNumber: 1,
    items: [],
    specialRequests: [],
    total: 0
};

// Elementos del DOM
const orderItemsEl = document.getElementById('order-items');
const specialRequestsEl = document.getElementById('special-requests');
const totalAmountEl = document.getElementById('total-amount');
const tableNumberEl = document.getElementById('table-number');
const currentTimeEl = document.getElementById('current-time');
const meseroNameEl = document.getElementById('mesero-name');
const cancelOrderBtn = document.getElementById('cancel-order');
const confirmOrderBtn = document.getElementById('confirm-order');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    updateTime();
    setInterval(updateTime, 60000); // Actualizar cada minuto
    
    // Simular datos del mesero (en una app real esto vendría de autenticación)
    meseroNameEl.textContent = "Juan Pérez";
    
    // Simular pedido de ejemplo
    simulateOrder();
    
    // Event listeners
    cancelOrderBtn.addEventListener('click', cancelOrder);
    confirmOrderBtn.addEventListener('click', confirmOrder);
});

// Funciones
function updateTime() {
    const now = new Date();
    currentTimeEl.textContent = now.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
}

function simulateOrder() {
    // Limpiar pedido anterior
    currentOrder.items = [];
    currentOrder.specialRequests = [];
    currentOrder.total = 0;
    
    // Seleccionar mesa aleatoria (1-20)
    currentOrder.tableNumber = Math.floor(Math.random() * 20) + 1;
    
    // Agregar algunos productos aleatorios
    const randomItems = getRandomItems(products, 3);
    randomItems.forEach(item => {
        addItemToOrder(item);
    });
    
    // Agregar algunas peticiones especiales
    const specialRequests = [
        "Sin hielo",
        "Extra limón",
        "Picante al 50%",
        "Servir en vaso alto",
        "Sin sal en el borde"
    ];
    
    const randomRequests = getRandomItems(specialRequests, 2);
    randomRequests.forEach(request => {
        addSpecialRequest(request);
    });
    
    // Actualizar la UI
    updateOrderUI();
}

function getRandomItems(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function addItemToOrder(product) {
    currentOrder.items.push({
        id: product.id,
        name: product.name,
        price: product.price
    });
    
    currentOrder.total += product.price;
}

function addSpecialRequest(request) {
    currentOrder.specialRequests.push(request);
}

function updateOrderUI() {
    // Actualizar número de mesa
    tableNumberEl.textContent = currentOrder.tableNumber;
    
    // Actualizar items del pedido
    orderItemsEl.innerHTML = '';
    
    if (currentOrder.items.length === 0) {
        orderItemsEl.innerHTML = '<div class="empty-order">No hay productos en el pedido</div>';
    } else {
        currentOrder.items.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'order-item';
            itemEl.innerHTML = `
                <span class="item-name">${item.name}</span>
                <span class="item-price">$${item.price.toFixed(2)}</span>
            `;
            orderItemsEl.appendChild(itemEl);
        });
    }
    
    // Actualizar peticiones especiales
    specialRequestsEl.innerHTML = '';
    
    if (currentOrder.specialRequests.length === 0) {
        specialRequestsEl.innerHTML = '<div class="empty-requests">No hay peticiones especiales</div>';
    } else {
        currentOrder.specialRequests.forEach(request => {
            const requestEl = document.createElement('div');
            requestEl.className = 'request-item';
            requestEl.textContent = request;
            specialRequestsEl.appendChild(requestEl);
        });
    }
    
    // Actualizar total
    totalAmountEl.textContent = `$${currentOrder.total.toFixed(2)}`;
}

function cancelOrder() {
    // Animación de cancelación
    confirmOrderBtn.classList.remove('pulse');
    cancelOrderBtn.classList.add('pulse');
    
    // Simular nuevo pedido después de 1 segundo
    setTimeout(() => {
        cancelOrderBtn.classList.remove('pulse');
        simulateOrder();
    }, 1000);
}

function confirmOrder() {
    // Animación de confirmación
    cancelOrderBtn.classList.remove('pulse');
    confirmOrderBtn.classList.add('pulse');
    
    // Aquí iría la lógica para enviar el pedido al servidor
    console.log('Pedido confirmado:', currentOrder);
    
    // Simular nuevo pedido después de 1.5 segundos
    setTimeout(() => {
        confirmOrderBtn.classList.remove('pulse');
        simulateOrder();
        
        // Mostrar notificación de éxito
        showNotification('Pedido enviado con éxito');
    }, 1500);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

// Estilos para la notificación (se pueden agregar al CSS)
const style = document.createElement('style');
style.textContent = `
.notification {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--neon-green);
    color: var(--darker-bg);
    padding: 15px 30px;
    border-radius: var(--border-radius);
    font-weight: bold;
    box-shadow: 0 0 20px var(--neon-green);
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: 1000;
}

.notification.show {
    opacity: 1;
}
`;
document.head.appendChild(style);