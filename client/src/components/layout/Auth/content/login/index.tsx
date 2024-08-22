import ContainerBg from "@/assets/images/login/container-bg.png"

import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../../../../providers/AuthProvider";
import { Link } from "react-router-dom";

export default () => {
    const { loginSubmit } = useAuth();

    type FormDataType = {
        mail: string,
        password: string
    }

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const schema = yup.object({
        mail: yup.string().email("Lütfen geçerli bir mail adresi giriniz.").matches(emailRegex, "Lütfen geçerli bir mail giriniz.").required("E-posta girilmesi zorunlu bir alandır."),
        password: yup.string().min(8, "Şifre en az 8 karakterden oluşmalıdır.").required("Şifre girilmesi zorunlu bir alandır."),
    })

    const { register, formState: { errors: { mail: mailError, password: passwordError } }, handleSubmit } = useForm<FormDataType>({ resolver: yupResolver(schema) })

    return (
        <>
            <div className="container flex justify-center items-center h-full" style={{ marginTop: "5%", marginBottom: "5%" }}>
                <div className="relative w-5/6 h-3/4 rounded-lg overflow-hidden z-10">
                    <img className="w-full h-full object-cover object-center" src={ContainerBg} alt=""></img>
                    <div id="login-box" className="absolute top-0 right-0 w-1/2 h-full bg-slate-200/80 text-primary-text p-3">
                        <div id="title-box" className="flex flex-col gap-2 items-center px-3 py-16">
                            <h6 id="login-title" className="font-sora text-5xl text-center text-accent-text">Hoş Geldiniz!</h6>
                            <p className="text-muted-text">Hesabınızda Oturum Açın</p>
                        </div>
                        <div id="form" className="flex justify-center items-start h-fit">
                            <form action="" className="flex flex-col gap-5 w-5/6 h-1/2 px-3 py-7" onSubmit={handleSubmit(loginSubmit)}>
                                <div className="flex flex-col gap-3">
                                    <input
                                        className="p-3 rounded-lg font-montserrat text-accent-text text-sm h-fit focus:outline-none"
                                        type="text" id="" placeholder="E-postanızı giriniz" {...register("mail")}></input>
                                    <p className={`${mailError ? "flex" : "hidden"} text-xs text-red-500 font-light`}>* {mailError?.message}</p>
                                    <input
                                        className="p-3 rounded-lg font-montserrat text-accent-text text-sm h-fit focus:outline-none"
                                        type="password" id="" placeholder="Şifrenizi giriniz" {...register("password")}></input>
                                    <p className={`${passwordError ? "flex" : "hidden"} text-xs text-red-500 font-light`}>* {passwordError?.message}</p>

                                </div>
                                <button type="submit"
                                    className="flex gap-3 justify-center items-center bg-primary text-off-white-text p-3 font-semibold rounded-lg hover:bg-accent-text">
                                    <p>Giriş Yap</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-log-in w-5 h-5">
                                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                                        <polyline points="10 17 15 12 10 7" />
                                        <line x1="15" x2="3" y1="12" y2="12" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                        <div id="other-links" className="text-center text-sm text-primary-text py-10">
                            <p>Hesabınız yoksa kayıt olmak için, <Link to="../register"
                                className="text-accent font-bold hover:text-link-text underline underline-offset-2">kayıt
                                ol</Link>'a
                                ilerleyiniz.</p>
                        </div>
                    </div>
                </div>
            </div>
            <span id="fligree" className="absolute top-0 w-full h-full bg-slate-900/1 z-0"></span>
        </>
    )
}