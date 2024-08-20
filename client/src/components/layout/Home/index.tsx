import AboutMe from "./content/About Me";
import ClientPages from "./content/Client Pages";
import ContactMe from "./content/Contact Me";
import UI from "./content/UI";
import Footer from "./footer/Footer"
import HeaderComp from "./nav/HeaderComp"

export default () => {

    return (
        <>
            <div className="flex flex-col">
                <HeaderComp />
                <div id="content" className="flex flex-col gap-5 font-nunito">
                    <UI />
                    <ClientPages />
                    <AboutMe />
                    <ContactMe />
                </div>
            </div>
            <Footer />
        </>
    )
}