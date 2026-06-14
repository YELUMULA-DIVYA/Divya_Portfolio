document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach((el)=>{
    el.classList.add("hidden");
    observer.observe(el);
});

document.addEventListener("mousemove",(e)=>{
document.body.style.setProperty("--x",e.clientX+"px");
document.body.style.setProperty("--y",e.clientY+"px");
});
