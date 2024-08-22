import ContainerBg from "@/assets/images/register/container-bg.png"

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useAuth } from "../../../../../providers/AuthProvider";
import { Link } from "react-router-dom";

export default () => {
    const { registerSubmit } = useAuth();

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const schema = yup.object({
        fname: yup.string().min(3, "İsim alanı en az 3 karakterden oluşmalıdır."),
        lname: yup.string().min(3, "Soyisim alanı en az 3 karakterden oluşmalıdır."),
        mail: yup.string().email("Lütfen geçerli bir e-posta adresi giriniz.").matches(emailRegex, "E-postanız geçerli kurallar ile uyuşmuyor.").required("E-posta alanı girilmesi zorunludur."),
        password: yup.string().min(8, "Şifre en az 8 karakterden oluşmalıdır.").required("Şifre alanı girilmesi zorunludur."),
    })
    const { register, formState: { errors: { fname, lname, mail, password } }, handleSubmit } = useForm({ resolver: yupResolver(schema) })
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
                            <form action="" className="flex flex-col gap-5 w-5/6 h-1/2 px-3 py-7" onSubmit={handleSubmit(registerSubmit)}>
                                <div className="flex flex-col gap-3">
                                    <input
                                        className="p-3 rounded-lg font-montserrat text-tertiary text-sm h-fit focus:outline-none shadow-2xl"
                                        type="text" id="" placeholder="İsminizi giriniz" {...register("fname")}></input>
                                    {fname && <p className="text-xs text-red-500 font-light">* {fname.message}</p>}
                                    <input
                                        className="p-3 rounded-lg font-montserrat text-tertiary text-sm h-fit focus:outline-none shadow-2xl"
                                        type="text" id="" placeholder="Soy isminizi giriniz" {...register("lname")}></input>
                                    {lname && <p className="text-xs text-red-500 font-light">* {lname.message}
                                    </p>}
                                    <input
                                        className="p-3 rounded-lg font-montserrat text-tertiary text-sm h-fit focus:outline-none shadow-2xl"
                                        type="email" id="" placeholder="E-postanızı giriniz" {...register("mail")}></input>
                                    {mail && <p className="text-xs text-red-500 font-light">* {mail.message}
                                    </p>}
                                    <input
                                        className="p-3 rounded-lg font-montserrat text-tertiary text-sm h-fit focus:outline-none shadow-2xl"
                                        type="password" id="" placeholder="Şifrenizi giriniz" {...register("password")}></input>
                                    {password && <p className="text-xs text-red-500 font-light">* {password.message}</p>}
                                    <input
                                        className="p-3 rounded-lg font-montserrat text-tertiary text-sm h-fit focus:outline-none shadow-2xl"
                                        type="password" id="" placeholder="Şifrenizi tekrar giriniz"></input>
                                    <p className="hidden text-xs text-red-500 font-light">* Şifre tekrar girilmesi zorunlu
                                        alandır.</p>

                                </div>
                                <button type="submit"
                                    className="flex gap-3 justify-center items-center bg-tertiary text-off-white-text p-3 font-semibold rounded-lg hover:bg-[#8351D8]">
                                    <p>Kayıt Ol</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-user-plus w-5 h-5">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <line x1="19" x2="19" y1="8" y2="14" />
                                        <line x1="22" x2="16" y1="11" y2="11" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                        <div id="other-links" className="text-center text-sm text-primary-text py-10">
                            <p>Hesabınız varsa, giriş yapmak için <Link to="../login"
                                className="text-tertiary font-bold hover:text-link-text underline underline-offset-2">giriş
                                yap</Link>'a
                                ilerleyiniz.</p>
                        </div>
                    </div>
                </div>
            </div>
            <span id="fligree" className="absolute top-0 w-full h-full bg-slate-900/1 z-0"></span>
        </>
    )
}