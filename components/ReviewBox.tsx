export default function ReviewBox({text}: { text: string }) {
    return (
        <div className="max-w-lg z-0 bg-base-300 rounded-box p-2 pb-3 m-3 md:m-6">
            <div className="text-3xl text-primary font-bold text-left leading-tight h-3">“</div>
            <p className="text-lg font-semibold text-center px-5">{text}</p>
            <div className="text-3xl text-primary font-bold text-right leading-tight h-3">”</div>
        </div>
    )
}
