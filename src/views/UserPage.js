import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import MainSection from '../organisms/MainSection.tsx';
import ProfileSection from '../organisms/ProfileSection';
import { fetchLoggedInUser } from '../actions/auth';

const initialState = {
    name: '',
    surname: '',
    position: '',
}

const UserPage = (props) => {

    const [userData, setUserData] = useState(initialState);
    const userAuth = useSelector(state => state.auth);
    useEffect(() => {
        setUserData(userAuth)
    }, [])


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