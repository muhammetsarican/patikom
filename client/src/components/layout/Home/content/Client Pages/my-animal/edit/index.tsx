export default () => (
    //  <!-- edit record - start -->
    <div id="operation-item"
        className="flex text-accent-text gap-7 flex-col border border-secondary/20 rounded-e-xl h-full"
        data-name="edit-page">
        <div id="header"
            className="flex items-center gap-3 justify-between p-5 border-b-2 border-secondary/30">
            <div id="header-title" className="flex gap-3 items-center h-9 py-1">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="1" stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-square-pen w-6 h-6 stroke-gray-300">
                        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                    </svg>
                </span>
                <h1 className="font-sora text-lg sm:text-xl">Hayvanlarım / Kayıt Düzenle</h1>
            </div>
        </div>
        <div className="px-6 h-full">
            <div className="rounded-lg overflow-hidden h-full">
                <form action=""
                    className="flex flex-col justify-between gap-3 p-3 w-full h-full text-xs text-tertiary">
                    <div className="grid grid-cols-2 gap-3 h-fit">
                        <input type="text" placeholder="Adını giriniz"
                            className="col-span-2 border rounded-xl p-4 w-full text-xs outline-none focus:outline-offset-0 focus:outline focus:outline-primary"></input>
                        <select
                            className="col-span-2 border rounded-xl p-4 w-full bg-white text-xs text-gray-400 outline-none focus:outline-offset-0 focus:outline focus:outline-primary"
                            name="" id="">
                            <option value="0" className="text-gray-400">Anne adını seçiniz</option>
                        </select>
                        <select
                            className="border rounded-xl p-4 w-full bg-white text-xs text-gray-400 outline-none focus:outline-offset-0 focus:outline focus:outline-primary"
                            name="" id="">
                            <option value="0" className="text-gray-400">Irkını seçiniz</option>
                        </select>
                        <select
                            className="border rounded-xl p-4 w-full bg-white text-xs text-gray-400 outline-none focus:outline-offset-0 focus:outline focus:outline-primary"
                            name="" id="">
                            <option value="0" className="text-gray-400">Çip durumunu seçiniz</option>
                        </select>
                        <input id="date-picker" type="text" placeholder="Doğum tarihini giriniz"
                            onFocus={() => "(this.type='date')"} onBlur={() => "(this.type='text')"}
                            className="border rounded-xl p-4 w-full text-xs outline-none focus:outline-offset-0 focus:outline focus:outline-primary"></input>
                        <div id="gender"
                            className="flex gap-3 self-end justify-end items-center px-8 py-4 border border-slate-200 rounded-xl text-slate-400">
                            <p className="text-sm font-bold">Cinsiyet:</p>
                            <div className="flex gap-1 items-center w-fit px-3 h-full">
                                <input className="w-6 h-6 border-0 accent-tertiary" type="radio"
                                    name="gender" id="gender"></input>
                                <label htmlFor=" gender" className="text-xs">Male</label>
                            </div>
                            <div className="flex gap-1 items-center w-fit px-3 h-full">
                                <input className="w-6 h-6 border-0 accent-tertiary" type="radio"
                                    name="gender" id="gender"></input>
                                <label htmlFor="gender" className="text-xs">Female</label>
                            </div>
                        </div>
                    </div>
                    <div id="actions"
                        className="col-span-2 flex justify-end items-end gap-3 h-fit py-10">
                        <button
                            className="flex items-center gap-3 bg-off-white-text text-secondary px-5 py-2 w-fit text-sm rounded-full border-2 border-secondary font-bold hover:bg-secondary hover:text-off-white-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
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
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
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
    //  <!-- edit record - end -->
)