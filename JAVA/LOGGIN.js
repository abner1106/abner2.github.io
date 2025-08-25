document.addEventListener('DOMContentLoaded', function() {
    // Efecto de partículas
    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        document.body.appendChild(particlesContainer);
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Tamaño aleatorio entre 2px y 6px
            const size = Math.random() * 4 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Posición aleatoria
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Opacidad aleatoria
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            
            // Animación
            const duration = Math.random() * 20 + 10;
            particle.style.animation = `float ${duration}s linear infinite`;
            
            // Dirección de animación
            const keyframes = `
                @keyframes float {
                    0% {
                        transform: translate(0, 0) rotate(0deg);
                        opacity: ${Math.random() * 0.5 + 0.1};
                    }
                    100% {
                        transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            
            const style = document.createElement('style');
            style.innerHTML = keyframes;
            document.head.appendChild(style);
            
            particlesContainer.appendChild(particle);
        }
    }
    
    createParticles();
    
    // Efecto de entrada para los inputs
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.querySelector('label').style.color = '#00a2ff';
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentNode.querySelector('label').style.color = '#00ffaa';
            }
        });
    });
    
    // Validación del formulario
    const form = document.querySelector('.login-form');
    form.addEventListener('submit', function(e) {
        let isValid = true;
        const usuario = form.querySelector('input[name="usuario"]');
        const contrasena = form.querySelector('input[name="contrasena"]');
        
        if (!usuario.value.trim()) {
            usuario.parentNode.querySelector('.bar').style.background = '#ff5555';
            isValid = false;
        }
        
        if (!contrasena.value.trim()) {
            contrasena.parentNode.querySelector('.bar').style.background = '#ff5555';
            isValid = false;
        }
        
        if (!isValid) {
            e.preventDefault();
            setTimeout(() => {
                usuario.parentNode.querySelector('.bar').style.background = '';
                contrasena.parentNode.querySelector('.bar').style.background = '';
            }, 2000);
        }
    });
    
    // Efecto hover para el contenedor
    const loginContainer = document.querySelector('.login-container');
    loginContainer.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        loginContainer.style.transform = `perspective(1000px) rotateY(${(x - 0.5) * 5}deg) rotateX(${(0.5 - y) * 5}deg)`;
    });
    
    loginContainer.addEventListener('mouseleave', () => {
        loginContainer.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
    });
});