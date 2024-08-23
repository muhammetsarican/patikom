import ClipboardList from "../../../../../../../assets/icons/clipboard-list";
import ClipboardPen from "../../../../../../../assets/icons/clipboard-pen";
import ClipboardX from "../../../../../../../assets/icons/clipboard-x";
import { useTreatmentData } from "../../../../../../../providers/TreatmentDataProvider";

export default ({ props, treatment }: { props: any, treatment: any }) => {
    const { setCurrentTreatment, deleteTreatment } = useTreatmentData();

    return (
        <tr className="text-center even:bg-primary/10 hover:bg-gray-100">
            <td className="border py-3">{treatment.title}</td>
            <td className="border py-3">{treatment.animal_id?.name}</td>
            <td className="border py-3">{treatment.vet_id?.fname} {treatment.vet_id?.lname}</td>
            <td className="border flex" colSpan={2}>
                <button
                    className="hover:bg-blue-500 text-white w-full h-full py-3 rounded-sm"
                    id="operation-button" data-referPage="detail-page" onClick={() => {
                        setCurrentTreatment(treatment);
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
                        setCurrentTreatment(treatment);
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
                            deleteTreatment(treatment._id);
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