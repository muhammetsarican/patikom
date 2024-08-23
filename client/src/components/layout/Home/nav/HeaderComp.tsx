import { useState } from "react"
import BookOpenText from "../../../../assets/icons/book-open-text"
import House from "../../../../assets/icons/house"
import AvatarBox from "./AvatarBox"
import { Link } from "react-router-dom"

export default () => {
    const [avatarBoxIsOpen, setAvatarBoxIsOpen] = useState(false);
    return (
        // <!-- header - start -->
        <div id="header" className="relative flex items-center justify-between bg-off-white-text px-2 py-7">
            <div className="container flex items-center justify-between">
                <div id="title" className="">
                    <Link to="/home">
                        <h1 className="flex items-center text-4xl font-semibold">
                            P<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"
                                fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="lucide lucide-paw-print stroke-primary">
                                <circle cx="11" cy="4" r="2" />
                                <circle cx="18" cy="8" r="2" />
                                <circle cx="20" cy="16" r="2" />
                                <path
                                    d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
                            </svg>ti.kom
                        </h1>
                    </Link>
                </div>
                <div className="menu w-3/4">
                    <ul className="flex gap-3 items-center justify-end text-sm">
                        <li>
                            <Link to="/home"
                                className="group/navigation-menu flex flex-col items-center justify-center px-3 py-1 rounded-sm hover:border-b-2 border-primary">
                                <House className="w-6 h-6" />
                                <p className="hidden text-accent-text group-hover/navigation-menu:flex">
                                    Anasayfa</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about-me"
                                className="group/navigation-menu flex flex-col items-center justify-center px-3 py-1 rounded-sm hover:border-b-2 border-primary">
                                <BookOpenText className="w-6 h-6" />
                                <p className="hidden text-accent-text group-hover/navigation-menu:flex">
                                    Hakkımda</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact-me"
                                className="group/navigation-menu flex flex-col items-center justify-center px-3 py-1 rounded-sm hover:border-b-2 border-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-phone w-6 h-6 stroke-accent-text">
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <p className="hidden text-accent-text group-hover/navigation-menu:flex">
                                    İletişim</p>
                            </Link>
                        </li>

                        <li
                            className="group/avatar min-w-12 min-h-12 ml-4 transition-all duration-1000 hover:text-off-white-text hover:cursor-pointer">
                            <div id="avatar" className={`flex items-center rounded-full ${avatarBoxIsOpen ? "bg-tertiary" : "bg-primary"}`} onClick={() => setAvatarBoxIsOpen(!avatarBoxIsOpen)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-circle-user w-12 h-12 border-primary p-1 stroke-off-white-text">
                                    <circle cx="12" cy="12" r="10" />
                                    <circle cx="12" cy="10" r="3" />
                                    <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>
                {avatarBoxIsOpen && <AvatarBox />}
            </div>
        </div>
        // <!-- header - end -->
    )
}