import ChevronRight from "../../../../assets/icons/chevron-right"
import Facebook from "../../../../assets/icons/social-media/facebook"
import Github from "../../../../assets/icons/social-media/github"
import Instagram from "../../../../assets/icons/social-media/instagram"
import Linkedin from "../../../../assets/icons/social-media/linkedin"
import Mail from "../../../../assets/icons/social-media/mail"
import Twitter from "../../../../assets/icons/social-media/twitter"

export default () => {
    return (
        // <!-- footer - start -->
        <div id=" footer" className="bg-slate-900/95 py-24">
            <div className="container">
                <div id="footer-container" className="grid grid-cols-4">
                    <div id="about-app" className="flex flex-col gap-3">
                        <h1 className="flex items-center text-3xl font-semibold text-gray-200">
                            P<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-paw-print stroke-primary">
                                <circle cx="11" cy="4" r="2" />
                                <circle cx="18" cy="8" r="2" />
                                <circle cx="20" cy="16" r="2" />
                                <path
                                    d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
                            </svg>ti.kom
                        </h1>
                        <p className="text-xs text-muted-text font-extralight">Kuşbaba Köyü Akçapınar Mahallesi Öteyaka
                            Sok.<br />
                            Bucak Burdur Türkiye</p>
                    </div>
                    <div id="links" className="flex flex-col gap-8 items-center">
                        <h6 className="text-accent-text uppercase">takip edin</h6>
                        <div id="social-media" className="w-fit grid grid-cols-3 gap-3">
                            <a href="mailto:muhammetsarican@gmail.com" className="bg-tertiary p-1 rounded-md">
                                <Mail className={""} />
                            </a>
                            <a href="https://github.com/muhammetsarican" className="bg-tertiary p-1 rounded-md">
                                <Github className={""} />
                            </a>
                            <a href="https://linkedin.com/in/muhammetsarican" className="bg-tertiary p-1 rounded-md">
                                <Linkedin className={""} />
                            </a>
                            <a href="" className="bg-tertiary p-1 rounded-md">
                                <Instagram className={""} />
                            </a>
                            <a href="" className="bg-tertiary p-1 rounded-md">
                                <Facebook className={""} />
                            </a>
                            <a href="" className="bg-tertiary p-1 rounded-md">
                                <Twitter className={""} />
                            </a>
                        </div>
                    </div>
                    <div id="about-us" className="flex flex-col gap-8 items-center">
                        <h6 className="text-accent-text uppercase">biz</h6>
                        <div className="flex flex-col gap-1 capitalize text-sm text-muted-text font-thin ">
                            <a href="" className="hover:text-link-text hover:underline hover:underline-offset-4">hakkımızda</a>
                            <a href="" className="hover:text-link-text hover:underline hover:underline-offset-4">kullanım
                                şartları</a>
                            <a href="" className="hover:text-link-text hover:underline hover:underline-offset-4">gizlilik
                                sözleşmesi</a>
                            <a href="" className="hover:text-link-text hover:underline hover:underline-offset-4">mesafeli satış
                                sözleşmesi</a>
                            <a href="" className="hover:text-link-text hover:underline hover:underline-offset-4">teslimat ve
                                iade</a>
                        </div>
                    </div>
                    <div id="contact-me" className="flex flex-col gap-8 items-center">
                        <h6 className="text-accent-text uppercase">İletişime geçin</h6>

                        <div id="form" className="my-auto">
                            <form action="" className="flex items-center justify-end">
                                <input className="px-5 py-2 w-3/4 h-9 rounded-s-full focus:outline-none" type="email" name=""
                                    placeholder="E-postanızı giriniz" id=""></input>
                                <button className="bg-accent p-1.5 h-9 rounded-e-full hover:bg-primary">
                                    <ChevronRight className={""} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <!-- footer - end -->
    )
}