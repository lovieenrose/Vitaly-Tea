function setActiveLink() {
    const links = document.querySelectorAll("#navbar a");
    
    links.forEach(link => {
    link.addEventListener("click", function() {
    links.forEach(link => link.classList.remove("active"));
    this.classList.add("active");
    });
    });
    }
    
    document.addEventListener("DOMContentLoaded", setActiveLink);