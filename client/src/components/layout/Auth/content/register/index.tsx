import ContainerBg from "@/assets/images/register/container-bg.png"

export default () => {
    return (
        <>
            <div className="container flex justify-center items-center h-full" style={{ marginTop: "5%", marginBottom: "5%" }}>
                <div className="relative w-5/6 h-3/4 rounded-lg bg-tertiary/10 overflow-hidden z-10">
                    <img className="w-full h-full object-cover object-center" src={ContainerBg}
                        alt=""></img>
                    <div id="login-box" className="absolute top-0 left-0 w-1/2 h-full bg-slate-200/80 text-primary-text p-3">
                        <div id="title-box" className="flex flex-col gap-2 items-center px-3 py-14">
                            <h6 id="login-title" className="font-sora text-5xl text-center text-tertiary">Hesap Oluştur!</h6>
                        </div>
                        <div id="form" className="flex justify-center items-start h-fit">
                            <form action="" className="flex flex-col gap-5 w-5/6 h-1/2 px-3 py-7">
                                <div className="flex flex-col gap-3">
                                    <input
                                        className="p-3 rounded-lg font-montserrat text-tertiary text-sm h-fit focus:outline-none shadow-2xl"
                                        type="text" name="" id="" placeholder="İsminizi giriniz"></input>
                                    <p className="hidden text-xs text-red-500 font-light">* İsim girilmesi zorunlu alandır.</p>
                                    <input
                                        className="p-3 rounded-lg font-montserrat text-tertiary text-sm h-fit focus:outline-none shadow-2xl"
                                        type="text" name="" id="" placeholder="Soy isminizi giriniz"></input>
                                    <p className="hidden text-xs text-red-500 font-light">* Soyisim girilmesi zorunlu alandır.
                                    </p>
                                    <input
                                        className="p-3 rounded-lg font-montserrat text-tertiary text-sm h-fit focus:outline-none shadow-2xl"
                                        type="email" name="" id="" placeholder="E-postanızı giriniz"></input>
                                    <p className="hidden text-xs text-red-500 font-light">* E-posta girilmesi zorunlu alandır.
                                    </p>
                                    <input
                                        className="p-3 rounded-lg font-montserrat text-tertiary text-sm h-fit focus:outline-none shadow-2xl"
                                        type="password" name="" id="" placeholder="Şifrenizi giriniz"></input>
                                    <p className="hidden text-xs text-red-500 font-light">* Şifre girilmesi zorunlu alandır.</p>
                                    <input
                                        className="p-3 rounded-lg font-montserrat text-tertiary text-sm h-fit focus:outline-none shadow-2xl"
                                        type="password" name="" id="" placeholder="Şifrenizi tekrar giriniz"></input>
                                    <p className="hidden text-xs text-red-500 font-light">* Şifre tekrar girilmesi zorunlu
                                        alandır.</p>

                                </div>
                                <button type="submit"
                                    className="flex gap-3 justify-center items-center bg-tertiary text-off-white-text p-3 font-semibold rounded-lg hover:bg-[#8351D8]">
                                    <p>Kayıt Ol</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" className="lucide lucide-user-plus w-5 h-5">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <line x1="19" x2="19" y1="8" y2="14" />
                                        <line x1="22" x2="16" y1="11" y2="11" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                        <div id="other-links" className="text-center text-sm text-primary-text py-10">
                            <p>Hesabınız varsa, giriş yapmak için <a href="./login.html"
                                className="text-tertiary font-bold hover:text-link-text underline underline-offset-2">giriş
                                yap</a>'a
                                ilerleyiniz.</p>
                        </div>
                    </div>
                </div>
            </div>
            <span id="fligree" className="absolute top-0 w-full h-full bg-slate-900/1 z-0"></span>
        </>
    )
}