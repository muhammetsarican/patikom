import ClipboardList from "../../../../../../../assets/icons/clipboard-list";
import ClipboardPen from "../../../../../../../assets/icons/clipboard-pen";
import ClipboardX from "../../../../../../../assets/icons/clipboard-x";
import { usePregnantLogData } from "../../../../../../../providers/PregnantLogDataProvider";

export default ({ props, log }: { props: any, log: any }) => {
    const { setCurrentPregnantLog, deletePregnantLog } = usePregnantLogData();

    return (
        <tr className="text-center even:bg-primary/10 hover:bg-gray-100">
            <td className="border py-3">{log.animal_id?.name}</td>
            <td className="border py-3">{new Date(log.pregnant_date).toLocaleDateString()}</td>
            <td className="border py-3">{log.is_completed ? "Tamamlandı" : "Devam ediyor"}</td>
            <td className="border flex" colSpan={2}>
                <button
                    className="hover:bg-blue-500 text-white w-full h-full py-3 rounded-sm"
                    id="operation-button" data-referPage="detail-page" onClick={() => {
                        setCurrentPregnantLog(log);
                        props.makeAllFalse();
                        props.setIsDetailOpen(true);
                    }}>
                    <span className="flex justify-center">
                        <ClipboardList className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                </button>
                <button
                    className="hover:bg-green-500 text-white w-full h-full py-3 rounded-sm"
                    id="operation-button" data-referPage="edit-page" onClick={() => {
                        setCurrentPregnantLog(log);
                        props.makeAllFalse();
                        props.setIsEditOpen(true);
                    }}>
                    <span className="flex justify-center">
                        <ClipboardPen className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                </button>
                <button
                    className="hover:bg-red-500 text-white w-full h-full py-3 rounded-sm" onClick={() => {
                        if (confirm("Emin misiniz?")) {
                            deletePregnantLog(log._id);
                        }
                    }}>
                    <span className="flex justify-center">
                        <ClipboardX className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                </button>
            </td>
        </tr>
    )
}