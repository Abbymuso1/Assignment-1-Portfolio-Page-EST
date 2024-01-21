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
    // console.log(portfolioItem);
    var srcValue = portfolioItem.querySelector(".porfolio-img img").src;
    // console.log(srcValue);
    document.querySelector(".pp_thumbnail img").src = srcValue;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}