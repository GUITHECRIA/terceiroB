document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.product-card');
    const cremosoImage = document.querySelector('.cremoso-section img');

    // Animação ao carregar os produtos
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'scale(1)';
        }, index * 150); // Efeito de delay entre os cards
    });

    // Animação para a imagem dos cremosos
    setTimeout(() => {
        cremosoImage.style.opacity = 1;
        cremosoImage.style.transform = 'scale(1)';
    }, cards.length * 150);
});
