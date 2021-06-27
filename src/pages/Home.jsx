import React from 'react';
import Jumbotron from '../components/Jumbotron/Jumbotron'
import { Card } from '../components/Card'
import CardImage from '../components/CardImage/CardImage';
import speaker from 'url:../../public/images/speaker.jpg?&width=990';
import workshop from 'url:../../public/images/workshop.png?&width=990';
import main from 'url:../../public/images/main.jpg?&height=500';
import { CardIntro } from '../components/Card';
import axios from 'axios';
// import cover from 'url:../../public/videos/cover.mp4';

const back = {
    filter: ' brightness(60%)',
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    fontSize: '200px',
    fontStyle: 'italic',
    fontFamily: '"Times New Roman", Times, serif'
}

export default class Home extends React.Component {

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
            <>
                <main>
                    <Jumbotron
                        image={main}
                        title="ICAF 2021"
                        content="International Conference On Application Framework 2020"
                    />

                    <div className="p-1 mb-4">
                        <CardIntro title="About Conference">
                            <h4 className="card-title text-secondary">INTERNATIONAL CONFERENCE ON APPLICATIONS FRAMEWORK 2021</h4>
                            <p className="lead mb-4">The International conference on application framework -2021 (ICAF2021) is organized
                                by the Faculty of Computing of the Sri Lanka Institute of Information Technology (SLIIT) as an
                                open forum for academics along with industry professionals to present the latest findings and
                                research output and practical deployments in the Applications Framework, Computer Science and Information Technology
                                domains. Primary objective of the ICAF is to uplift the research culture and the quality of
                                research done by Sri Lankan researchers. This conference will create a platform for national
                                and international researchers to showcase their research output, networking opportunities to
                                discuss innovative ideas, and initiate collaborative work. ICAF 2019 and ICAF 2020 were successfully
                                conducted with a technical co-sponsorship by IEEE Sri Lanka Section and all publications are available
                                in IEEE Xplore digital library</p>
                            {this.state.approved_details.length > 0 && this.state.approved_details.map((item, index) => (
                                <div key={index} >
                                    <div className="p-3 back" >
                                        <h4 className="card-title">{item.venue}</h4>
                                        <h4 className="card-title">{item.venue_dates}</h4>
                                        <h4 className="card-title">{item.venue_time}</h4>
                                        <h4 className="card-title">{item.registrationopen_date}</h4>
                                        <h4 className="card-title">{item.lastregistration_date}</h4>
                                    </div>
                                </div>
                            ))}
                        </CardIntro>

                    </div>

                    <div className="container py-4">
                        <div className="row align-items-md-stretch">
                            <Card
                                cardclassName="h-100 p-5 text-white bg-dark rounded-3"
                                title="About"
                                content="ICAF 2020 is the International Conference On Application Framework held every year to
                                        bring latest technilogical ideas together"
                                buttonclassName="btn btn-outline-light"
                                name="learn more"
                            />
                            <Card
                                cardclassName="h-100 p-5 bg-light border rounded-3"
                                title="Events"
                                content="We have many event for this year too. The keynote event where researches can and join publish paper"
                                buttonclassName="btn btn-outline-dark"
                                name="learn more"
                            />
                        </div>
                        <div className="p-1 mb-4">
                        </div>

                        <div className="row mb-2">
                            <CardImage
                                tagclassName="d-inline-block mb-2 text-primary"
                                tag="Keynote"
                                title="Featured events"
                                date="Dec 12"
                                content="Researchers can take part in the event and selected
                            candidates will be given the oppurtunity to present their Research papers at the
                                        Conference"
                                link="/keynote"
                                image={speaker}
                            />
                            <CardImage
                                tagclassName="d-inline-block mb-2 text-success"
                                tag="Workshop" title="Featured events"
                                date="Dec 11"
                                content="Industry experts will organize workshops on latest trends in
                                        Application Framework."
                                link="/workshop"
                                image={workshop}
                            />
                        </div>
                    </div>

                </main>
            </>

        )
    }
}



