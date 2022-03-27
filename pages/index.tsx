import type {NextPage} from 'next'
import GlobalHead from "../components/GlobalHead";

const Home: NextPage = () => {
    return (
        <>
            <GlobalHead pageName="Home"/>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hi! I&apos;m TiMyTi11</h1>
                        <p className="py-6 text-lg">I offer Discord Setup and Art Design services.</p>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

// noinspection JSUnusedGlobalSymbols
export default Home
