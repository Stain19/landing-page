function showMenuNav(){
    var elemento = document.getElementById("nav-bar");
    if (elemento.style.display === "none") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
}

function buttonScrollToSection(sectionId){
    var targetElement = document.getElementById(sectionId);
    var navBar = document.querySelector('.menu-content');

    if(targetElement) {
        var offSetTop = targetElement.offsetTop - navBar.offsetHeight;
        window.scrollTo({
            top: offSetTop,
            behavior: "smooth"
        });
    }
}