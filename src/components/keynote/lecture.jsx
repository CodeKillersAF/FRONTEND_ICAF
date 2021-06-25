import React, { Component } from 'react';

export default class lecture extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
        <div class="card text-center">
        <div class="card-header">
           <h1><b>Key Notes </b> </h1>
        </div>
        <div class="card-body">
            <h5 class="card-title"><b>Lecturer Name</b></h5>
            <img src="https://i.ibb.co/ZhFKQ1H/lecturer.jpg" class="rounded-circle" width="400px" height="300px" alt="..."></img>
            <p class="card-text">So, as is our hallowed duty as a literary and culture website—though with full awareness of the potentially fruitless and endlessly contestable nature of the task—in the coming weeks, we’ll be taking a look at the best and most important (these being not always the same) books of the decade that was. We will do this, of course, by means of a variety of lists. We began with the best debut novels, the best short story collections, the best poetry collections, and the best memoirs of the decade, and we have now reached the fifth list in our series: the best essay collections published in English between 2010 and 2019.</p>
        </div>
        </div>
        )
    }
}
