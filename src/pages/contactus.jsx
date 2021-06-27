import React, { Component } from 'react';
import ContactMap from '../components/ContactUsHome/contactushome';
import ContactDetails from '../components/ContactDetails/contactdetails';

export default class contactus extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <ContactMap />
                <ContactDetails />
            </div>
        )
    }
}
