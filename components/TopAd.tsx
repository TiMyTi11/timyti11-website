import Image from "next/image";
import Blockhost from '../public/assets/blockhost.webp'

export default function TopAd() {
    return (
        <div className="bg-base-300 p-1 z-0">
            <div className="container mx-auto font-semibold flex flex-row md:justify-center">
                <div className="mr-1 flex flex-col justify-center">
                    <Image alt="Blockhost Logo" src={Blockhost} width={18} height={18}/>
                </div>
                <p>Official partner with <a className="link" href="https://blockhost.net">Blockhost</a></p>
            </div>
        </div>
    )
}
