import React from 'react'
import { Header, Footer,Hero,KnowAboutUs,WhatWedo,Donations } from "../../components/index.js"

function LandingPage() {
    return (
    <>            
        <Header />
            <Hero />
            <KnowAboutUs />
            <WhatWedo />
            <Donations />
        <Footer />
    </>
)
}

export default LandingPage;