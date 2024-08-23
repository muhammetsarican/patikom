import { usePregnantLogData } from "../../../../../../../providers/PregnantLogDataProvider"

export default () => {
    const { currentPregnantLog } = usePregnantLogData();

    return (
        //  <!-- record detail - start -->
        <div id="operation-item"
            className="flex text-accent-text gap-7 flex-col border border-secondary/20 rounded-e-xl h-full"
            data-name="detail-page">
            <div id="header"
                className="flex items-center gap-3 justify-between p-5 border-b-2 border-secondary/30">
                <div id="header-title" className="flex gap-3 items-center h-9 py-1">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="1" strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-square-pen w-6 h-6 stroke-gray-300">
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path
                                d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                        </svg>
                    </span>
                    <h1 className="font-sora text-lg sm:text-xl">Gebelik Takibi / Kayıt Detayı / {currentPregnantLog._id}</h1>
                </div>
            </div>
            <div className="px-6 h-full">
                <div className="rounded-lg overflow-hidden h-full">
                    <form action=""
                        className="flex flex-col justify-between gap-3 p-3 w-full h-full text-xs text-gray-400">
                        <div className="grid grid-cols-2 gap-3 h-fit">
                            <p
                                className="col-span-2 border rounded-xl p-4 w-full text-xs outline-none focus:outline-offset-0 focus:outline focus:outline-primary">
                                Adı: {currentPregnantLog.animal_id?.name}</p>
                            <p
                                className="col-span-2 border rounded-xl p-4 w-full text-xs outline-none focus:outline-offset-0 focus:outline focus:outline-primary">
                                Gebelik Başlangıç Tarihi: {new Date(currentPregnantLog.pregnant_date).toLocaleDateString()}</p>
                            <p
                                className="col-span-2 border rounded-xl p-4 w-full text-xs outline-none focus:outline-offset-0 focus:outline focus:outline-primary">
                                Gebelik Durumu: {currentPregnantLog.is_completed ? "Tamamlandı" : "Devam ediyor"}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        //  <!-- record detail - end -->
    )
}