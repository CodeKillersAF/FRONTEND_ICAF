import React from 'react';
import Jumbotron from '../components/Jumbotron/Jumbotron'
import Card from '../components/Card/Card'
import CardImage from '../components/CardImage/CardImage';
import About from '../components/About/About';
// import cover from 'url:../../public/videos/cover.mp4';
import speaker from 'url:../../public/images/speaker.jpg?&width=990';
import workshop from 'url:../../public/images/workshop.png?&width=990';


export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <main>
                    <Jumbotron
                        // video={cover}
                        image={speaker}
                        title="Welcoming You All"
                        content="International Conference On Application Framework 2020"
                    />

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
                        <div className="p-1 mb-4">
                            <About
                                title="About Our Conference"
                                subtitle="INTERNATIONAL CONFERENCE ON APPLICATIONS FRAMEWORK 2021"
                            />
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
                                link="Continue"
                                image={speaker}
                            />
                            <CardImage
                                tagclassName="d-inline-block mb-2 text-success"
                                tag="Workshop" title="Featured events"
                                date="Dec 11"
                                content="Industry experts will organize workshops on latest trends in
                                        Application Framework."
                                link="Continue"
                                image={workshop}
                            />
                        </div>
                    </div>

                </main>
            </>

        )
    }
}



