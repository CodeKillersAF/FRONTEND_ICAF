import React from 'react';
import { CardDetail } from '../components/Card'
import Button from '../components/Button/Button';

const divider = {
    height: '1rem',
    backgroundColor: 'rgba(0, 0, 0, .1)',
    border: 'solid rgba(0, 0, 0, .15)',
    borderWidth: '1px 0',
    boxShadow: 'inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15)'
}
export default class Download extends React.Component {
    render() {
        return (
            <>
                <CardDetail title="DOWNLOAD TEMPLATE FOR RESEARCH PAPER SUBMISSION">
                    <ul>
                        <li>Proposal Submission Deadline: 19 July 2021</li>
                        <li>Notification of Selection: 28 August 2021</li>
                        <li>Website for each workshop on: 30 September 2021</li>
                        <li>Deadline for workshop paper submission: 27 October 2021</li>
                        <li>Acceptance/rejection announcement: 11 November 2021</li>
                        <li>Final workshop papers due: 15 November 2021</li>
                    </ul>
                    <Button className="btn btn-primary btn-md px-4 gap-3" name="Download" />
                </CardDetail>
                <div style={divider}></div>
                <CardDetail title="DOWNLOAD TEMPLATE FOR WORKSHOP PROPOSAL">
                    <ul>
                        <li>Proposal Submission Deadline: 19 July 2021</li>
                        <li>Notification of Selection: 28 August 2021</li>
                        <li>Website for each workshop on: 30 September 2021</li>
                        <li>Deadline for workshop paper submission: 27 October 2021</li>
                        <li>Acceptance/rejection announcement: 11 November 2021</li>
                        <li>Final workshop papers due: 15 November 2021</li>
                    </ul>
                    <Button className="btn btn-primary btn-md px-4 gap-3" name="Download" />
                </CardDetail>
            </>
        )
    }
}