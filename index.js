function showImage(src) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");
    const loadingMessage = document.getElementById("loading-message");

    img.style.display = "none";
    loadingMessage.style.display = "block";//da e jasno deka se loadira
    img.onload = () => {
        loadingMessage.style.display = "none";
        img.style.display = "block";
    }; //popravam ghost image

    img.src = src;
    lightbox.style.display = "flex";
}

function hideImage() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
    img.src = ""; //also za ghost image fix
}
