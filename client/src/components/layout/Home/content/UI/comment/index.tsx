import userAvatar from "@/assets/images/comment/user-avatar.jpg";

export default () => {
    return (
        // <!-- comment banner - start -->
        <div id="comment" className="container py-10">
            <div id="comment-container" className="grid grid-cols-3 gap-3 w-full">
                <div id="comment-item"
                    className="flex gap-3 divide-x-2 divide-gray-300 rounded-lg bg-gray-300/75 shadow-2xl">
                    <div id="profile-info" className="flex flex-col gap-3 items-center text-center ps-8 pe-2 py-8">
                        <img className="w-16 h-16 rounded-full" src={userAvatar} alt=""></img>
                        <p id="username" className="text-primary-text font-sora font-thin text-xs">Muhammet Sarıcan</p>
                    </div>
                    <p id="comment"
                        className="flex items-center justify-center p-3 text-sm font-nunito text-primary-text">
                        Güzel uygulama,
                        hayvan yararına
                        olduğu
                        için kullanıyorum
                        üstelik ücretsiz!</p>
                </div>
                <div id="comment-item"
                    className="flex gap-3 divide-x-2 divide-gray-300 rounded-lg bg-gray-300/75 shadow-2xl">
                    <div id="profile-info" className="flex flex-col gap-3 items-center text-center ps-8 pe-2 py-8">
                        <img className="w-16 h-16 rounded-full" src={userAvatar} alt=""></img>
                        <p id="username" className="text-primary-text font-sora font-thin text-xs">Muhammet Sarıcan</p>
                    </div>
                    <p id="comment"
                        className="flex items-center justify-center p-3 text-sm font-nunito text-primary-text">
                        Hayvan takibi yapmak için çok kullanışlı bir uygulama hergün kullanıyorum!</p>
                </div>
                <div id="comment-item"
                    className="flex gap-3 divide-x-2 divide-gray-300 rounded-lg bg-gray-300/75 shadow-2xl">
                    <div id="profile-info" className="flex flex-col gap-3 items-center text-center ps-8 pe-2 py-8">
                        <img className="w-16 h-16 rounded-full" src={userAvatar} alt=""></img>
                        <p id="username" className="text-primary-text font-sora font-thin text-xs">Muhammet Sarıcan</p>
                    </div>
                    <p id="comment"
                        className="flex items-center justify-center p-3 text-sm font-nunito text-primary-text">
                        Bir uygulamanın bir yazılımcı tarafından full stack olarak 20 günde geliştirilmesi hayret
                        verici! 😉</p>
                </div>
            </div>
        </div>
        // <!-- comment banner - end -->
    )
}