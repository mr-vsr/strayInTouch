import React from 'react';
import { Header, Footer, Donations} from '../../components';
import UserHero from '../../components/cards/UserHero';

function UserHomepage() {
  return (
    <>
      <Header />
      <div style={{"marginTop":"2rem"}}></div>
      <UserHero />
      <div style={{"marginTop":"2rem"}}></div>
      <Donations />
      <Footer />
    </>
  )
}

export default UserHomepage