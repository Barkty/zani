import Footer from "components/footer";
import Navbar from "components/navbar";
import React from "react";

interface HomeProps {
    children: React.ReactNode
}

const Layout = ({ children }: HomeProps) => {
    return (
        <div>
            <Navbar />
                {children}
            <Footer/>
        </div>
    )
}

export default Layout