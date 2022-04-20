import {NextPage} from "next";
import GlobalHead from "../components/GlobalHead";

const TOS: NextPage = () => {
    return (
        <>
            <GlobalHead pageName="TOS"/>
            <main>
                <div className="hero min-h-screen pt-28">
                    <div className="hero-content text-left">
                        <div className="max-w-lg">
                            <h1 className="text-5xl font-bold uppercase">Terms of Service</h1>
                            <p className="mb-4 text-lg font-light">By using my services you automatically agree to the
                                following terms</p>
                            <div className="card text-xl font-semibold bg-base-200 shadow-xl">
                                <div className="card-body">
                                    <ul className="list-disc ml-4 my-2 gap-2">
                                        <li>Payments can only be made via PayPal & Ethereum.</li>
                                        <li>You are not allowed to resell any products made by me, unless I give you
                                            explicit permission to do so.
                                        </li>
                                        <li>Refunds are only allowed before I start working.</li>
                                        <li>The client must describe well what they need. After we discuss it, the
                                            payment is made,
                                            and I start working. Additional things may make a price change.
                                        </li>
                                        <li>I will not make anything illegal, NSFW, ...</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

// noinspection JSUnusedGlobalSymbols
export default TOS
