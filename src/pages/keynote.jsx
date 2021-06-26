import React, { Component } from 'react';
import KeynoteHome from '../components/KeynoteHome/keynotehome';
import KeynoteSpeaker from '../components/KeynotesSpeaker/keynoteSpeaker';


export default class keynote extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <KeynoteHome />
                <KeynoteSpeaker />

            </div>
        )
    }
}
