import {NextPage} from "next";
import GlobalHead from "../components/GlobalHead";

const TOS: NextPage = () => {
    return (
        <>
            <GlobalHead/>
            <div className="hero min-h-screen pt-20">
                <div className="hero-content text-left">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold md:whitespace-nowrap">TERMS OF SERVICE</h1>
                        <p className="mb-4 text-lg font-light">By using my services you automatically agree to the following terms</p>
                        <div className="card text-xl font-semibold bg-base-200 shadow-xl">
                            <div className="card-body">
                                <ul className="list-disc ml-4 my-2 gap-2">
                                    <li>Payments can only be made via PayPal.</li>
                                    <li>You are not allowed to resell any products made by me.</li>
                                    <li>Refunds are only allowed before I start working.</li>
                                    <li>The client must specify good what they need, after we discuss the payment is made,
                                        and I start working, additional things may make a price change.
                                    </li>
                                    <li>I will not make anything illegal, NSFW, ...</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// noinspection JSUnusedGlobalSymbols
export default TOS
