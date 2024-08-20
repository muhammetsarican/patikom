import CalendarDays from "@/assets/icons/calendar-days"
import Hospital from "@/assets/icons/hospital"
import MessagesSquare from "@/assets/icons/messages-square"
import Moon from "@/assets/icons/moon"

export default () => {
    return (
        // <!-- app introduction - start -->
        <div id="app-introduction" className="bg-tertiary text-off-white-text py-14">
            <div className="container flex flex-col items-center">
                <div id="app-introduction-container" className="flex flex-col gap-5 text-center">
                    <h1 className="text-4xl capitalize font-sora font-light">Hayvan takibi yapmanın en kolay yolu</h1>
                    <p className="text-sm text-gray-200">Evcil hayvanlarınızın takibini yapmanın ve ihtiyaçlarına
                        cevap veren
                        platform! <br />Üye
                        olun hizmetlerden hemen faydalanmaya başlayın, üstelik ücretsiz!</p>
                </div>
                <div id="app-features" className="grid grid-cols-4 w-2/4 p-20">
                    <div id="feature-item" className="flex flex-col gap-3 items-center">
                        <Moon className="w-16 h-16" />
                        <p className="text-sm max-w-24 text-center font-bold font-nunito">Nöbetçi Veterinerler</p>
                    </div>
                    <div id="feature-item" className="flex flex-col gap-3 items-center">
                        <CalendarDays className="w-16 h-16" />
                        <p className="text-sm max-w-24 text-center font-bold font-nunito">Hayvan sağlık takibi</p>
                    </div>
                    <div id="feature-item" className="flex flex-col gap-3 items-center">
                        <MessagesSquare className="w-16 h-16" />
                        <p className="text-sm max-w-24 text-center font-bold font-nunito">Canlı destek</p>
                    </div>
                    <div id="feature-item" className="flex flex-col gap-3 items-center">
                        <Hospital className="w-16 h-16" />
                        <p className="text-sm max-w-24 text-center font-bold font-nunito">Evde sağlık hizmeti</p>
                    </div>
                </div>
                <div id="be-member-button">
                    <button className="bg-accent text-primary-text p-3 rounded-full capitalize shadow-2xl">Hemen üye
                        ol</button>
                </div>
            </div>
        </div>
        // <!-- app introduction - end -->
    )
}