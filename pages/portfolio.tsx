import {NextPage} from "next";
import GlobalHead from "../components/GlobalHead";
import Image from 'next/image';

function mapFiles(context: __WebpackModuleApi.RequireContext): { [key: string]: { default: { src: string, height: number, width: number, blurDataURL: string } } } {
    const keys = context.keys();
    const values = keys.map(context);
    return keys.reduce((accumulator, key, index) => ({
        ...accumulator,
        [key]: values[index],
    }), {});
}

const allImages = mapFiles(require.context('../public/assets/portfolio/', false, /\.png$/));

const Portfolio: NextPage = () => {
    return (
        <>
            <GlobalHead pageName="Portfolio"/>
            <div className="hero min-h-screen pt-20">
                <div className="hero-content text-left flex flex-col">
                    <div className="max-w-md flex-wrap">
                        {
                            Object.keys(allImages).map((key) => {
                                const {default: {src, height, width, blurDataURL}} = allImages[key];
                                return (
                                    <Image alt="Portfolio Entry" /* TODO */ key={src} blurDataURL={blurDataURL}
                                           src={src} width={width} height={height}/>
                                );
                            })
                        }
                    </div>
                    <a href="https://www.behance.net/TiMyTi11" className="btn btn-primary mx-auto">See More</a>
                </div>
            </div>
        </>
    )
}

// noinspection JSUnusedGlobalSymbols
export default Portfolio
