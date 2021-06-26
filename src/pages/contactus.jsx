import React, { Component } from 'react';
import ContactMap from '../components/ContactUsMap/contactusmap';

export default class contactus extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <ContactMap />
            </div>
        )
    }
}
