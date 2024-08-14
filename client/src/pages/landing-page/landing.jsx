import React from 'react'
import { Header, Footer, HeroSection, KnowAboutUs,WhatWedo,Donations } from "../../components/index"

function landing() {
    return (
    <>            
        <Header />
            <HeroSection />
            <KnowAboutUs />
            <WhatWedo />
            <Donations />
        <Footer />
    </>
)
}

export default landing