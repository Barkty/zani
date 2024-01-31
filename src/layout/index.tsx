import Footer from "components/footer";
import Navbar from "components/navbar";
import React from "react";

interface HomeProps {
    children: React.ReactNode
}

const Layout = ({ children }: HomeProps) => {
    return (
        <div className="pt-3 px-20 md:px-10">
            <Navbar />
                {children}
            <Footer/>
        </div>
    )
}

export default Layout