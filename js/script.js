/* --------------------- typing animation ------------------------- */
var typed = new Typed(".typing", {
    strings: ["Software Engineer", "Strathmore Graduate", "Full-Stack Developer"],
    typeSpeed: 200,
    BackSpeed: 60,
    loop: true
})

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work__button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
});

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
    console.log(portfolioItem);
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".portfolio-item .portfolio-item-inner .work__img img").src;
}