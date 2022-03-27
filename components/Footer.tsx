import Logo from '../public/assets/logo_transparent.png'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className="w-full bg-neutral">
            <footer className="mx-auto container footer p-10 text-neutral-content">
                <div>
                    <Image width={50} height={50} src={Logo} alt="TiMyTI11 Logo"/>
                    <p>TiMyTi11 Services<br/>Copyright 2022</p>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://twitter.com/TiMyTiServices">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a href="https://discord.gg/HS6wMTGD6u">
                            <svg width="31" height="24" viewBox="0 0 71 55" xmlns="http://www.w3.org/2000/svg"
                                 className="fill-current">
                                <path
                                    d="M60.105 4.898A58.55 58.55 0 0 0 45.653.415a.22.22 0 0 0-.233.11 40.784 40.784 0 0 0-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 0 0-.233-.11 58.386 58.386 0 0 0-14.451 4.483.207.207 0 0 0-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 0 0 .093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 0 0 .249-.082 42.08 42.08 0 0 0 3.627-5.9.225.225 0 0 0-.123-.312 38.772 38.772 0 0 1-5.539-2.64.228.228 0 0 1-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 0 1 .23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 0 1 .233.027c.356.293.728.586 1.103.865a.228.228 0 0 1-.02.378 36.384 36.384 0 0 1-5.54 2.637.227.227 0 0 0-.121.315 47.249 47.249 0 0 0 3.624 5.897.225.225 0 0 0 .249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 0 0 .092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 0 0-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"/>
                            </svg>
                        </a>
                        <a href="https://www.mc-market.org/members/243450/">
                            <svg width="24" height="24" viewBox="0 0 89 97" xmlns="http://www.w3.org/2000/svg"
                                 className="fill-current">
                                <path
                                    d="M43.652.89 1.787 23.955a1 1 0 0 0 .013 1.758L24.175 37.61a1 1 0 0 0 .968-.015L43.637 26.97a1 1 0 0 1 .996 0l18.485 10.626a1 1 0 0 0 .968.016L86.472 25.71a1 1 0 0 0 .013-1.76L44.617.89a1 1 0 0 0-.965 0zM24.134 43.705 1.638 31.745a1 1 0 0 0-1.47.883L.168 72.676a1 1 0 0 0 .518.876l39.308 21.65a1 1 0 0 0 1.482-.876V70.477a1 1 0 0 0-.502-.867l-15.806-9.084a1 1 0 0 1-.501-.867V44.587a1 1 0 0 0-.531-.883zM64.136 43.705l22.496-11.96a1 1 0 0 1 1.47.883l.001 40.048a1 1 0 0 1-.518.876l-39.308 21.65a1 1 0 0 1-1.482-.876V70.477a1 1 0 0 1 .502-.867l15.806-9.084a1 1 0 0 0 .501-.867V44.587a1 1 0 0 1 .531-.883z"/>
                            </svg>
                        </a>
                        <a href="https://www.behance.net/TiMyTi11">
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24"
                                 viewBox="0.5 94.187 511 323.626" className="fill-current">
                                <path
                                    d="M206.729 238.87s48.358-3.59 48.358-60.297c0-56.711-39.563-84.387-89.678-84.387H.5v316.909h164.909s100.671 3.18 100.671-93.537c0 .001 4.389-78.688-59.351-78.688zm-53.19-88.357h11.87s22.416 0 22.416 32.973c0 32.969-13.183 37.749-28.136 37.749H73.161v-70.722h80.378zm7.21 204.257H73.161v-84.69h92.248s33.41-.438 33.41 43.522c0 37.068-24.954 40.888-38.07 41.168zm239.593-179.953c-121.873 0-121.765 121.766-121.765 121.766s-8.362 121.141 121.765 121.141c0 0 108.438 6.195 108.438-84.271h-55.768s1.86 34.068-50.81 34.068c0 0-55.777 3.738-55.777-55.135H510.64c0-.001 17.968-137.569-110.298-137.569zm-54.53 95.263s6.81-48.846 55.769-48.846c48.949 0 48.336 48.846 48.336 48.846H345.812zm117.096-118.199H332.159v-39.025h130.749v39.025z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>

    )
}
