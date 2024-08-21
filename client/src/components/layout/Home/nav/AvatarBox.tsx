import Bone from "../../../../assets/icons/panel/bone"
import Clipboard from "../../../../assets/icons/panel/clipboard"
import HeartPulse from "../../../../assets/icons/panel/heart-pulse"
import Syringe from "../../../../assets/icons/panel/syringe"
import { Link } from "react-router-dom"

export default () => {
    return (
        <div id="avatar-box"
            className="absolute top-[90px] right-[300px] overflow-hidden bg-primary w-fit h-fit rounded-lg text-off-white-text divide-y-2 divide-background/70 shadow-2xl z-50">
            <div id="avatar-info" className="flex flex-col gap-3 bg-tertiary px-5 py-3">
                <div id="non-authenticated">
                    <Link to="/auth/login" className="flex gap-7 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.3" stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-key w-11 h-11 border border-secondary p-2 rounded-full stroke-off-white-text hover:bg-primary">
                            <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
                            <path d="m21 2-9.6 9.6" />
                            <circle cx="7.5" cy="15.5" r="5.5" />
                        </svg>
                        <p className="font-montserrat font-medium text-start group-hover/avatar:flex">
                            Oturum Aç / Kayıt Ol</p>
                    </Link>
                </div>
                <div id="authenticated" className="flex gap-7 items-center">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                            stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"
                            className="lucide lucide-user-cog w-11 h-11 border border-secondary p-2 rounded-full stroke-off-white-text hover:bg-green-500/60">
                            <circle cx="18" cy="15" r="3" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                            <path d="m21.7 16.4-.9-.3" />
                            <path d="m15.2 13.9-.9-.3" />
                            <path d="m16.6 18.7.3-.9" />
                            <path d="m19.1 12.2.3-.9" />
                            <path d="m19.6 18.7-.4-1" />
                            <path d="m16.8 12.3-.4-1" />
                            <path d="m14.3 16.6 1-.4" />
                            <path d="m20.7 13.8 1-.4" />
                        </svg>
                    </button>
                    <p className="font-montserrat font-medium text-start group-hover/avatar:flex">
                        Muhammet Sarıcan</p>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                            stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"
                            className="lucide lucide-log-out w-11 h-11 border border-secondary p-2 rounded-full stroke-off-white-text hover:bg-red-500/60">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1="21" x2="9" y1="12" y2="12" />
                        </svg>
                    </button>
                </div>
            </div>
            <div id="avatar-processes"
                className="flex flex-col items-start font-light divide-y divide-background/40">
                <Link to="/my-animal"
                    className="flex justify-center w-full hover:bg-accent-text hover:font-normal">
                    <div className="flex justify-between items-center w-5/6 py-2">
                        <Bone className={""} />
                        <p className="w-full text-center">Hayvanlarım</p>
                    </div>
                </Link>
                <Link to="/vaccine-records"
                    className="flex justify-center w-full hover:bg-accent-text hover:font-normal">
                    <div className="flex justify-between items-center w-5/6 py-2">
                        <Syringe className={""} />
                        <p className="w-full text-center">Kayıtlı Aşılar</p>
                    </div>
                </Link>
                <Link to="/pregnant-log"
                    className="flex justify-center w-full hover:bg-accent-text hover:font-normal">
                    <div className="flex justify-between items-center w-5/6 py-2">
                        <Clipboard className="" />
                        <p className="w-full text-center">Gebelik Takibi</p>
                    </div>
                </Link>
                <Link to="/treatment-history"
                    className="flex justify-center w-full hover:bg-accent-text hover:font-normal">
                    <div className="flex justify-between items-center w-5/6 py-2">
                        <HeartPulse className={""} />
                        <p className="w-full text-center">Tedavi Geçmişi</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}