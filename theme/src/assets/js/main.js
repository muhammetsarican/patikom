const newsContainer = document.querySelector("#news-container");
const newsItems = document.querySelectorAll("#news-item");

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

let leftCounter = 0;

const newsItemWidth = newsItems[0].getBoundingClientRect().width;
const containerWidth = newsContainer.getBoundingClientRect().width - newsItemWidth;

newsContainer.style.left = "0px";

const slipLeft = () => {
    if (leftCounter > 0) {
        leftCounter -= newsItemWidth;
        newsContainer.style.left = `-${leftCounter}px`
    }
}

const slipRight = () => {
    if (leftCounter == containerWidth) resetSlider();
    else if (leftCounter < containerWidth) {
        leftCounter += newsItemWidth;
        newsContainer.style.left = `-${leftCounter}px`
    }
}

const resetSlider = () => {
    leftCounter = 0;
    newsContainer.style.left = `${leftCounter}px`
}

const autoSlip = setInterval(() => {
    slipRight();
}, 5000)

prevButton.addEventListener("click", () => {
    clearInterval(autoSlip);
    slipLeft()
})

nextButton.addEventListener("click", () => {
    clearInterval(autoSlip);
    slipRight()
})