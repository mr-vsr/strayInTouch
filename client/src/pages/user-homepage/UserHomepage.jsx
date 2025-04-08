import React from 'react';
import { Header, Footer, Donations, UserCard } from '../../components/index.js';


function UserHomePage() {
  return (
    <>
      <Header />
      <div style={{"marginTop":"2rem"}}></div>
      <UserCard />
      <div style={{"marginTop":"2rem"}}></div>
      <Donations />
      <Footer />
    </>
  )
}

export default UserHomePage