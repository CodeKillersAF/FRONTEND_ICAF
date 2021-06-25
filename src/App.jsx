import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Keynotes from './pages/keynote';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
    return(
    <div>
        <Navbar />
        <Keynotes />
        <Footer />
        <Router>
            <section>
                
            </section>
        </Router>
        
    </div>
    );
}

export default App;
