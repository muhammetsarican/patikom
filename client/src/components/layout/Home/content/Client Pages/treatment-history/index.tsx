import OperationMenu from "../components/operation-menu"
import TitleBanner from "../../../title-banner"
import Create from "./create"
import Detail from "./detail"
import Edit from "./edit"
import List from "./list"

import BannerImage from "@/assets/images/treatment-history/title-banner.png";
import { useState } from "react"

export default () => {
    const [isListOpen, setIsListOpen] = useState(true);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const makeAllFalse = () => {
        setIsListOpen(false);
        setIsCreateOpen(false);
        setIsEditOpen(false);
        setIsDetailOpen(false);
    }

    const OperationMenuProps = {
        setIsListOpen,
        setIsCreateOpen,
        makeAllFalse
    }

    const ListPageProps = {
        setIsCreateOpen,
        setIsEditOpen,
        setIsDetailOpen,
        makeAllFalse
    }
    return (
        <>
            <TitleBanner Title="Tedavi Geçmişi" BannerImage={BannerImage} className="bg-secondary object-[0,-500px] " />
            {/* <!-- animal operation - start --> */}
            <div id="animal-operation" className="bg-background/50 py-14">
                <div className="container px-0 flex bg-white rounded-xl w-full h-[75svh]">
                    <OperationMenu {...OperationMenuProps} />
                    {/* <!-- operation page - start --> */}
                    <div id="operation-page" className="w-full">
                        {isListOpen && <List {...ListPageProps} />}
                        {isCreateOpen && <Create />}
                        {isEditOpen && <Edit />}
                        {isDetailOpen && <Detail />}
                    </div>
                    {/* <!-- operation page - end --> */}
                </div>
                {/* <!-- animal operation - end --> */}
            </div>
        </>
    )
}