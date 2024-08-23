import ClipboardList from "../../../../../../../assets/icons/clipboard-list";
import ClipboardPen from "../../../../../../../assets/icons/clipboard-pen";
import ClipboardX from "../../../../../../../assets/icons/clipboard-x";
import { useAnimalData } from "../../../../../../../providers/AnimalDataProvider";

export default ({ props, animal }: { props: any, animal: any }) => {
    const { setCurrentAnimal, deleteAnimal } = useAnimalData();

    return (
        <tr className="text-center even:bg-primary/10 hover:bg-gray-100">
            <td className="border py-3">{animal.name}</td>
            <td className="border py-3">{animal.mother_id?.name}
            </td>
            <td className="border py-3">{animal.folk_id?.name}</td>
            <td className="border py-3">{animal.gender === "female" ? "Dişi" : "Erkek"}</td>
            <td className="border py-3">{new Date(animal.born_date).toLocaleDateString()}</td>
            <td className="border py-3">{animal.chip_status === "0" ? "Yok" : "Var"}</td>
            <td className="border flex" colSpan={2}>
                <button
                    className="hover:bg-blue-500 text-white w-full h-full py-3 rounded-sm"
                    id="operation-button" data-referPage="detail-page" onClick={() => {
                        setCurrentAnimal(animal);
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
                        setCurrentAnimal(animal);
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
                            deleteAnimal(animal._id);
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