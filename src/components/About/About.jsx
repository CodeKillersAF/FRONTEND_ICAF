import React from 'react'
import axios from 'axios';

export default class About extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="text-center">

                <h3 className="display-6 fw-bold text">Events</h3>
                <div className="card-body">
                    <h4 className="card-title text-secondary"></h4>

                    <div className="row mb-2">
                        <div className="col-md-6">
                            <h5 className="fw-bold text-center">React.js</h5>
                            <h6 className="text-center">Function level components</h6>
                            <h6 className="text-center">Class level components</h6>
                            <h6 className="text-center">State and lifecycyle</h6>
                            <h6 className="text-center">Conditional rendering</h6>
                            <h6 className="text-center">Lifting state up and real time projects</h6>

                        </div>
                        <div className="col-md-6">
                            <h5 className="fw-bold text-center">Angular.js</h5>
                            <h6 className="text-center">Function level components</h6>
                            <h6 className="text-center">Class level components</h6>
                            <h6 className="text-center">State and lifecycyle</h6>
                            <h6 className="text-center">Conditional rendering</h6>
                            <h6 className="text-center">Lifting state up and real time projects</h6>
                        </div>
                    </div>
                    <br />
                    <div className="row mb-2">
                        <div className="col-md-6">
                            <h5 className="fw-bold text-center">Spring Boot</h5>
                            <h6 className="text-center">Gradle and Maven</h6>
                            <h6 className="text-center">Dependencies</h6>
                            <h6 className="text-center">Application of microservices</h6>
                            <h6 className="text-center">MVC architecture</h6>

                        </div>
                        <div className="col-md-6">
                            <h5 className="fw-bold text-center">Koa.js</h5>
                            <h6 className="text-center">Routing and standard patterns</h6>
                            <h6 className="text-center">Middlewares</h6>
                            <h6 className="text-center">Building RESTful API endpoints</h6>
                            <h6 className="text-center">MVC architecture</h6>
                        </div>
                    </div>

                    <br />
                    <div className="row mb-2">
                        <div className="col-md-6">
                            <h5 className="fw-bold text-center">Laravel</h5>
                            <h6 className="text-center">Routing and standard patterns</h6>
                            <h6 className="text-center">Middlewares</h6>
                            <h6 className="text-center">API endpoints</h6>
                            <h6 className="text-center">MVC architecture</h6>
                        </div>
                        <div className="col-md-6">
                            <h5 className="fw-bold text-center">ASP.NET</h5>
                            <h6 className="text-center">Routing and standard patterns</h6>
                            <h6 className="text-center">Middlewares</h6>
                            <h6 className="text-center">API endpoints</h6>
                            <h6 className="text-center">MVC architecture</h6>
                        </div>
                    </div>
                    <p className="card-text"></p>

                </div>

            </div>
        )
    }
}