import {NextPage} from "next";
import GlobalHead from "../components/GlobalHead";

const TOS: NextPage = () => {
    return (
        <>
            <GlobalHead/>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold mb-4">TOS</h1>
                        <div className="text-left text-xl font-semibold flex flex-col">
                            <p className="my-2">Payments can only be made via PayPal.</p>
                            <ul className="list-disc ml-4 my-2">
                                <li>You are not allowed to resell any products made by me.</li>
                                <li>Refunds are only allowed before I start working.</li>
                                <li>The client must specify good what they need, after we discuss the payment is made,
                                    and I start working, additional things may make a price change.
                                </li>
                            </ul>
                            <p className="my-2">I will not make anything illegal, NSFW, ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// noinspection JSUnusedGlobalSymbols
export default TOS
