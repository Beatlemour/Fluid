const modal = document.querySelector(".modal");
const preview = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

preview.forEach(pr =>{
    pr.addEventListener('click', () =>{
        modal.classList.add("open");
        original.classList.add("open");

        //Dynamic text and image
        const originalSrc = pr.getAttribute("data-original");
        original.src = `https://raw.githubusercontent.com/Beatlemour/Fluid/master/original/original/${originalSrc}`;
        const altText = pr.alt; 
        caption.textContent = altText;
    })
})

modal.addEventListener('click', (e) =>{
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open");
        original.classList.remove("open");
    }
})