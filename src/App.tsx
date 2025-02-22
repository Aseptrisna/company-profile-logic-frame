import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Katalog from './components/Katalog';
import Tim from './components/Tim';
import Mitra from './components/Mitra';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <Banner />
      <Katalog />
      <Tim />
      <Mitra />
      <Footer />
    </div>
  );
};

export default App;