import React from "react";
import  Button  from "@material-ui/core/Button";
import GetAppIcon from '@material-ui/icons/GetApp';
import './researchPaperCover.css';

const ReaserchPaperCover = () => {
    return ( 
        <div className="research-cover">
            <div className="cover-topic"> Research Papers </div>
            <Button 
             variant="outlined"
             color="secondary"
             endIcon ={<GetAppIcon />}>
                Download
            </Button>
        </div>
     );
}
 
export default ReaserchPaperCover;