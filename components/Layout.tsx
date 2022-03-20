import {NextPage} from "next";
import NavBar from "./NavBar";
import Footer from "./Footer";
import BackgroundParticles from "./BackgroundParticles";

const Layout: NextPage = ({children}) => {
    return (
        <div className="min-h-screen min-w-screen flex flex-col z-50 bg-background text-text scroller">
            <BackgroundParticles/>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;
