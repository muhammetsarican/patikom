import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useTreatmentData } from "../../../../../../../providers/TreatmentDataProvider";
import { useAnimalData } from "../../../../../../../providers/AnimalDataProvider";
import { useAuth } from "../../../../../../../providers/AuthProvider";
import { useCategoryData } from "../../../../../../../providers/CategoryDataProvider";
import { useMedicineData } from "../../../../../../../providers/MedicineDataProvider";
import ErrorText from "../../components/error-text";

export default () => {
    const { vetArray } = useAuth();
    const { animalArray } = useAnimalData();
    const { categoryArray } = useCategoryData();
    const { medicineArray } = useMedicineData();

    const { createSubmit } = useTreatmentData();

    const schema = yup.object({
        title: yup.string().required(),
        keyword: yup.string(),
        description: yup.string(),
        animal_id: yup.string().required(),
        vet_id: yup.string().required(),
        categories: yup.array().default([]),
        medicines: yup.array().default([])
    });

    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });

    return (
        //  <!-- create record - start -->
        <div id="operation-item"
            className="flex text-accent-text gap-7 flex-col border border-secondary/20 rounded-e-xl h-full"
            data-name="create-page">
            <div id="header"
                className="flex items-center gap-3 justify-between p-5 border-b-2 border-secondary/30">
                <div id="header-title" className="flex gap-3 items-center h-9 py-1">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
                            strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-file-plus-2 w-6 h-6 stroke-gray-300">
                            <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
                            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                            <path d="M3 15h6" />
                            <path d="M6 12v6" />
                        </svg>
                    </span>
                    <h1 className="font-sora text-lg sm:text-xl">Tedavi Geçmişi / Yeni Kayıt</h1>
                </div>
            </div>
            <div className="px-6 h-full">
                <div className="rounded-lg overflow-hidden h-full">
                    <form action=""
                        className="flex flex-col justify-between gap-3 p-3 w-full h-full text-xs text-tertiary" onSubmit={handleSubmit(createSubmit)}>
                        <div className="grid grid-cols-2 gap-3 h-fit">
                            <input type="text" placeholder="Başlığı giriniz"
                                className="col-span-2 border rounded-xl p-4 w-full text-xs outline-none focus:outline-offset-0 focus:outline focus:outline-primary" {...register("title")}></input>
                            {errors.title && <ErrorText err={errors.title.message || ""} />}
                            <input type="text" placeholder="Anahtar kelimeleri giriniz"
                                className="col-span-2 border rounded-xl p-4 w-full text-xs outline-none focus:outline-offset-0 focus:outline focus:outline-primary" {...register("keyword")}></input>
                            {errors.keyword && <ErrorText err={errors.keyword.message || ""} />}
                            <input type="text" placeholder="Açıklama giriniz"
                                className="col-span-2 border rounded-xl p-4 w-full text-xs outline-none focus:outline-offset-0 focus:outline focus:outline-primary" {...register("description")}></input>
                            {errors.description && <ErrorText err={errors.description.message || ""} />}
                            <select
                                className="border rounded-xl p-4 w-full bg-white text-xs text-gray-400 outline-none focus:outline-offset-0 focus:outline focus:outline-primary"
                                id="" {...register("animal_id")}>
                                <option value="0" className="text-gray-400">Hayvanı seçiniz</option>
                                {animalArray?.map((animal: any) => (
                                    <option value={animal._id} className={`text-gray-400`}>{animal.name}</option>
                                ))}
                            </select>
                            {errors.animal_id && <ErrorText err={errors.animal_id.message || ""} />}
                            <select
                                className="border rounded-xl p-4 w-full bg-white text-xs text-gray-400 outline-none focus:outline-offset-0 focus:outline focus:outline-primary"
                                id="" {...register("vet_id")}>
                                <option value="0" className="text-gray-400">Veterineri seçiniz</option>
                                {vetArray?.map((vet: any) => (
                                    <option value={vet._id} className="text-gray-400">{vet.fname} {vet.lname}</option>
                                ))}
                            </select>
                            {errors.vet_id && <ErrorText err={errors.vet_id.message || ""} />}
                            <select
                                className="border rounded-xl p-4 w-full bg-white text-xs text-gray-400 outline-none focus:outline-offset-0 focus:outline focus:outline-primary"
                                id="" {...register("categories.0")}>
                                <option value={"0"} className="text-gray-400">Kategori seçiniz</option>
                                {categoryArray?.map((category: any) => (
                                    <option value={category._id} className="text-gray-400">{category.title}</option>
                                ))}
                            </select>
                            {errors.categories && <ErrorText err={errors.categories.message || ""} />}
                            <select
                                className="border rounded-xl p-4 w-full bg-white text-xs text-gray-400 outline-none focus:outline-offset-0 focus:outline focus:outline-primary"
                                id="" {...register("medicines.0")}>
                                <option value={"0"} className="text-gray-400">İlaç seçiniz</option>
                                {medicineArray?.map((medicine: any) => (
                                    <option value={medicine._id} className="text-gray-400">{medicine.name}</option>
                                ))}
                            </select>
                            {errors.medicines && <ErrorText err={errors.medicines.message || ""} />}
                        </div>
                        <div id="actions"
                            className="col-span-2 flex justify-end items-end gap-3 h-fit py-10">
                            <button
                                className="flex items-center gap-3 bg-off-white-text text-secondary px-5 py-2 w-fit text-sm rounded-full border-2 border-secondary font-bold hover:bg-secondary hover:text-off-white-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-rotate-ccw w-5 h-5">
                                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                                    <path d="M3 3v5h5" />
                                </svg>
                                <p>Sıfırla</p>
                            </button>
                            <button
                                className="flex items-center gap-3 bg-off-white-text text-accent-text px-5 py-2 w-fit text-sm rounded-full border-2 border-primary font-bold hover:bg-primary hover:text-off-white-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-save w-5 h-5">
                                    <path
                                        d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                                    <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
                                    <path d="M7 3v4a1 1 0 0 0 1 1h7" />
                                </svg>
                                <p>Kaydet</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        //  <!-- create record - end -->
    )
}