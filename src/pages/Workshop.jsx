import React from 'react';
import workshop from 'url:../../public/images/workshop.png?&width=990';
import { CardIntro } from '../components/Card';
import { CardDetail } from '../components/Card';
import axios from '../axios';
import '../components/Jumbotron/Jumbotron.css';

const divider = {
    height: '1rem',
    backgroundColor: 'rgba(0, 0, 0, .1)',
    border: 'solid rgba(0, 0, 0, .15)',
    borderWidth: '1px 0',
    boxShadow: 'inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15)'
}
export default class Workshop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            conference_detail: [],
            approved_details: []
        }
    }
    componentDidMount() {
        axios.get('/conference-detail')
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
                <div className="back">
                    <img className="container-fluid px-0" src={workshop} alt="sample" />
                </div>
                <CardIntro title="Call for Workshop Proposal">
                    <p className="lead mb-4">In addition to exciting technical presentations, tutorials, ICAF 2021 will feature a series of 3 hours of
                        workshop. We invite the submission of workshop proposals. The aim of the conference workshops is to
                        emphasize emerging topics not specifically covered in the conference. Workshops should highlight
                        current topics related to technical and business issues in communications and networking, and should
                        include a mix of regular papers, invited presentations, and panels that encourage the participation
                        of attendees in active discussion.</p>
                    {/* <img className="container-fluid px-0 d-block mx-auto mb-4" src={workshop} alt="sample" /> */}
                    {/* <Button className="btn btn-primary btn-md px-4 gap-3" name="Proposal Template" /> */}
                </CardIntro>

                {/* <div style={divider}></div> */}
                <div>
                    {this.state.approved_details.length > 0 && this.state.approved_details.map((item, index) => (
                        <div key={index} >
                            <div className="p-3 back" >
                                <h2 className="display-5 fw-bold">{item.registrationopen_date}</h2>
                                <h2 className="display-5 fw-bold">{item.lastregistration_date}</h2>
                            </div>
                        </div>
                    ))}
                </div>

                <CardDetail title="WORKSHOP PROPOSAL FORMAT" subtitle="EACH WORKSHOP PROPOSAL (MAXIMUM 5 PAGES) MUST INCLUDE (PLEASE FOLLOW THE FOLLOWING ORDER IN YOUR PROPOSAL)">
                    <ul>
                        <li>Title of the workshop</li>
                        <li>Workshop Organizers (names, affiliation, and contact information)</li>
                        <li>Scope and topics of the workshop (max 1 page)</li>
                        <li>Rationale (max 1 page)</li>
                        <ul>
                            <li>Why is the topic current and important?</li>
                            <li>Why will the workshop attract a significant number of submissions of good quality?</li>
                            <li>Why will the workshop attract a large number of attendees, in addition to the authors?</li>
                            <li>How does the workshop differs from others; i.e., related workshops and conferences of similar topic?</li>
                        </ul>
                        <li>A short biography of the organizers (up to 200 words per organizer)</li>
                        <li>Names of potential participants, such as program committee members and invited speakers (indication that speakers accepted to participate is a plus)</li>
                        <li>Planned format of the workshop, including</li>
                        <ul>
                            <li>Duration of the workshop: Half-day, Full-day and tentative schedule</li>
                            <li>Preferred day of workshop</li>
                            <li>Number of refereed papers, hot topic sessions, keynotes, panels</li>
                            <li>Unique, creative and novel workshops formats are strongly encouraged</li>
                        </ul>
                        <li>Draft Call for Papers (max 1 page)</li>
                        <li>A description of the publicity and promotion plan</li>
                        <li>Workshop potential website address (if available at the time of the proposal – will be required later if the workshop proposal is accepted)</li>
                    </ul>
                </CardDetail>

                {/* <div style={divider}></div> */}

                <CardDetail title="WORKSHOP PREPARATION AND ORGANIZATION TIMELINE">
                    <ul>
                        <li>Proposal Submission Deadline: 19 July 2021</li>
                        <li>Notification of Selection: 28 August 2021</li>
                        <li>Website for each workshop on: 30 September 2021</li>
                        <li>Deadline for workshop paper submission: 27 October 2021</li>
                        <li>Acceptance/rejection announcement: 11 November 2021</li>
                        <li>Final workshop papers due: 15 November 2021</li>
                    </ul>
                </CardDetail>

                {/* <div style={divider}></div> */}

                <CardDetail title="PROPOSALS WILL BE EVALUATED BASED ON THESE CRITERIA">
                    <ul>
                        <li>Relevance of the workshop to the ICT and engineering disciplines.</li>
                        <li>Interest in the community on the important technical topic in concern.</li>
                        <li>Novelty with respect to other conference forums.</li>
                        <li>Likelihood of strong participation.</li>
                        <li>Strength of the profile of researchers Confirmation program committee members.</li>
                        <li>Profiles of the keynote speaker or a tutorial presenter.</li>
                        <li>Letters of support from colleagues / researchers indicating their interest and intent to participate in this workshop.</li>
                    </ul>
                </CardDetail>

            </>
        )
    }
}