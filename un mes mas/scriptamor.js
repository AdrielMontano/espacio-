function launchRocket() {
    const rocket = document.querySelector('.rocket');
    const flame = document.querySelector('.rocket-flame');

    // Iniciar la animación de la nave hacia el planeta destino
    rocket.style.transition = "transform 5s ease-in-out"; // Velocidad de despegue
    rocket.style.transform = "translate(100vw, -100vh)"; // Despegue inicial

    // Esperar a que el cohete llegue al destino
    setTimeout(() => {
        // Detener el cohete y cambiar su orientación a horizontal
        rocket.style.transition = "transform 2s ease-in-out"; // Velocidad de aterrizaje
        rocket.style.transform = "translate(80vw, -60vh) rotate(90deg)"; // Ajustar la posición y orientación

        // Luego de un tiempo, hacer que el cohete se desplace más lentamente
        setTimeout(() => {
            rocket.style.transition = "transform 10s ease-in-out"; // Reducir velocidad
            rocket.style.transform = "translate(70vw, -60vh) rotate(90deg)"; // Desplazamiento horizontal
        }, 2000); // Tiempo de espera antes de moverse horizontalmente

    }, 5000); // Tiempo de espera para llegar al planeta destino

    // Generar corazones
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 20 + 'px';
        heart.style.bottom = '-15px';
        flame.appendChild(heart);

        // Eliminar corazones después de que se muevan
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }, 300);
}
