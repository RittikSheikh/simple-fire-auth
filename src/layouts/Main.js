import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export const NewUserInfoContext = createContext([]);
const Main = () => {
    const [newUserInfo,setNewUserInfo] = useState({});
    return (
        <NewUserInfoContext.Provider value={[newUserInfo,setNewUserInfo]}>
            <Header/>
            <Outlet/>
            <Footer/>
        </NewUserInfoContext.Provider>
    );
};

export default Main;