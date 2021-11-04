import React from 'react';
import './App.css';
import Body from './components/Body/Body.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Layout from './components/Layout/Layout.jsx';

function App() {
  return (
    <div className="App">
      <Layout>
        
        <Header />
        <Body />
        <Footer />

      </Layout>
    </div>
  );
}

export default App;
