import React from 'react'
import axios from 'axios';

export default class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            conference_detail: [],
            approved_details: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/conference-detail')
            .then(response => {
                this.setState({ conference_detail: response.data.data }, () => {
                    let data = [];
                    this.state.conference_detail.map((item, index) => {
                        let conference_details = {
                            value: item._id,
                            venue: item.venue,
                            venue_dates: item.venue_dates,
                            venue_time: item.venue_time,
                            registrationopen_date: item.registrationopen_date,
                            lastregistration_date: item.lastregistration_date
                        }
                        if (item.is_approved) {
                            data.push(conference_details)
                        }
                    });
                    this.setState({ approved_details: data });
                })
            })
    }

    render() {
        return (
            <div className="text-center">

                <h3 className="display-6 fw-bold text">Events</h3>
                <div className="card-body">
                    <h4 className="card-title text-secondary"></h4>

                    <div className="row mb-2">
                        <div className="col-md-6">
                            <h5 className="fw-bold text-center">AI / ML</h5>
                            <h7 className="text-center">Machine Learning</h7><br/>
                            <h7 className="text-center">Deep Learning</h7><br/>
                            <h7 className="text-center">Mathematical modelling</h7><br/>
                            <h7 className="text-center">Optimizations</h7><br/>

                        </div>
                        <div className="col-md-6">
                            <h5 className="fw-bold text-center">AI / ML</h5>
                            <h7 className="text-center">Machine Learning</h7><br/>
                            <h7 className="text-center">Deep Learning</h7><br/>
                            <h7 className="text-center">Mathematical modelling</h7><br/>
                            <h7 className="text-center">Optimizations</h7><br/>
                        </div>
                    </div>
                    <br/>
                    <div className="row mb-2">
                        <div className="col-md-6">
                            <h5 className="fw-bold text-center">AI / ML</h5>
                            <h7 className="text-center">Machine Learning</h7><br/>
                            <h7 className="text-center">Deep Learning</h7><br/>
                            <h7 className="text-center">Mathematical modelling</h7><br/>
                            <h7 className="text-center">Optimizations</h7><br/>

                        </div>
                        <div className="col-md-6">
                            <h5 className="fw-bold text-center">AI / ML</h5>
                            <h7 className="text-center">Machine Learning</h7><br/>
                            <h7 className="text-center">Deep Learning</h7><br/>
                            <h7 className="text-center">Mathematical modelling</h7><br/>
                            <h7 className="text-center">Optimizations</h7><br/>
                        </div>
                    </div>

                    <br/>
                    <div className="row mb-2">
                        <div className="col-md-6">
                            <h5 className="fw-bold text-center">AI / ML</h5>
                            <h7 className="text-center">Machine Learning</h7><br/>
                            <h7 className="text-center">Deep Learning</h7><br/>
                            <h7 className="text-center">Mathematical modelling</h7><br/>
                            <h7 className="text-center">Optimizations</h7><br/>

                        </div>
                        <div className="col-md-6">
                            <h5 className="fw-bold text-center">AI / ML</h5>
                            <h7 className="text-center">Machine Learning</h7><br/>
                            <h7 className="text-center">Deep Learning</h7><br/>
                            <h7 className="text-center">Mathematical modelling</h7><br/>
                            <h7 className="text-center">Optimizations</h7><br/>
                        </div>
                    </div>
                    <p className="card-text"></p>

                </div>

            </div>
        )
    }
}