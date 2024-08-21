import ClipboardList from "../../../../../../../assets/icons/clipboard-list";
import ClipboardPen from "../../../../../../../assets/icons/clipboard-pen";
import ClipboardX from "../../../../../../../assets/icons/clipboard-x";

export default (props: any) => (
    <tr className="text-center even:bg-primary/10 hover:bg-gray-100">
        <td className="border py-3">boncuk</td>
        <td className="border py-3">fıstık
        </td>
        <td className="border py-3">golder retriever</td>
        <td className="border py-3">dişi</td>
        <td className="border py-3">16.16.2020</td>
        <td className="border py-3">yok</td>
        <td className="border flex" colSpan={2}>
            <button
                className="hover:bg-blue-500 text-white w-full h-full py-3 rounded-sm"
                id="operation-button" data-referPage="detail-page" onClick={() => {
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
                    props.makeAllFalse();
                    props.setIsEditOpen(true);
                }}>
                <span className="flex justify-center">
                    <ClipboardPen className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
            </button>
            <button
                className="hover:bg-red-500 text-white w-full h-full py-3 rounded-sm">
                <span className="flex justify-center">
                    <ClipboardX className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
            </button>
        </td>
    </tr>
)