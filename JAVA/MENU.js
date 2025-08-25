document.addEventListener('DOMContentLoaded', function() {
    // Datos de productos únicos (IDs corregidos)
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
        { id: 18, name: 'Linterna Verde Smash', category: 'drinks', price: 150, description: 'Cóctel vibrante con sabores cítricos y un toque refrescante', image: 'images/bebidas/LINTERNA_VERDE_SMASH.png' },
        { id: 19, name: 'Ponche Saurio', category: 'drinks', price: 150, description: 'Mezcla de ponche con un toque exótico', image: 'images/bebidas/PONCHE_SAURIO-removebg-preview.png' },
        { id: 20, name: 'Rayo Tropical', category: 'drinks', price: 145, description: 'Explosión tropical en cada sorbo', image: 'images/bebidas/RAYO_TROPICAL-removebg-preview.png' },
        { id: 21, name: 'Extinción', category: 'drinks', price: 160, description: 'Cóctel rojo intenso y dulce', image: 'images/bebidas/Xtincion.png' },
        { id: 22, name: 'Tamarindo Hell', category: 'drinks', price: 155, description: 'Bebida fuerte con notas frutales oscuras', image: 'images/bebidas/Tamarindo_hell.png' },
        { id: 23, name: 'Tricera Mango', category: 'drinks', price: 155, description: 'Bebida fuerte sabor manguito', image: 'images/bebidas/TREICERMANGO.png' },
        { id: 24, name: 'Mandarin Punch', category: 'drinks', price: 155, description: 'Bebida sabor Naranja mandarina', image: 'images/bebidas/Mandarinpunch.png' },
        { id: 25, name: 'Apple Queen', category: 'drinks', price: 145, description: 'Refrescante bebida con sabor a manzana y un toque de alcohol', image: 'images/bebidas/APPLE_QUEEN.png' },
        { id: 26, name: 'Mojito Limón', category: 'drinks', price: 145, description: 'Cóctel clásico con limón y hierbabuena, ligeramente gasificado', image: 'images/bebidas/MOJITO_LIMON.png' },
        { id: 27, name: 'Tequila Rex', category: 'drinks', price: 155, description: 'Tequila fuerte con un rugido jurásico, ideal para valientes', image: 'images/bebidas/TEQUILA_REX.png' },
        { id: 28, name: 'Jurassic Island', category: 'drinks', price: 155, description: 'Cóctel de manzana verde con una explosión de sabor jurásico', image: 'images/bebidas/Jurassic_Island.png' },
        { id: 29, name: 'Summer Drink', category: 'drinks', price: 145, description: 'Bebida dulce y veraniega, ideal para días calurosos', image: 'images/bebidas/SUMMER_dRINK.png' },
        { id: 30, name: 'Blodi Sandgria', category: 'drinks', price: 150, description: 'Bebida refrescante con vino y frutas rojas', image: 'images/bebidas/BLODI_SANGRIA.png'},
        { id: 31, name: 'Ultra Violeta', category: 'drinks', price: 150, description: 'Bebida refrescante de sabor uva y mora', image: 'images/bebidas/ULTRAVIOLETA.png'},

        // Miches ($140-$170)
        { id: 32, name: 'Miche Maracuyá Grande', category: 'miches', price: 125, description: 'Michelada grande con jugo natural de maracuyá', image: 'images/bebidas/MICHE_MARACUYA_GRANDE.png' },
        { id: 33, name: 'Miche Cubana Grande', category: 'miches', price: 125, description: 'Michelada estilo cubano con salsas y limón', image: 'images/bebidas/MICHE_CUBANA_GRANDE.png' },
        { id: 34, name: 'GoMichela Grande Mango', category: 'miches', price: 125, description: 'Michelada con mango natural y chile en polvo', image: 'images/bebidas/MICHE_GRANDE_MANGO.png' },

        // Azulitos ($130-$150)
        { id: 35, name: 'Azulito Smash', category: 'azulitos', price: 150, description: 'Bebida azul intensa con sabor dulce y tropical', image: 'images/bebidas/AZULITO_SMASH.png' },
        { id: 36, name: 'Azulito Saurio', category: 'azulitos', price: 150, description: 'Versión electrizante del azulito con un giro jurásico', image: 'images/bebidas/AZULITO_SAURIO.png' },
        { id: 37, name: 'Azulito Frost', category: 'azulitos', price: 140, description: 'Bebida Dulce con sabor a mora azul', image: 'images/bebidas/AZULITO_FROST-removebg-preview.png' },
        { id: 38, name: 'Pati Azulito', category: 'azulitos', price: 150, description: 'Versión Cute del azulito', image: 'images/bebidas/PATI_AZULITO.png' },

        // Tritones ($600)
        { id: 39, name: 'Tritón De Azulito', category: 'tritones', price: 600, description: 'Botella grande para compartir', image: 'images/bebidas/triton_azulito.png' },
        { id: 40, name: 'Tritón De 3L', category: 'tritones', price: 600, description: 'Cervesa Al Gusto', image: 'images/bebidas/TRITON3.PNG' },
        { id: 41, name: 'Tritón de 5L', category: 'tritones', price: 600, description: 'Cervesa Al Gusto', image: 'images/bebidas/TRITON5.PNG' },
        
        // Alimentos ($125-$150)
        { id: 42, name: 'Palomitas', category: 'alimentos', price: 12, description: 'Palomitas clásicas con mantequilla y sal', image: 'images/alimentos/PALOMITAS.png' },
        { id: 43, name: 'Chicharrienes', category: 'alimentos', price: 12, description: 'Crujientes chicharrines con salsa y limón', image: 'images/alimentos/CHICHARRINES.png' },
        { id: 44, name: 'Alitas Habanero (6pz)', category: 'alimentos', price: 155, description: '6 alitas bañadas en salsa habanero picante', image: 'images/alimentos/ALITAS_HABANERO.png' },
        { id: 45, name: 'Alitas BBQ (6pz)', category: 'alimentos', price: 155, description: '6 alitas en deliciosa salsa BBQ', image: 'images/alimentos/ALITAS_BBQ.png' },
        { id: 46, name: 'Papas A la Francesa', category: 'alimentos', price: 155, description: 'Deliciosas papitas naturales echas al momento', image: 'images/alimentos/PAPAS_FRANCESAS.png' },

        // Promos ($130-$160)
        { id: 47, name: 'Rachas', category: 'promos', price: 130, description: '1 cerveza + porción de alitas', image: 'images/PROMOS/TIK_TOK.jpg' },
        { id: 48, name: 'Cumpleaños', category: 'promos', price: 160, description: 'Lleva 2 drinks por el precio de 1', image: 'images/PROMOS/CUMPLEAÑOS.jpg' },
        { id: 49, name: 'Triton de Viernes', category: 'promos', price: 150, description: '2 bebidas + nachos grandes', image: 'images/PROMOS/TRITON_AZULITO.jpg' }
    ];

    // Variables del carrito
    let cart = [];
    const cartOverlay = document.getElementById('cart-overlay');
    const cartToggle = document.getElementById('cart-toggle');
    const closeCart = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartCount = document.querySelector('.cart-count');
    const checkoutBtn = document.getElementById('checkout-btn');
    const productsGrid = document.getElementById('products-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Inicializar la tienda
    function initStore() {
        createSearchBar();
        renderProducts(products);
        setupEventListeners();
    }

    // Crear barra de búsqueda
    function createSearchBar() {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        
        searchContainer.innerHTML = `
            <input type="text" id="search-input" placeholder="Buscar productos por nombre...">
            <button id="search-btn"><i class="fas fa-search"></i></button>
            <button id="clear-search-btn" style="display:none;"><i class="fas fa-times"></i></button>
        `;
        
        productsGrid.parentNode.insertBefore(searchContainer, productsGrid);
    }

    // Renderizar productos
    function renderProducts(productsToRender) {
        productsGrid.innerHTML = '';
        
        if (productsToRender.length === 0) {
            productsGrid.innerHTML = '<p class="no-products">No se encontraron productos</p>';
            return;
        }
        
        productsToRender.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = `product-card ${product.category}`;
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                <div class="product-info">
                    <span class="product-category">${product.category.toUpperCase()}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-footer">
                        <span class="product-price">$${product.price.toFixed(2)}</span>
                        <button class="add-to-cart" data-id="${product.id}" aria-label="Añadir ${product.name} al carrito">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });
    }

    // Configurar event listeners
    function setupEventListeners() {
        // Mostrar/ocultar carrito
        cartToggle.addEventListener('click', toggleCart);
        closeCart.addEventListener('click', toggleCart);

        // Cerrar carrito al hacer clic fuera
        cartOverlay.addEventListener('click', (e) => {
            if (e.target === cartOverlay) {
                toggleCart();
            }
        });

        // Filtros de categoría
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const category = button.dataset.category;
                renderProducts(category === 'all' ? products : 
                    products.filter(product => product.category === category));
            });
        });

        // Eventos para la barra de búsqueda
        const searchInput = document.getElementById('search-input');
        const searchBtn = document.getElementById('search-btn');
        const clearSearchBtn = document.getElementById('clear-search-btn');
        
        searchBtn.addEventListener('click', () => performSearch(searchInput.value.trim()));
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch(searchInput.value.trim());
        });
        clearSearchBtn.addEventListener('click', clearSearch);
        searchInput.addEventListener('input', () => {
            clearSearchBtn.style.display = searchInput.value ? 'block' : 'none';
        });

        // Delegación de eventos para productos
        productsGrid.addEventListener('click', handleProductClick);
        
        // Delegación de eventos para el carrito
        cartItemsContainer.addEventListener('click', handleCartClick);
        cartItemsContainer.addEventListener('input', handleCartInput);

        // Botón de checkout
        checkoutBtn.addEventListener('click', checkout);
    }

    // Función para alternar el carrito
    function toggleCart() {
        cartOverlay.classList.toggle('active');
        // Bloquear scroll cuando el carrito está abierto
        document.body.style.overflow = cartOverlay.classList.contains('active') ? 'hidden' : '';
    }

    // Función para realizar la búsqueda
    function performSearch(searchTerm) {
        if (!searchTerm) {
            renderProducts(products);
            return;
        }
        
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        renderProducts(filteredProducts);
    }

    // Limpiar búsqueda
    function clearSearch() {
        document.getElementById('search-input').value = '';
        document.getElementById('clear-search-btn').style.display = 'none';
        renderProducts(products);
    }

    // Manejar clics en productos
    function handleProductClick(e) {
        const button = e.target.closest('.add-to-cart');
        if (button) {
            const productId = parseInt(button.dataset.id);
            addToCart(productId);
            
            // Efecto visual
            button.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-plus"></i>';
            }, 1000);
        }
    }

    // Manejar clics en el carrito
    function handleCartClick(e) {
        const removeBtn = e.target.closest('.remove-item');
        const quantityBtn = e.target.closest('.quantity-btn');
        
        if (removeBtn) {
            removeFromCart(parseInt(removeBtn.dataset.id));
        } else if (quantityBtn) {
            const productId = parseInt(quantityBtn.dataset.id);
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity = quantityBtn.classList.contains('plus') ? 
                    item.quantity + 1 : Math.max(1, item.quantity - 1);
                updateCart();
            }
        }
    }

    // Manejar inputs en el carrito
    function handleCartInput(e) {
        if (e.target.classList.contains('cart-item-quantity')) {
            const input = e.target;
            const newQuantity = parseInt(input.value) || 1;
            input.value = Math.max(1, newQuantity);
            updateCartItem(parseInt(input.dataset.id), newQuantity);
        }
        
        if (e.target.classList.contains('notes-input')) {
            updateItemNotes(parseInt(e.target.dataset.id), e.target.value);
        }
    }

    // Añadir al carrito con validación
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1,
                notes: ''
            });
        }
        
        updateCart();
        showConfetti();
    }

    // Eliminar del carrito
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCart();
    }

    // Actualizar cantidad en carrito
    function updateCartItem(productId, newQuantity) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity = newQuantity;
            updateCart();
        }
    }

    // Actualizar notas especiales
    function updateItemNotes(productId, notes) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.notes = notes;
            saveCartToLocalStorage();
        }
    }

    // Actualizar carrito
    function updateCart() {
        renderCartItems();
        updateCartTotal();
        saveCartToLocalStorage();
    }

    // Renderizar items del carrito con sanitización
    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
            updateCartCount();
            return;
        }
        
        // Agregar imagen promocional al carrito
        const promoContainer = document.createElement('div');
        promoContainer.className = 'promo-container';
        promoContainer.innerHTML = `
            <img src="images/FANTASMA.PNG" alt="Promoción especial" class="promo-image" loading="lazy">
        `;
        cartItemsContainer.appendChild(promoContainer);
        
        cart.forEach(item => {
            const sanitizedNotes = item.notes ? item.notes.replace(/</g, '&lt;').replace(/>/g, '&gt;') : '';
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-header">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image" loading="lazy">
                    <button class="remove-item" data-id="${item.id}" aria-label="Eliminar ${item.name}">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="cart-item-body">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <div class="cart-item-controls">
                        <div class="quantity-controls">
                            <button class="quantity-btn minus" data-id="${item.id}" aria-label="Reducir cantidad">-</button>
                            <input type="number" min="1" value="${item.quantity}" 
                                   class="cart-item-quantity" data-id="${item.id}" aria-label="Cantidad de ${item.name}">
                            <button class="quantity-btn plus" data-id="${item.id}" aria-label="Aumentar cantidad">+</button>
                        </div>
                        <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <div class="special-notes">
                        <textarea class="notes-input" data-id="${item.id}" 
                                  placeholder="Peticiones especiales (ej: sin hielo, sin alcohol, etc.)">${sanitizedNotes}</textarea>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
        
        updateCartCount();
    }

    // Actualizar contador del carrito
    function updateCartCount() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    // Actualizar total del carrito
    function updateCartTotal() {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotalElement.textContent = `$${total.toFixed(2)}`;
    }

    // Finalizar compra con validación
    function checkout() {
        if (cart.length === 0) {
            alert('Tu carrito está vacío. Añade productos antes de finalizar la compra.');
            return;
        }
        
        showConfetti();
        
        let orderDetails = `Pedido confirmado!\n\nDetalles del pedido:\n`;
        
        cart.forEach(item => {
            orderDetails += `- ${item.name} x${item.quantity} ($${(item.price * item.quantity).toFixed(2)})`;
            if (item.notes) {
                orderDetails += `\n  Nota: ${item.notes}`;
            }
            orderDetails += `\n`;
        });
        
        orderDetails += `\nTotal: $${cartTotalElement.textContent}`;
        orderDetails += `\n\nGracias por tu compra en michES XOXO!`;
        
        setTimeout(() => {
            alert(orderDetails);
            cart = [];
            updateCart();
            toggleCart();
        }, 1500);
    }

    // Mostrar confeti optimizado
    function showConfetti() {
        const canvas = document.getElementById('confetti-canvas');
        if (!canvas) return;
        
        canvas.style.display = 'block';
        
        // Configuración mínima para mejor rendimiento
        const confettiSettings = {
            target: 'confetti-canvas',
            max: 100, // Reducido para mejor rendimiento
            size: 1,
            animate: true,
            props: ['circle', 'square'], // Menos formas para mejor rendimiento
            colors: [[255, 0, 170], [0, 255, 255], [0, 255, 170]],
            clock: 30
        };
        
        if (window.ConfettiGenerator) {
            const confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
            
            setTimeout(() => {
                confetti.clear();
                canvas.style.display = 'none';
            }, 2000); // Tiempo reducido
        } else {
            setTimeout(() => {
                canvas.style.display = 'none';
            }, 1000);
        }
    }

    // Guardar carrito en localStorage
    function saveCartToLocalStorage() {
        try {
            localStorage.setItem('michES-cart', JSON.stringify(cart));
        } catch (e) {
            console.error('Error al guardar en localStorage:', e);
        }
    }

    // Cargar carrito desde localStorage
    function loadCartFromLocalStorage() {
        try {
            const savedCart = localStorage.getItem('michES-cart');
            if (savedCart) {
                cart = JSON.parse(savedCart);
                updateCart();
            }
        } catch (e) {
            console.error('Error al cargar desde localStorage:', e);
            localStorage.removeItem('michES-cart');
        }
    }

    // Inicializar
    loadCartFromLocalStorage();
    initStore();
});