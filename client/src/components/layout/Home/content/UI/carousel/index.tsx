import streetDogOne from "@/assets/images/news carousel/street-dogs-1.jpg";
import streetDogTwo from "@/assets/images/news carousel/street-dogs-2.jpg";
import streetDogThree from "@/assets/images/news carousel/street-dogs-3.jpg";
import streetDogFour from "@/assets/images/news carousel/street-dogs-4.jpg";

import streetCatOne from "@/assets/images/news carousel/street-cats-1.jpg";
import streetCatTwo from "@/assets/images/news carousel/street-cats-2.jpg";
import streetCatThree from "@/assets/images/news carousel/street-cats-3.jpg";
import streetCatFour from "@/assets/images/news carousel/street-cats-4.jpg";

export default () => {
    return (
        // <!-- carousel - start -->
        <div id="news-carousel" className="container-fluid overflow-hidden">
            <div id="news" className="group/news relative overflow-hidden">
                <div id="news-box" className="relative w-full h-[calc(90svh-88px)] flex"
                    style={{ transition: "all 5s ease" }}>
                    <div id="news-container" className="absolute flex h-full transition-all duration-1000">
                        <div id="news-item" className="w-screen h-full">
                            {/* <!-- title - start --> */}
                            <p id="title"
                                className="absolute bottom-0 text-accent p-5 bg-gray-500/45 w-full group-hover/news:bg-gray-900/75 z-20">
                                <a href="" className="hover:text-link-text hover:underline underline-offset-4">
                                    Köpekler ne kadar sosyal canlılar?
                                </a>
                            </p>
                            {/* <!-- title - end --> */}
                            {/* <!-- img - start --> */}
                            <img className="w-full h-full object-cover object-center"
                                src={streetDogFour} alt=""></img>
                            {/* <!-- img - end --> */}
                        </div>
                        <div id="news-item" className="relative w-screen h-full">
                            {/* <!-- title - start --> */}
                            <div id="title"
                                className="absolute bottom-0 text-accent p-8 bg-gray-900/45 w-full group-hover/news:bg-gray-900/75 z-20">
                                <a href="" className="hover:text-link-text hover:underline underline-offset-4">
                                    Sokak kedilerinin şehirlerdeki fare populasyonuna etkisi nedir?
                                </a>
                                <p className="text-accent-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Tempore at doloribus labore praesentium nam molestiae eveniet perspiciatis
                                    ratione facere, eaque quibusdam, enim facilis a corrupti necessitatibus esse qui
                                    nesciunt, eos molestias natus alias. Sapiente esse, possimus saepe libero
                                    perferendis fuga nobis voluptatem accusantium tempora. Eos facilis aperiam
                                    aliquid nam at numquam fugit est eius placeat ipsam eum dolorum harum, commodi
                                    totam culpa quasi provident impedit quia reiciendis tenetur recusandae qui
                                    inventore sunt. Voluptas, temporibus expedita.</p>
                            </div>
                            {/* <!-- title - end --> */}
                            {/* <!-- img - start --> */}
                            <img className="w-full h-full object-cover object-center"
                                src={streetCatOne} alt=""></img>
                            {/* <!-- img - end --> */}
                        </div>
                        <div id="news-item" className="w-screen h-full">
                            {/* <!-- title - start --> */}
                            <p id="title"
                                className="absolute bottom-0 text-accent p-5 bg-gray-500/45 w-full group-hover/news:bg-gray-900/75 z-20">
                                <a href="" className="hover:text-link-text hover:underline underline-offset-4">
                                    Aşılar
                                    ücretsiz mi olmalı?
                                </a>
                            </p>
                            {/* <!-- title - end --> */}
                            {/* <!-- img - start --> */}
                            <img className="w-full h-full object-cover object-center"
                                src={streetDogOne} alt=""></img>
                            {/* <!-- img - end --> */}
                        </div>
                        <div id="news-item" className="w-screen h-full">
                            {/* <!-- title - start --> */}
                            <p id="title"
                                className="absolute bottom-0 text-accent p-5 bg-gray-500/45 w-full group-hover/news:bg-gray-900/75 z-20">
                                <a href="" className="hover:text-link-text hover:underline underline-offset-4">
                                    Kedilerin toplum sağlığındaki yadsinamaz etkiler nedir?
                                </a>
                            </p>
                            {/* <!-- title - end --> */}
                            {/* <!-- img - start --> */}
                            <img className="w-full h-full object-cover object-center"
                                src={streetCatTwo} alt=""></img>
                            {/* <!-- img - end --> */}
                        </div>
                        <div id="news-item" className="w-screen h-full">
                            {/* <!-- title - start --> */}
                            <p id="title"
                                className="absolute bottom-0 text-accent p-5 bg-gray-500/45 w-full group-hover/news:bg-gray-900/75 z-20">
                                <a href="" className="hover:text-link-text hover:underline underline-offset-4">
                                    Köpek bakımı nasıl olmalı?
                                </a>
                            </p>
                            {/* <!-- title - end --> */}
                            {/* <!-- img - start --> */}
                            <img className="w-full h-full object-cover object-center"
                                src={streetDogTwo} alt=""></img>
                            {/* <!-- img - end --> */}
                        </div>
                        <div id="news-item" className="w-screen h-full">
                            {/* <!-- title - start --> */}
                            <p id="title"
                                className="absolute bottom-0 text-accent p-5 bg-gray-500/45 w-full group-hover/news:bg-gray-900/75 z-20">
                                <a href="" className="hover:text-link-text hover:underline underline-offset-4">
                                    Kedilerin yapmaktan çok hoşlandığı 5 etkinlik
                                </a>
                            </p>
                            {/* <!-- title - end --> */}
                            {/* <!-- img - start --> */}
                            <img className="w-full h-full object-cover object-center"
                                src={streetCatThree} alt=""></img>
                            {/* <!-- img - end --> */}
                        </div>
                        <div id="news-item" className="w-screen h-full">
                            {/* <!-- title - start --> */}
                            <p id="title"
                                className="absolute bottom-0 text-accent p-5 bg-gray-500/45 w-full group-hover/news:bg-gray-900/75 z-20">
                                <a href="" className="hover:text-link-text hover:underline underline-offset-4">
                                    Köpeklerin temizlik ve bakım işlemi kaç günde yapılmalı?
                                </a>
                            </p>
                            {/* <!-- title - end --> */}
                            {/* <!-- img - start --> */}
                            <img className="w-full h-full object-cover object-center"
                                src={streetDogThree} alt=""></img>
                            {/* <!-- img - end --> */}
                        </div>
                        <div id="news-item" className="w-screen h-full">
                            {/* <!-- title - start --> */}
                            <p id="title"
                                className="absolute bottom-0 text-accent p-5 bg-gray-500/45 w-full group-hover/news:bg-gray-900/75 z-20">
                                <a href="" className="hover:text-link-text hover:underline underline-offset-4">
                                    Kediler sokakta nasıl bir yaşam sürmektedir?
                                </a>
                            </p>
                            {/* <!-- title - end --> */}
                            {/* <!-- img - start --> */}
                            <img className="w-full h-full object-cover object-center"
                                src={streetCatFour} alt=""></img>
                            {/* <!-- img - end --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- fligree - start --> */}
                <div id="fligree" className="w-full h-full absolute top-0 group-hover/news:bg-gray-900/15 z-10">
                </div>
                {/* <!-- fligree - end --> */}
                {/* <!-- buttons - start --> */}
                <div id="buttons">
                    {/* <!-- prev - start --> */}
                    <span id="prev" className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            className="lucide lucide-chevron-left stroke-muted w-14 h-14 absolute left-0 inset-y-[calc(40%)] p-3 bg-gray-900/40 hover:stroke-background hover:bg-gray-900/50 z-30">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </span>
                    {/* <!-- prev - end --> */}
                    {/* <!-- next - start --> */}
                    <span id="next" className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            className="lucide lucide-chevron-right stroke-muted w-14 h-14 absolute right-0 inset-y-[calc(40%)] p-3 bg-gray-900/40 hover:stroke-background hover:bg-gray-900/50 z-30">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </span>
                    {/* <!-- next - end --> */}
                </div>
                {/* <!-- buttons - end --> */}
            </div>
        </div>
        // <!-- carousel - end -->
    )
}