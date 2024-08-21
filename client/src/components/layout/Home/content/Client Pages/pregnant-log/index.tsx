import OperationMenu from "../components/operation-menu"
import TitleBanner from "../../../title-banner"
import Create from "./create"
import Detail from "./detail"
import Edit from "./edit"
import List from "./list"

import BannerImage from "@/assets/images/pregnant-log/title-banner.png"

export default () => {
    return (
        <>
            <TitleBanner Title="Gebelik Takibi" BannerImage={BannerImage} className="bg-background object-[0,-450px]" />
            {/* <!-- animal operation - start --> */}
            <div id="animal-operation" className="bg-background/50 py-14">
                <div className="container px-0 flex bg-white rounded-xl w-full h-[75svh]">
                    <OperationMenu />
                    {/* <!-- operation page - start --> */}
                    <div id="operation-page" className="w-full">
                        <List />
                        <Create />
                        <Edit />
                        <Detail />
                    </div>
                    {/* <!-- operation page - end --> */}
                </div>
                {/* <!-- animal operation - end --> */}
            </div>
        </>
    )
}