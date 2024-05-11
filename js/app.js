// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
    links.classList.toggle("show-links");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(link => {
    link.addEventListener("click", e => {
        // prevent default
        e.preventDefault();
        links.classList.remove("show-links");

        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        let position = element.offsetTop - 62;

        window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth"
        });
    });
});

const scrollicon = document.querySelectorAll(".scroll-icon");
scrollicon.forEach(icon=>{
    icon.addEventListener("click", e =>{
        const id = e.target.parentElement.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop - 62;
        console.log(position)
        window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth"
        
        });
    })
})