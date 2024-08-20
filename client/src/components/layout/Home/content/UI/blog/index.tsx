// import streetCatFour from "../../../../../assets/images/news carousel/street-cats-4.jpg";
import streetCatFour from "@/assets/images/news carousel/street-cats-4.jpg"

export default () => {
    return (
        // <!-- blog banner - start -->
        <div id="blog" className="container px-2 py-10">
            <div id="blog-container" className="grid grid-cols-3 gap-5">
                <div id="blog-item" className="bg-white text-off-white-text p-2 rounded-lg shadow-2xl">
                    <div id="blog-img" className="relative rounded-md overflow-hidden">
                        <img className="w-full h-74 object-cover" src={streetCatFour}
                            alt=""></img>
                        <div id="blog-info"
                            className="absolute flex flex-col gap-3 w-full bottom-0 left-0 p-2 bg-gray-900/75">
                            <div id="title" className="font-sora">Hayvan ne için yaşar?</div>
                            <div id="short-desc" className="w-5/6 text-sm text-muted-text">Hayvan bir amaç için mi yoksa
                                yaşaması gerektiği
                                için mi yaşar?
                            </div>
                            <button id="keep-to-read"
                                className="bg-accent w-fit p-3 rounded-lg text-sm text-primary-text self-end hover:bg-primary">Devamını
                                oku...</button>
                        </div>
                    </div>
                </div>
                <div id="blog-item" className="bg-white text-off-white-text p-2 rounded-lg shadow-2xl">
                    <div id="blog-img" className="relative rounded-md overflow-hidden">
                        <img className="w-full h-74 object-cover" src={streetCatFour}
                            alt=""></img>
                        <div id="blog-info"
                            className="absolute flex flex-col gap-3 w-full bottom-0 left-0 p-2 bg-gray-900/75">
                            <div id="title" className="font-sora">Hayvan ne için yaşar?</div>
                            <div id="short-desc" className="w-5/6 text-sm text-muted-text">Hayvan bir amaç için mi yoksa
                                yaşaması gerektiği
                                için mi yaşar?
                            </div>
                            <button id="keep-to-read"
                                className="bg-accent w-fit p-3 rounded-lg text-sm text-primary-text self-end hover:bg-primary">Devamını
                                oku...</button>
                        </div>
                    </div>
                </div>
                <div id="blog-item" className="bg-white text-off-white-text p-2 rounded-lg shadow-2xl">
                    <div id="blog-img" className="relative rounded-md overflow-hidden">
                        <img className="w-full h-74 object-cover" src={streetCatFour}
                            alt=""></img>
                        <div id="blog-info"
                            className="absolute flex flex-col gap-3 w-full bottom-0 left-0 p-2 bg-gray-900/75">
                            <div id="title" className="font-sora">Hayvan ne için yaşar?</div>
                            <div id="short-desc" className="w-5/6 text-sm text-muted-text">Hayvan bir amaç için mi yoksa
                                yaşaması gerektiği
                                için mi yaşar?
                            </div>
                            <button id="keep-to-read"
                                className="bg-accent w-fit p-3 rounded-lg text-sm text-primary-text self-end hover:bg-primary">Devamını
                                oku...</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <!-- blog banner - end -->
    )
}