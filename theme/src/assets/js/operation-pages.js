const operationButtons = document.querySelectorAll("#operation-button");
const operationItems = document.querySelectorAll("#operation-item");

const pages = {}

operationItems.forEach(item => {
    pages[item.dataset.name] = item;
})

pages.current = pages["list-page"];

function showPage(item) {
    pages.current.classList.toggle("hidden");
    item.classList.toggle("hidden");
    pages.current = item;
}


operationButtons.forEach(button => {
    button.addEventListener("click", function () {
        showPage(pages[this.dataset.referpage]);
    })
})