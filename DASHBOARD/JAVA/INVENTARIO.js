// Datos de inventario
const inventoryData = [
    // Cervezas
    { id: 1, name: 'Corona Media', category: 'cervezas', stock: 70, minStock: 20, image: 'images/cerveza-corona.png' },
    { id: 2, name: 'Modelo Especial Media', category: 'cervezas', stock: 65, minStock: 20, image: 'images/cerveza-modelo.png' },
    { id: 3, name: 'Victoria Media', category: 'cervezas', stock: 45, minStock: 20, image: 'images/cerveza-victoria.png' },
    { id: 4, name: 'Heineken Lata', category: 'cervezas', stock: 38, minStock: 15, image: 'images/cerveza-heineken.png' },
    { id: 5, name: 'Mega Corona', category: 'cervezas', stock: 22, minStock: 10, image: 'images/cerveza-mega-corona.png' },
    { id: 6, name: 'Mega Modelo', category: 'cervezas', stock: 18, minStock: 10, image: 'images/cerveza-mega-modelo.png' },
    
    // Licores
    { id: 7, name: 'Vodka Smirnoff', category: 'licores', stock: 8, minStock: 3, image: 'images/vodka-smirnoff.png' },
    { id: 8, name: 'Bacardí Blanco', category: 'licores', stock: 6, minStock: 2, image: 'images/bacardi-blanco.png' },
    { id: 9, name: 'Blue Curaçao', category: 'licores', stock: 4, minStock: 2, image: 'images/blue-curacao.png' },
    { id: 10, name: 'Brandy Presidente', category: 'licores', stock: 5, minStock: 2, image: 'images/brandy-presidente.png' },
    { id: 11, name: 'Whisky Buchanan\'s', category: 'licores', stock: 7, minStock: 2, image: 'images/whisky-buchanans.png' },
    { id: 12, name: 'Tequila José Cuervo', category: 'licores', stock: 9, minStock: 3, image: 'images/tequila-cuervo.png' },
    
    // Refrescos
    { id: 13, name: 'Coca-Cola 600ml', category: 'refrescos', stock: 48, minStock: 20, image: 'images/coca-cola.png' },
    { id: 14, name: 'Sprite 600ml', category: 'refrescos', stock: 36, minStock: 15, image: 'images/sprite.png' },
    { id: 15, name: 'Fanta 600ml', category: 'refrescos', stock: 32, minStock: 15, image: 'images/fanta.png' },
    { id: 16, name: 'Jarritos Mandarina', category: 'refrescos', stock: 28, minStock: 10, image: 'images/jarritos-mandarina.png' },
    { id: 17, name: 'Agua Mineral 1L', category: 'refrescos', stock: 40, minStock: 15, image: 'images/agua-mineral.png' },
    
    // Ingredientes
    { id: 18, name: 'Limones', category: 'ingredientes', stock: 120, minStock: 50, image: 'images/limones.png' },
    { id: 19, name: 'Hierbabuena', category: 'ingredientes', stock: 15, minStock: 5, image: 'images/hierbabuena.png' },
    { id: 20, name: 'Azúcar', category: 'ingredientes', stock: 8, minStock: 3, image: 'images/azucar.png' },
    { id: 21, name: 'Sal', category: 'ingredientes', stock: 10, minStock: 3, image: 'images/sal.png' },
    { id: 22, name: 'Hielo', category: 'ingredientes', stock: 0, minStock: 5, image: 'images/hielo.png' },
    
    // Limpieza
    { id: 23, name: 'Detergente', category: 'limpieza', stock: 3, minStock: 2, image: 'images/detergente.png' },
    { id: 24, name: 'Desinfectante', category: 'limpieza', stock: 2, minStock: 1, image: 'images/desinfectante.png' },
    { id: 25, name: 'Trapo de Cocina', category: 'limpieza', stock: 12, minStock: 5, image: 'images/trapo-cocina.png' },
    { id: 26, name: 'Toallas de Papel', category: 'limpieza', stock: 8, minStock: 3, image: 'images/toallas-papel.png' },
    { id: 27, name: 'Jabón para Manos', category: 'limpieza', stock: 4, minStock: 2, image: 'images/jabon-manos.png' }
];

// Estado de la aplicación
let currentInventory = [...inventoryData];
let currentFilter = 'all';
let currentSearch = '';

// Elementos del DOM
const inventoryGridEl = document.getElementById('inventory-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');
const lastUpdateEl = document.getElementById('last-update');
const totalProductsEl = document.getElementById('total-products');
const lowStockEl = document.getElementById('low-stock');
const outOfStockEl = document.getElementById('out-of-stock');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    updateLastUpdate();
    renderInventory();
    updateSummary();
    
    // Event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.category;
            renderInventory();
        });
    });
    
    searchInput.addEventListener('input', () => {
        currentSearch = searchInput.value.toLowerCase();
        renderInventory();
    });
});

// Funciones
function updateLastUpdate() {
    const now = new Date();
    const formattedDate = now.toLocaleString('es-MX', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    lastUpdateEl.textContent = formattedDate;
}

function renderInventory() {
    inventoryGridEl.innerHTML = '';
    
    let filteredItems = [...currentInventory];
    
    // Aplicar filtro de categoría
    if (currentFilter !== 'all') {
        filteredItems = filteredItems.filter(item => item.category === currentFilter);
    }
    
    // Aplicar búsqueda
    if (currentSearch) {
        filteredItems = filteredItems.filter(item => 
            item.name.toLowerCase().includes(currentSearch)
        );
    }
    
    // Ordenar por stock (agotados primero, luego bajos, luego normales)
    filteredItems.sort((a, b) => {
        const aStatus = getStockStatus(a);
        const bStatus = getStockStatus(b);
        
        if (aStatus === 'out' && bStatus !== 'out') return -1;
        if (aStatus !== 'out' && bStatus === 'out') return 1;
        if (aStatus === 'low' && bStatus === 'normal') return -1;
        if (aStatus === 'normal' && bStatus === 'low') return 1;
        return 0;
    });
    
    // Renderizar items
    filteredItems.forEach(item => {
        const stockStatus = getStockStatus(item);
        
        const itemEl = document.createElement('div');
        itemEl.className = 'inventory-item';
        
        // Determinar clase de stock
        let stockClass = '';
        if (stockStatus === 'low') stockClass = 'low-stock';
        if (stockStatus === 'out') stockClass = 'out-of-stock';
        
        itemEl.innerHTML = `
            <div class="item-header">
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <span class="item-category">${item.category}</span>
                </div>
            </div>
            <div class="item-stock">
                <div class="stock-info">
                    <span class="stock-label">En stock</span>
                    <span class="stock-amount ${stockClass}">${item.stock}</span>
                </div>
                <div class="stock-controls">
                    <button class="stock-btn remove" data-id="${item.id}">
                        <i class="fas fa-minus"></i>
                    </button>
                    <button class="stock-btn add" data-id="${item.id}">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        
        inventoryGridEl.appendChild(itemEl);
    });
    
    // Agregar event listeners a los botones
    document.querySelectorAll('.stock-btn.add').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.dataset.id);
            addStock(id);
        });
    });
    
    document.querySelectorAll('.stock-btn.remove').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.dataset.id);
            removeStock(id);
        });
    });
}

function getStockStatus(item) {
    if (item.stock === 0) return 'out';
    if (item.stock <= item.minStock) return 'low';
    return 'normal';
}

function addStock(id) {
    const itemIndex = currentInventory.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        currentInventory[itemIndex].stock += 1;
        updateLastUpdate();
        renderInventory();
        updateSummary();
        animateUpdate(id);
    }
}

function removeStock(id) {
    const itemIndex = currentInventory.findIndex(item => item.id === id);
    if (itemIndex !== -1 && currentInventory[itemIndex].stock > 0) {
        currentInventory[itemIndex].stock -= 1;
        updateLastUpdate();
        renderInventory();
        updateSummary();
        animateUpdate(id);
    }
}

function animateUpdate(id) {
    const itemEl = document.querySelector(`.inventory-item[data-id="${id}"]`);
    if (itemEl) {
        itemEl.classList.add('update-animation');
        setTimeout(() => {
            itemEl.classList.remove('update-animation');
        }, 500);
    }
}

function updateSummary() {
    const totalProducts = currentInventory.length;
    const lowStock = currentInventory.filter(item => getStockStatus(item) === 'low').length;
    const outOfStock = currentInventory.filter(item => getStockStatus(item) === 'out').length;
    
    totalProductsEl.textContent = totalProducts;
    lowStockEl.textContent = lowStock;
    outOfStockEl.textContent = outOfStock;
}

// Función para simular datos iniciales (en una app real esto vendría de una API)
function simulateInitialData() {
    // Ya tenemos los datos en inventoryData
    currentInventory = [...inventoryData];
    renderInventory();
    updateSummary();
}

// Inicializar con datos simulados
simulateInitialData();