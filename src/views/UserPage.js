import React from 'react';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import MainSection from '../organisms/MainSection.tsx';
import ProfileSection from '../organisms/ProfileSection';


const UserPage = () => {

    return(
        <>
            <Header />
            <ProfileSection />
            <MainSection />
            <Footer />
        </>
    )
}

export default UserPage;