const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach((preview) => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add('open');
        //Dynamically change text and image
        const originalSrc = preview.getAttribute('data-original');
        original.src = `./full/${originalSrc}`;
        const altText = preview.alt;
        caption.textContent = altText;
    });
});

modal.addEventListener('click', (e) => {
    //console.log(e);
    //check where to click on:
    if (e.target.classList.contains('modal')) {
        modal.classList.remove('open');
        original.classList.remove('open');
    }
});

