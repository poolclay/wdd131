const gallery = document.querySelector('.gallery');

for (let i = 0; i < 8; i++) {
    gallery.innerHTML += `
        <figure>
            <img src="images/temple-large.jpeg" alt="Large Temple Image" width="300">
            <figcaption>Temple of Accra, Ghana</figcaption>
        </figure>`;
}

const hamburger = document.querySelector(".ham-menu");
const menu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})

