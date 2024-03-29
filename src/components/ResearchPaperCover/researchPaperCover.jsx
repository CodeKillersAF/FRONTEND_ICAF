import React from "react";
import  Button  from "@material-ui/core/Button";
import GetAppIcon from '@material-ui/icons/GetApp';
import './researchPaperCover.css';
import { useHistory } from 'react-router-dom';

const ReaserchPaperCover = () => {

    const history = useHistory();

    const downloadPage = () => {
        let path = '/download';
        history.push(path);
    }

    return ( 
        <div className="research-cover">
            <div className="cover-topic"> Research Papers </div>
            <Button 
            onClick={downloadPage}
             variant="outlined"
             color="secondary"
             endIcon ={<GetAppIcon />}>
                Download
            </Button>
        </div>
     );
}
 
export default ReaserchPaperCover;