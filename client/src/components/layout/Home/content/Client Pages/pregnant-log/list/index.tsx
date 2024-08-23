import { usePregnantLogData } from "../../../../../../../providers/PregnantLogDataProvider";
import NoRecord from "../../components/no-record";
import ListItem from "./list-item";

export default (props: any) => {
    const { pregnantLogArray } = usePregnantLogData();

    return (
        //  <!-- list record - start -->
        <div id="operation-item"
            className="flex text-accent-text gap-7 flex-col border border-secondary/20 rounded-e-xl h-full"
            data-name="list-page">
            <div id="header"
                className="flex items-center gap-3 justify-between p-5 border-b-2 border-secondary/30">
                <div id="header-title" className="flex gap-3 items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
                            strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-layout-list w-6 h-6 stroke-gray-300">
                            <rect width="7" height="7" x="3" y="3" rx="1" />
                            <rect width="7" height="7" x="3" y="14" rx="1" />
                            <path d="M14 4h7" />
                            <path d="M14 9h7" />
                            <path d="M14 15h7" />
                            <path d="M14 20h7" />
                        </svg>
                    </span>
                    <h1 className="font-sora text-lg sm:text-xl">Gebelik Takibi / Kayıt Listesi</h1>
                </div>
                <button id="operation-button" data-referPage="create-page" onClick={() => {
                    props.makeAllFalse();
                    props.setIsCreateOpen(true);
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="w-9 h-9 p-1 lucide lucide-plus stroke-green-500 rounded-full hover:bg-green-500/30">
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                    </svg>
                </button>
            </div>
            <div className="px-6">
                <div className="rounded-lg overflow-hidden border">
                    {!pregnantLogArray && <NoRecord />}
                    {pregnantLogArray && <table className="w-full text-xs sm:text-sm">
                        <thead className="bg-slate-50 text-accent-text">
                            <tr className="uppercase">
                                <th className="py-4">hayvan adı</th>
                                <th className="py-4">gebelik tarihi</th>
                                <th className="py-4">durumu</th>
                                <th className="py-4" colSpan={2}>işlemler</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-primary-text capitalize">
                            {pregnantLogArray.map((log: any) => (
                                <ListItem props={props} log={log} />
                            ))}
                        </tbody>
                        {pregnantLogArray.length > 9 && <tfoot className="bg-slate-50 text-accent-text">
                            <tr className="uppercase">
                                <th className="py-3" colSpan={100}>
                                    <div id="paginate" className="flex items-center justify-center gap-1">
                                        <button
                                            className="group/paginate flex items-center justify-center w-7 h-7 bg-white rounded-lg hover:bg-tertiary hover:text-secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none"
                                                strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-chevron-down stroke-tertiary rotate-90 group-hover/paginate:stroke-off-white-text">
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </button>
                                        <button
                                            className="w-7 h-7 bg-white rounded-lg hover:bg-primary hover:text-off-white-text">1</button>
                                        <button
                                            className="w-7 h-7 bg-white rounded-lg hover:bg-primary hover:text-off-white-text">2</button>
                                        <button
                                            className="w-7 h-7 bg-white rounded-lg hover:bg-primary hover:text-off-white-text">3</button>
                                        <button
                                            className="w-7 h-7 bg-white rounded-lg hover:bg-primary hover:text-off-white-text">4</button>
                                        <button
                                            className="w-7 h-7 bg-white rounded-lg hover:bg-primary hover:text-off-white-text">5</button>
                                        <button
                                            className="w-7 h-7 bg-white rounded-lg hover:bg-primary hover:text-off-white-text">6</button>
                                        <button
                                            className="w-7 h-7 bg-white rounded-lg hover:bg-primary hover:text-off-white-text">7</button>
                                        <button
                                            className="w-7 h-7 bg-white rounded-lg hover:bg-primary hover:text-off-white-text">8</button>
                                        <button
                                            className="w-7 h-7 bg-white rounded-lg hover:bg-primary hover:text-off-white-text">9</button>
                                        <button
                                            className="w-7 h-7 bg-white rounded-lg hover:bg-primary hover:text-off-white-text">10</button>
                                        <button
                                            className="group/paginate flex items-center justify-center w-7 h-7 bg-white rounded-lg hover:bg-tertiary hover:text-secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none"
                                                strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-chevron-down stroke-tertiary -rotate-90 group-hover/paginate:stroke-off-white-text">
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </button>
                                    </div>
                                </th>
                            </tr>
                        </tfoot>}
                    </table>}
                </div>
            </div>
        </div>
        //  <!-- list record - end -->
    )
}