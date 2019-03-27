import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import MessageList from './components/MessageList/MessageList';
import { Router } from '@reach/router';
import About from './components/About/About';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Simple App Arup</title>
        <link
          rel="canonical"
          href="https://github.com/arupalan/react-simpleapp-arup"
        />
      </Helmet>
      <Header />
      <Router>
        <MessageList path="/" />
        <About path="/about" />
        <NotFound title="Page Not Found" default />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
