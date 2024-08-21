import ClipboardList from "../../../../../../../assets/icons/clipboard-list";
import ClipboardPlus from "../../../../../../../assets/icons/clipboard-plus";

export default (props: any) => (
    //  <!-- operation menu - start -->
    <div id="operation-menu"
        className="w-1/4 rounded-s-xl text-primary-text border border-secondary/20 overflow-hidden divide-y-2 divide-secondary/30">
        <div id="operation-menu-title" className="flex gap-3 text-accent-text p-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1"
                stroke-linecap="round" stroke-linejoin="round"
                className="lucide lucide-menu w-6 h-6 stroke-gray-300">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <h6 className="font-sora capitalize text-xl">
                Menü</h6>
        </div>
        <ul className="flex flex-col items-center text-center divide-y divide-slate-800/10">
            <li className="w-full">
                <button
                    className="w-full flex items-center justify-center px-1 py-3 hover:bg-tertiary/90 hover:text-off-white-text"
                    id="operation-button" data-referPage="list-page" onClick={() => {
                        props.makeAllFalse();
                        props.setIsListOpen(true);
                    }}>
                    <span className="flex justify-between items-center w-4/6">
                        <ClipboardList className={""} />
                        <p className="capitalize w-full text-start px-5">kayıt listesi</p>
                    </span>
                </button>
            </li>
            <li className="w-full">
                <button
                    className="w-full flex items-center justify-center px-1 py-3 hover:bg-tertiary/90 hover:text-off-white-text"
                    id="operation-button" data-referPage="create-page" onClick={() => {
                        props.makeAllFalse();
                        props.setIsCreateOpen(true);
                    }}>
                    <span className="flex justify-between items-center w-4/6">
                        <ClipboardPlus className={""} />
                        <p className="capitalize w-full text-start px-5">yeni kayıt</p>
                    </span>
                </button>
            </li>
        </ul>
    </div>
    //  <!-- operation menu - end -->
)