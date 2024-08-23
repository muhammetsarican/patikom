export default ({ Title, BannerImage, className }: { Title: string, BannerImage: any, className: string }) => {
    return (
        (
            // <!-- title banner - start -->
            <div id="title-banner" className="relative w-full h-fit">
                <img className={`w-full object-cover h-80 ${className}`} src={BannerImage}
                    alt=""></img>
                <p className="absolute w-full text-center inset-y-[45%] font-sora text-5xl text-off-white-text z-20">
                    {Title}
                </p>
                <span id="fligree" className="absolute top-0 w-full h-full bg-gray-900/50 z-10"></span>
            </div>
            // <!-- title banner - end -->
        )
    )
}