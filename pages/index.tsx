import type {NextPage} from 'next'
import GlobalHead from "../components/GlobalHead";
import DiscordAvatar from '../public/assets/discord_pfp.gif'
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <>
            <GlobalHead pageName="Home"/>
            <main>
                <header className="hero min-h-screen pt-28">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Hi! I&apos;m TiMyTi11</h1>
                            <p className="py-6 text-lg">I offer Discord Setup and Art Design services.</p>
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </header>
                <section className="py-16 min-h-screen flex flex-col justify-center">
                    <div className="container mx-auto px-8">
                        <div className="flex flex-col md:flex-row justify-center w-full">
                            <div
                                className="grid place-items-center">
                                <Image className="rounded-box" src={DiscordAvatar} alt="TiMyTi11 Discord Avatar"
                                       width={256} height={256}/>
                            </div>
                            <div className="divider md:divider-horizontal"></div>
                            <div
                                className="p-4 max-w-lg z-30 h-full bg-base-300 rounded-box my-auto">
                                <h2 className="text-2xl font-bold">About Me</h2>
                                <p>
                                    Hello there! I’m TiMyTi11! A <b>Discord Setup Specialist</b> & <b>Graphic and Motion Designer</b>,
                                    with <u><b>2+ years</b></u> of experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

// noinspection JSUnusedGlobalSymbols
export default Home
