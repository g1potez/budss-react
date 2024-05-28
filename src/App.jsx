import React from 'react';
import Header from './components/Header/Header'
import Tabs from './components/Tabs/Tabs';
import Footer from './components/Footer/Footer';
import Page from './(main)/Page';

const App = () => {
    return (
        <>
        <Tabs />
        <Header />
        <Page />
        <Footer />
        </>
    );
}

export default App;
  