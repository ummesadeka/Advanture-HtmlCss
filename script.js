const slides = document.querySelector(".slider").children;
const indicatorImage = document.querySelector(".slider-indicator").children;

for (let i=0; i<indicatorImage.length; i++) {
    indicatorImage[i].addEventListener("click", function(){
        for (let j=0; j<indicatorImage.length; j++){
            indicatorImage[j].classList.remove("active");
        }
        this.classList.add("active");
        const id= this.getAttribute("data-id");

        for (let j=0; j<slides.length; j++){
            slides[j].classList.remove("active");
        }
        slides[id].classList.add("active");
    })
}