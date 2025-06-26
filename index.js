
function showImage(src) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");

    img.style.display = "none";
    img.onload = () => {
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
