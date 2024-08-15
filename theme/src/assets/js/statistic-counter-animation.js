const bannerItems = document.querySelectorAll("#banner-item > #statistic-box > p:nth-child(1)");

document.addEventListener("DOMContentLoaded", () => {
    const duration = 3000;
    function counterAnimate(item, counter, range, step) {
        if (counter == range) return;
        setTimeout(() => {
            counter += 1;
            item.textContent = counter;
            return counterAnimate(item, counter, range, step);
        }, step);
    }
    bannerItems.forEach(bannerItem => {
        const range = bannerItem.textContent;
        const step = Math.abs(Math.floor(duration / range));

        counterAnimate(bannerItem, 0, range, step);
    })
})
