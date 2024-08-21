import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer"
import HeaderComp from "./nav/HeaderComp"

export default () => {

    return (
        <>
            <div className="flex flex-col">
                <HeaderComp />
                <div id="content" className="flex flex-col gap-5 font-nunito">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    )
}