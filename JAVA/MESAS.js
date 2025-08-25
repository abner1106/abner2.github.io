// Estado de la aplicación
let currentState = {
    selectedTable: null,
    splitBill: false
};

// Elementos del DOM
const mesasGridEl = document.getElementById('mesas-grid');
const currentTimeEl = document.getElementById('current-time');
const meseroNameEl = document.getElementById('mesero-name');
const cuentaUnicaCheckbox = document.getElementById('cuenta-unica');
const cancelBtn = document.getElementById('cancel-action');
const confirmBtn = document.getElementById('confirm-action');

// Datos de mesas (1-13 con estado aleatorio)
const mesasData = Array.from({ length: 13 }, (_, i) => ({
    numero: i + 1,
    ocupada: Math.random() > 0.5 // 50% de probabilidad de estar ocupada
}));

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    updateTime();
    setInterval(updateTime, 60000); // Actualizar cada minuto
    
    // Simular datos del mesero (en una app real esto vendría de autenticación)
    meseroNameEl.textContent = "Juan Pérez";
    
    // Renderizar mesas
    renderMesas();
    
    // Event listeners
    cuentaUnicaCheckbox.addEventListener('change', (e) => {
        currentState.splitBill = e.target.checked;
    });
    
    cancelBtn.addEventListener('click', cancelAction);
    confirmBtn.addEventListener('click', confirmAction);
});

// Funciones
function updateTime() {
    const now = new Date();
    currentTimeEl.textContent = now.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
}

function renderMesas() {
    mesasGridEl.innerHTML = '';
    
    mesasData.forEach(mesa => {
        const mesaEl = document.createElement('div');
        mesaEl.className = `mesa-item ${mesa.ocupada ? 'ocupada' : ''}`;
        mesaEl.dataset.numero = mesa.numero;
        
        const statusClass = mesa.ocupada ? 'ocupada' : 'disponible';
        
        mesaEl.innerHTML = `
            <div class="mesa-status ${statusClass}"></div>
            <div class="mesa-number">${mesa.numero}</div>
            <div class="mesa-label">Mesa</div>
        `;
        
        if (!mesa.ocupada) {
            mesaEl.addEventListener('click', () => selectTable(mesa.numero));
        }
        
        mesasGridEl.appendChild(mesaEl);
    });
}

function selectTable(tableNumber) {
    // Deseleccionar cualquier mesa previamente seleccionada
    document.querySelectorAll('.mesa-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Seleccionar la nueva mesa
    const selectedTableEl = document.querySelector(`.mesa-item[data-numero="${tableNumber}"]`);
    if (selectedTableEl) {
        selectedTableEl.classList.add('active');
        currentState.selectedTable = tableNumber;
        confirmBtn.disabled = false;
    }
}

function cancelAction() {
    // Animación de cancelación
    confirmBtn.classList.remove('pulse');
    cancelBtn.classList.add('pulse');
    
    // Resetear selección
    currentState.selectedTable = null;
    document.querySelectorAll('.mesa-item').forEach(item => {
        item.classList.remove('active');
    });
    confirmBtn.disabled = true;
    
    setTimeout(() => {
        cancelBtn.classList.remove('pulse');
    }, 1000);
}

function confirmAction() {
    if (!currentState.selectedTable) return;
    
    // Animación de confirmación
    cancelBtn.classList.remove('pulse');
    confirmBtn.classList.add('pulse');
    
    // Aquí iría la lógica para redirigir a la interfaz de tomar orden
    console.log('Mesa seleccionada:', {
        mesa: currentState.selectedTable,
        splitBill: currentState.splitBill
    });
    
    // Simular redirección después de 1 segundo
    setTimeout(() => {
        confirmBtn.classList.remove('pulse');
        // window.location.href = `tomar-orden.html?mesa=${currentState.selectedTable}&split=${currentState.splitBill}`;
        alert(`Redirigiendo a tomar orden para Mesa ${currentState.selectedTable} (${currentState.splitBill ? 'Cuenta Dividida' : 'Cuenta Única'})`);
    }, 1000);
}

// Estilos para animaciones (se pueden agregar al CSS)
const style = document.createElement('style');
style.textContent = `
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.pulse {
    animation: pulse 0.5s ease;
}

.mesa-item.ocupada {
    opacity: 0.7;
    cursor: not-allowed;
    border-color: #555;
}

.mesa-item.ocupada .mesa-number {
    color: #555;
}
`;
document.head.appendChild(style);