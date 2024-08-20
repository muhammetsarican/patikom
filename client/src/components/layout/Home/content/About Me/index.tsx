import BannerImage from "@/assets/images/about-me/title-banner.png";
import Mail from "../../../../../assets/icons/social-media/mail";
import Github from "../../../../../assets/icons/social-media/github";
import Linkedin from "../../../../../assets/icons/social-media/linkedin";
import TitleBanner from "../../title-banner";

export default () => (
    <>
        <TitleBanner Title="Hakkımda" BannerImage={BannerImage} className="bg-tertiary object-[0,-390px]" />
        {/* <!-- about me content - start --> */}
        <div id="about-me-content" className="bg-background/50 py-14">
            <div className="container px-0 flex flex-col items-center bg-white rounded-xl w-full h-[75svh]">
                <div id="about-me-title" className="w-full h-fit flex justify-center items-center p-5">

                    <h6 className="flex items-center gap-3 text-accent-text text-5xl font-sora font-light">Ben Kimim
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1"
                                stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-circle-help w-20 h-20 stroke-accent-text">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                <path d="M12 17h.01" />
                            </svg>
                        </span>
                    </h6>
                </div>
                <div id="about-me-description" className=" w-5/6 p-3">
                    <span className="block text-center text-lg font-semibold p-5">Hey there <span
                        className="text-2xl">👋</span>,</span>
                    <p className="font-nunito indent-10">My name is Muhammet, I am doing my
                        internship at
                        SmartICT for
                        graduate my
                        bachelor program
                        that Computer Science at Karabuk University. I am working as a freelancer since April 2022,
                        at this period I made more than 10 projects. This projects are about desktop, web and AI
                        applications, they were written with C#, Python, Javascript and Typescript languages. At
                        this process, I gained a lot of skills and I got new chances improve myself. Later, I
                        decided to the which field I want to work at this and I realized that I want to work as Full
                        Stack
                        Developer. Because, the language which I want to learn much more than the others, it
                        provides to create backend, frontend and mobile all together. This language is JavaScript.
                        After, I started to learn with JavaScript. I had some experience with this before. Later
                        then, I started to learn React Js lib since June 2023 and I liked it so much. I created many
                        projects with it. and at this time, I discovered Kablosuz Kedi channel at Youtube with his
                        docker course, I loved the lecturer's narrative style at this course. With this channel's
                        contents, I
                        learned to how to deploy website on server efficiently. Later, I started the Vue Js bootcamp
                        at this channel since Jan 2024. And with this bootcamp, firstly, I learned how to create Vue
                        2 app, the I
                        learned how to create Vue 3 app. Then, I started to Asana Clone course, in this course, I
                        learned how to create an APIs with Node Js and Express Js, learned how to write efficient,
                        readable and simple codes, learned how to organize a project. Lastly, I decided to do my
                        internship. I got accepted by Okan Karaçor from SmartICT for doing my
                        internship. I decided make the project that we named as PatiKom. This project provides
                        tracking people pets from a web
                        app.<br /><br /> You can inspect the codes from <a
                            href="https://github.com/muhammetsarican/patikom"
                            className="underline underline-offset-4 text-link-text">Patikom Project</a>.<br /><br />My
                        special thanks to <a href="https://www.linkedin.com/in/okan-kara%C3%A7or-b584ab217/"
                            className="underline underline-offset-4 text-link-text">Okan
                            Karaçor</a> for gave me a chance.
                    </p>
                </div>
                <div id="about-me-links" className="flex gap-3 items-center pt-10">
                    <a href="mailto:muhammetsarican.com" className="p-1 bg-tertiary rounded-md hover:bg-purple-900/80">
                        <span><Mail className="w-7 h-7" /></span>
                    </a>
                    <a href="https://github.com/muhammetsarican"
                        className="p-1 bg-tertiary rounded-md hover:bg-purple-900/80">
                        <span><Github className="w-7 h-7" /></span>
                    </a>
                    <a href="https://linkedin.com/in/muhammetsarican"
                        className="p-1 bg-tertiary rounded-md hover:bg-purple-900/80">
                        <span><Linkedin className="w-7 h-7" /></span>
                    </a>
                </div>
            </div>
            {/* <!-- about me content - end --> */}
        </div>
        {/* <!-- content - end --> */}
    </>
)