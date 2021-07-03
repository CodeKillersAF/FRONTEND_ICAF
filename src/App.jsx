import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Workshop from './pages/Workshop';
import Download from './pages/Download';
import ContactUs from './pages/contactus';
import ResearchPaper from './pages/ReseachPaper';
import Register from './pages/RegisterAttendee';

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <section>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/workshop" component={Workshop} />
                        <Route path="/download" component={Download} />
                        <Route path="/contact-us" component={ContactUs} />
                        <Route path="/research" component={ResearchPaper} />
                        <Route path="/register" component={Register} />
                    </Switch>
                </section>     
                <Footer/>
            </Router>
        </div>
    )
}

export default App
