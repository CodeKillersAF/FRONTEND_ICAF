import React from 'react';
import CardImage from '../components/CardImage/CardImage';
import speaker from 'url:../../public/images/speaker.jpg?&width=990';
import workshop from 'url:../../public/images/workshop.png?&width=990';

export default class Workshop extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container py-4">
                <div className="row mb-2">
                    <CardImage
                        tagclassName="d-inline-block mb-2 text-primary"
                        tag="Organizers"
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
                        tag="Workshops" title="Featured events"
                        date="Dec 11"
                        content="Industry experts will organize workshops on latest trends in
                                        Application Framework."
                        link="Continue"
                        image={workshop}
                    />
                </div>
            </div>
        )
    }
}