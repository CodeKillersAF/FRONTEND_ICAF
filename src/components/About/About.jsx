import React from 'react'

export default function About(props) {
    return (
        <div className="text-center">

            <h3 className="display-6 fw-bold text-success">{props.title}</h3>
            <div className="card-body">
                <h4 className="card-title text-secondary">{props.subtitle}</h4>
                <p className="card-text">The International conference on application framework -2021 (ICAF2021) is organized
                by the Faculty of Computing of the Sri Lanka Institute of Information Technology (SLIIT) as an
                open forum for academics along with industry professionals to present the latest findings and
                research output and practical deployments in the Applications Framework, Computer Science and Information Technology
                domains. Primary objective of the ICAF is to uplift the research culture and the quality of
                research done by Sri Lankan researchers. This conference will create a platform for national
                and international researchers to showcase their research output, networking opportunities to
                discuss innovative ideas, and initiate collaborative work. ICAF 2019 and ICAF 2020 were successfully
                conducted with a technical co-sponsorship by IEEE Sri Lanka Section and all publications are available
                                  in IEEE Xplore digital library</p>
            </div>

        </div>
    )
}