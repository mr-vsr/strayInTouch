import React from 'react'
import { Header, Footer,Hero,KnowAboutUs,WhatWedo,DonationsCta } from "../../components/index.js"

function LandingPage() {
    return (
    <>            
        <Header />
            <Hero />
            <KnowAboutUs />
            <WhatWedo />
            <DonationsCta />
        <Footer />
    </>
)
}

export default LandingPage;