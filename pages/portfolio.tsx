import {NextPage} from "next";
import GlobalHead from "../components/GlobalHead";
import Image from "next/image";

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
            <main>
                <div className="hero min-h-screen pt-28">
                    <div className="hero-content text-left flex flex-col">
                        <h1 className="text-5xl font-bold">Portfolio</h1>

                        <div
                            className="mx-auto rounded-lg p-4 shadow-lg bg-base-200 gap-x-6 gap-y-4 masonry sm:masonry-sm md:masonry-md lg:masonry-lg">
                            {
                                Object.keys(allImages).map((key) => {
                                    const {default: {src, height, width, blurDataURL}} = allImages[key];
                                    return (
                                        <div key={src} className="break-inside p-2">
                                            <Image className="rounded-lg" alt="Portfolio Entry"
                                                   blurDataURL={blurDataURL}
                                                   src={src} width={width} height={height}/>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <a href="https://www.behance.net/TiMyTi11"
                           className="btn btn-lg btn-primary mx-auto mt-10 mb-72 md:mb-52 fixed bottom-0 z-40 opacity-80">See More</a>
                    </div>
                </div>
            </main>
        </>
    )
}

// noinspection JSUnusedGlobalSymbols
export default Portfolio
