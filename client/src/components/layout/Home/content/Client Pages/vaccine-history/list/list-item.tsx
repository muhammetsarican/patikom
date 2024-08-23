import ClipboardList from "../../../../../../../assets/icons/clipboard-list";
import ClipboardPen from "../../../../../../../assets/icons/clipboard-pen";
import ClipboardX from "../../../../../../../assets/icons/clipboard-x";

import { useVaccineData } from "../../../../../../../providers/VaccineDataProvider";

export default ({ props, vaccine }: { props: any, vaccine: any }) => {
    const { setCurrentVaccine, deleteVaccine } = useVaccineData();

    return (
        <tr className="text-center even:bg-primary/10 hover:bg-gray-100">
            <td className="border py-3">{vaccine.name}</td>
            <td className="border py-3">{vaccine.keyword}</td>
            <td className="border flex">
                <button
                    className="hover:bg-blue-500 text-white w-full h-full py-3 rounded-sm"
                    id="operation-button" data-referPage="detail-page" onClick={() => {
                        setCurrentVaccine(vaccine);
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
                        setCurrentVaccine(vaccine);
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
                            deleteVaccine(vaccine._id);
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