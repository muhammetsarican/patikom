import { useEffect, useState } from "react";

export default ({ title, count }: { title: string, count: any }) => {
    // const [counter, setCounter] = useState(0);
    // const duration = 3000;
    // const step = Math.abs(Math.floor(duration / count));

    // const interval = setInterval(() => {
    //     if (counter == count) clearInterval(interval);
    //     setCounter(counter + 1);
    // }, step);
    // useEffect(() => {
    //     console.log(counter);
    // }, [])
    return (
        <div id="banner-item" className="flex items-center justify-center bg-secondary rounded-xl shadow-2xl">
            <div id="statistic-box"
                className="flex flex-col gap-3 justify-center items-center min-w-36 min-h-36">
                <p className="text-5xl font-sora">{count}</p>
                <p className="text-backgroundtext text-xs capitalize">{title}</p>
            </div>
        </div>
    )
}