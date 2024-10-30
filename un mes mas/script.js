document.querySelector('h1').addEventListener('click', () => {
    const coloresUniverso = ["#0b3d91", "#1a1a3d", "#222b6b", "#1c1c3c"];
    document.body.style.backgroundColor = coloresUniverso[Math.floor(Math.random() * coloresUniverso.length)];
});

