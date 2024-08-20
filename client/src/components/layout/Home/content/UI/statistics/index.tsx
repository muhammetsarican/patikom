import { useEffect, useState } from "react";
import BannerItem from "./BannerItem";

export default () => {
    let counter = 0;
    const duration = 3000;
    const step = Math.abs(Math.floor(duration / 201));
    // function counterAnimate(range: any) {
    //     console.log(counter);
    //     if (counter == range) return;
    //     setTimeout(() => {
    //         counter += 1;
    //         return counterAnimate(range);
    //     }, step);
    // }

    // useEffect(() => {
    //     counterAnimate(201);
    // }, []);

    return (
        // <!-- statistics banner - start -->
        <div id="statistics" className="container p-5 w-full font-montserrat text-off-white-text">
            <div id="banner-container" className="grid grid-cols-5 gap-5">
                <BannerItem title="toplam kullanısı sayısı" count={201} />
                <BannerItem title="Kayıtlı hayvan sayısı" count={221} />
                <BannerItem title="Takılan Çip sayısı" count={1453} />
                <BannerItem title="Yapılan aşı sayısı" count={102} />
                <BannerItem title="Yapılan tedavi sayısı" count={1023} />
            </div>
        </div>
        // <!-- statistics banner - end -->
    )
}