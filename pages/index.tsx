import type {NextPage} from 'next'
import GlobalHead from "../components/GlobalHead";

const Home: NextPage = () => {
    return (
        <>
            <GlobalHead/>
            <div className="h-screen">
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-6xl font-bold">Hi! I&apos;m TiMyTi11</h1>
                </div>
            </div>
        </>
    )
}

// noinspection JSUnusedGlobalSymbols
export default Home
