document.addEventListener('DOMContentLoaded', function() {
    // Elementos interactivos
    const adminCard = document.getElementById('admin-card');
    const employeeCard = document.getElementById('employee-card');
    const adminBtn = document.getElementById('admin-btn');
    const employeeBtn = document.getElementById('employee-btn');
    
    // Redirecciones (actualizar con tus URLs)
    const adminRedirect = 'LOGGIN.html'; // Tu URL para admin
    const employeeRedirect = 'LOGGIN.html';
    // Efecto para las tarjetas
    function animateCard(card) {
        card.style.transform = 'translateY(-5px)';
        setTimeout(() => {
            card.style.transform = 'translateY(-15px)';
        }, 150);
    }
    
    function resetCard(card) {
        setTimeout(() => {
            card.style.transform = 'translateY(0)';
        }, 200);
    }
    
    // Eventos para tarjetas
    adminCard.addEventListener('click', function() {
        animateCard(this);
        setTimeout(() => {
            // Redirección a admin
            if(adminRedirect) window.location.href = adminRedirect;
            else console.log('Redirección a admin');
        }, 300);
    });
    
    employeeCard.addEventListener('click', function() {
        animateCard(this);
        setTimeout(() => {
            // Redirección a empleado
            if(employeeRedirect) window.location.href = employeeRedirect;
            else console.log('Redirección a empleado');
        }, 300);
    });
    
    // Eventos para botones
    adminBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        animateButton(this);
        setTimeout(() => {
            if(adminRedirect) window.location.href = adminRedirect;
            else console.log('Redirección a admin');
        }, 300);
    });
    
    employeeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        animateButton(this);
        setTimeout(() => {
            if(employeeRedirect) window.location.href = employeeRedirect;
            else console.log('Redirección a empleado');
        }, 300);
    });
    
    // Animación de botones
    function animateButton(btn) {
        btn.style.transform = 'scale(0.95)';
        btn.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        setTimeout(() => {
            btn.style.transform = 'translateY(-3px) scale(1)';
            if(btn.classList.contains('employee-card')) {
                btn.style.boxShadow = '0 8px 25px rgba(0, 170, 255, 0.5)';
            } else {
                btn.style.boxShadow = '0 8px 25px rgba(255, 0, 0, 0.5)';
            }
        }, 200);
    }
    
    // Efecto hover para móviles
    loginCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-15px)';
        });
        
        card.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = 'translateY(0)';
            }, 300);
        });
    });
});