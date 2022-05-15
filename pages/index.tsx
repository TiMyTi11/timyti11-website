import type {NextPage} from 'next'
import GlobalHead from "../components/GlobalHead";
import DiscordAvatar from '../public/assets/discord_pfp.gif'
import AE from '../public/assets/adobe/ae.png'
import PS from '../public/assets/adobe/ps.png'
import AI from '../public/assets/adobe/ai.png'
import BackgroundParticles from "../components/BackgroundParticles";
import Image from "next/image";
import ReviewBox from "../components/ReviewBox";
import {ArchiveIcon, CalendarIcon, EmojiHappyIcon} from "@heroicons/react/solid";
import {CSSProperties} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";

const Home: NextPage = () => {
    return (
        <>
            <GlobalHead pageName="Home"/>
            <main>
                <header className="xn-header">
                    <BackgroundParticles/>
                    <div className="container">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Hi! I'm TiMyTi11.</h1>
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
                    <div className="z-0 flex flex-wrap justify-center w-full mt-20 font-bold text-2xl">
                        <div className="rounded-box bg-base-300 p-3 m-3 flex flex-col">
                            <CalendarIcon className="h-20 w-20 m-auto mb-2"/>
                            <p>2+ Years of experience</p>
                        </div>
                        <div className="rounded-box bg-base-300 p-3 m-3 flex flex-col">
                            <ArchiveIcon className="h-20 h-20 m-auto mb-2"/>
                            <p>5+ projects done</p>
                        </div>
                        <div className="rounded-box bg-base-300 p-3 m-3 flex flex-col">
                            <EmojiHappyIcon className="h-20 h-20 m-auto mb-2"/>
                            <p>30+ clients happy</p>
                        </div>
                    </div>

                    <div className="z-0 flex flex-wrap justify-center w-full mt-20 font-bold text-2xl">
                        <div className="rounded-box bg-base-300 p-3 m-3 flex flex-col">
                            <h4 className="mb-4">Graphic Design</h4>
                            <div className="mx-auto radial-progress" style={{"--value": 90, "--size": "8rem"} as CSSProperties}>90%</div>
                        </div>
                        <div className="rounded-box bg-base-300 p-3 m-3 flex flex-col">
                            <h4 className="mb-4">Motion Design</h4>
                            <div className="mx-auto radial-progress" style={{"--value": 100, "--size": "8rem"} as CSSProperties}>100%
                            </div>
                        </div>
                        <div className="rounded-box bg-base-300 p-3 m-3 flex flex-col">
                            <h4 className="mb-4">Illustration</h4>
                            <div className="mx-auto radial-progress" style={{"--value": 50, "--size": "8rem"} as CSSProperties}>50%</div>
                        </div>
                    </div>
                </section>
                <section className="hero py-16 min-h-screen flex flex-col justify-center p-2">
                    <div className="hero-content text-center">
                        <div className="container mx-auto px-8">
                            <div className="flex flex-col md:flex-row justify-center w-full">
                                <div className="flex flex-col mx-4 mb-3 md:mb-0 justify-center">
                                    <p className="font-bold text-3xl mb-2">Like my work?</p>
                                    <div className="flex flex-row justify-center">
                                        <a href="https://twitter.com/TiMyTiServices"
                                           className="bg-[#00ACEE] font-bold rounded-lg px-4 py-2.5 flex flex-row shadow-lg text-white">
                                            <p className="flex flex-col justify-center mr-2">Follow me on</p>
                                            <FontAwesomeIcon icon={faTwitter} size="2x"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="divider md:divider-horizontal"></div>
                                <div
                                    className="p-4 max-w-lg z-0 h-full mx-auto md:mx-0 my-auto">
                                    <h2 className="text-2xl font-bold mb-2">Join my Discord Server!</h2>
                                    <a href="https://discord.gg/HS6wMTGD6u" title="Discord Server">
                                        <Image width={320} height={76} alt="Discord Server Invite Banner"
                                               className="shadow-xl"
                                               src="https://discord.com/api/guilds/828019082380836884/widget.png?style=banner2"/>
                                    </a>
                                </div>
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
