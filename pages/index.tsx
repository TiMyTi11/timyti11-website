import type {NextPage} from 'next'
import GlobalHead from "../components/GlobalHead";
import DiscordAvatar from '../public/assets/discord_pfp.gif'
import AE from '../public/assets/adobe/ae.png'
import PS from '../public/assets/adobe/ps.png'
import AI from '../public/assets/adobe/ai.png'
import Image from "next/image";
import ReviewBox from "../components/ReviewBox";
import {ArchiveIcon, CalendarIcon, EmojiHappyIcon} from "@heroicons/react/solid";

const Home: NextPage = () => {
    return (
        <>
            <GlobalHead pageName="Home"/>
            <main>
                <header className="hero header-height">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Hi! I&apos;m TiMyTi11</h1>
                            <p className="py-6 text-lg">I offer Discord Setup and Art Design services.</p>
                            <a href="#about" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </header>
                <section id="about" className="py-16 min-h-screen flex flex-col justify-center">
                    <div className="container mx-auto px-8">
                        <div className="flex flex-col md:flex-row justify-center w-full">
                            <div
                                className="grid place-items-center">
                                <Image className="rounded-box" src={DiscordAvatar} alt="TiMyTi11 Discord Avatar"
                                       width={256} height={256}/>
                            </div>
                            <div className="divider md:divider-horizontal"></div>
                            <div
                                className="p-4 max-w-lg z-0 h-full bg-base-300 rounded-box mx-auto md:mx-0 my-auto">
                                <h2 className="text-2xl font-bold mb-2">About Me</h2>
                                <p className="text-lg">
                                    Hello there! I’m TiMyTi11! A <b>Discord Setup Specialist</b> & <b>Graphic and Motion
                                    Designer</b>,
                                    with <u><b>2+ years</b></u> of experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto px-8 mt-24 md:mt-64">
                        <div className="flex flex-col md:flex-row justify-center w-full">
                            <div
                                className="p-4 max-w-lg z-0 h-full bg-base-300 rounded-box mx-auto md:mx-0 my-auto">
                                <h2 className="text-2xl font-bold mb-2">Why me?</h2>
                                <p className="text-lg">
                                    I do everything with passion, great prices, I’m <b>friendly</b>, have <u><b>2+
                                    years</b></u> of experience and my <b>clients are always satisfied</b>.
                                </p>
                            </div>
                            <div className="divider md:divider-horizontal"></div>
                            <div
                                className="p-4 max-w-lg z-0 h-full bg-base-300 rounded-box mx-auto md:mx-0 my-auto">
                                <h2 className="text-2xl font-bold mb-2">My Tools</h2>
                                <div className="flex flex-row">
                                    <div className="mr-1 flex flex-col justify-center">
                                        <Image src={PS} alt="Adobe Photoshop" width={64} height={64}/>
                                    </div>
                                    <div className="mx-1 flex flex-col justify-center">
                                        <Image src={AI} alt="Adobe Illustrator" width={64} height={64}/>
                                    </div>
                                    <div className="ml-1 flex flex-col justify-center">
                                        <Image src={AE} alt="Adobe After Effects" width={64} height={64}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-16 min-h-[50vh] flex flex-col justify-center p-2">
                    <h2 className="z-0 text-3xl font-bold mb-2 mx-auto">What do my clients say?</h2>
                    <div className="container mx-auto px-8">
                        <div className="flex flex-wrap justify-center w-full">
                            <ReviewBox text={"Chill and easy to talk to. Doesn't mind making any changes. - Tree"}/>
                            <ReviewBox text={"Super chill, fast, and knows what they are doing! - LightDarkness"}/>
                            <ReviewBox text={"Nice and helpful. Quickly responded and made it for me. - KacperM"}/>
                            <ReviewBox
                                text={"Very nice, did everything, perfectly, did it quickly, and helped a lot. - Sao"}/>
                        </div>
                    </div>
                    <div className="z-0 flex flex-wrap justify-center w-full mt-20 font-bold text-xl">
                        <div className="rounded-box bg-base-300 p-3 m-3 flex flex-col">
                            <CalendarIcon className="h-14 w-14 m-auto mb-2"/>
                            <p>2+ Years of experience</p>
                        </div>
                        <div className="rounded-box bg-base-300 p-3 m-3 flex flex-col">
                            <ArchiveIcon className="h-14 w-14 m-auto mb-2"/>
                            <p>5+ projects done</p>
                        </div>
                        <div className="rounded-box bg-base-300 p-3 m-3 flex flex-col">
                            <EmojiHappyIcon className="h-14 w-14 m-auto mb-2"/>
                            <p>30+ clients happy</p>
                        </div>
                    </div>
                </section>
                <section className="py-16 min-h-[50vh] flex flex-col justify-center p-2">

                </section>
            </main>
        </>
    )
}

// noinspection JSUnusedGlobalSymbols
export default Home
