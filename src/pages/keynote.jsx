import React, { Component } from 'react';
import Lecture from '../components/keynote/lecture';

export default class keynote extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Lecture />
            </div>
        )
    }
}
