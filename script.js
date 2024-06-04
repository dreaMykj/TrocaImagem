let currentIndex = 0;

document.getElementById("troca").addEventListener("click", (evt) => {
    evt.preventDefault();

    const imagem = document.getElementById("mine");

    if (currentIndex >= 15) {

        currentIndex = 0;
    }
    
    imagem.src = `img/mine${currentIndex}.jpg`;

    currentIndex++;
});
