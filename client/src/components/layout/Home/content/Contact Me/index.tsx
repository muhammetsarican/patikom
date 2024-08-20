import BannerImage from "@/assets/images/contact-me/title-banner.png";
import TitleBanner from "../../title-banner";

export default () => (
    <>
        <TitleBanner Title="İletişim" BannerImage={BannerImage} className="bg-background object-[0,-300px]" />
        {/* <!-- contact content - start --> */}
        <div id="contact-content" className="bg-background/50 py-14">
            <div className="container px-0 flex flex-col items-center bg-white rounded-xl w-full h-[75svh]">
                <div id="contact-form-title" className="w-full h-fit flex justify-center items-center p-7">
                    <h6 className="flex items-center gap-3 text-tertiary text-5xl font-sora font-light">Bana Ulaşın
                    </h6>
                </div>
                <div id="contact-form" className="flex flex-col gap-5 items-center w-full h-full p-5">
                    <form action="" className="flex flex-col gap-5 w-5/6 h-1/2 px-3 py-7">
                        <div className="grid grid-cols-2 gap-3">
                            <input
                                className="p-3 rounded-lg font-montserrat bg-slate-100 text-tertiary text-sm h-fit focus:outline-none"
                                type="text" name="" id="" placeholder="İsminizi giriniz"></input>
                            <p className="hidden text-xs text-red-500 font-light">* İsim girilmesi zorunlu alandır.</p>
                            <input
                                className="p-3 rounded-lg font-montserrat bg-slate-100 text-tertiary text-sm h-fit focus:outline-none"
                                type="text" name="" id="" placeholder="Soy isminizi giriniz"></input>
                            <p className="hidden text-xs text-red-500 font-light">* Soyisim girilmesi zorunlu alandır.
                            </p>
                            <input
                                className="col-span-2 p-3 rounded-lg font-montserrat bg-slate-100 text-tertiary text-sm h-fit focus:outline-none"
                                type="email" name="" id="" placeholder="E-postanızı giriniz"></input>
                            <p className="hidden text-xs text-red-500 font-light">* E-posta girilmesi zorunlu alandır.
                            </p>
                            <input
                                className="col-span-2 p-3 rounded-lg font-montserrat bg-slate-100 text-tertiary text-sm h-fit focus:outline-none"
                                type="password" name="" id="" placeholder="Başlık giriniz"></input>
                            <p className="hidden text-xs text-red-500 font-light">* Şifre girilmesi zorunlu alandır.</p>
                            <textarea
                                className="col-span-2 min-h-48 p-3 rounded-lg font-montserrat bg-slate-100 text-tertiary text-sm h-fit focus:outline-none" placeholder="Mesajınızı giriniz"></textarea>
                            <p className="hidden text-xs text-red-500 font-light">* Şifre tekrar girilmesi zorunlu
                                alandır.</p>

                        </div>
                        <div id="contact-form-actions" className="w-full flex justify-end">
                            <button type="submit"
                                className="flex gap-3 justify-self-end justify-center items-center w-fit bg-green-500 text-off-white-text px-5 py-3 font-semibold rounded-lg hover:bg-green-700">
                                <p>Gönder</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="lucide lucide-user-plus w-5 h-5">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <line x1="19" x2="19" y1="8" y2="14" />
                                    <line x1="22" x2="16" y1="11" y2="11" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <!-- contact content - end --> */}
        </div>
        {/* <!-- content - end --></div> */}
    </>
)