import './../styles/Certificate.css';
import React, {useEffect, useState} from 'react';

const LoadCertificate = () => { 
  const [studentInformation, setStudentInformation] = useState([{}]);

  useEffect(() =>{
    try{
      const urlParamsArray = new URLSearchParams(window.location.search);
      const studentId = 1;
      const url = `http://localhost:3002/api?studentId=${studentId}`;
      const responseData = fetch(url, {
        method: 'GET',
      }); 
      if(!responseData.ok){
          throw new Error(`Http error: ${responseData.status}`);
      }
      console.log("Print response data: "+responseData);
      setStudentInformation(responseData);
  }catch(error){
      console.error(`Could not find the resource: ${error}`);
  }
  });
    console.log(studentInformation);
    return (
        <div className="container pm-certificate-container">
      <div className="outer-border"></div>
      <div className="inner-border"></div>
      
      <div className="pm-certificate-border col-xs-12">
        <div className="row pm-certificate-header">
          <div className="pm-certificate-title cursive col-xs-12 text-center">
            <h2>Full Advanced Certificate of Completion</h2>
          </div>
        </div>
  
        <div className="row pm-certificate-body">
          
          <div className="pm-certificate-block">
              <div className="col-xs-12">
                <div className="row">
                  <div className="col-xs-2"></div>
                  <div className="pm-certificate-name underline margin-0 col-xs-8 text-center">
                    <span className="pm-name-text bold">TrueNorth Administrator</span>
                  </div>
                  <div className="col-xs-2"></div>
                </div>
              </div>          
  
              <div className="col-xs-12">
                <div className="row">
                  <div className="col-xs-2"></div>
                  <div className="pm-earned col-xs-8 text-center">
                    <span className="pm-earned-text padding-0 block cursive">has earned</span>
                    <span className="pm-credits-text block bold sans">PD175: 1.0 Credit Hours</span>
                  </div>
                  <div className="col-xs-2"></div>
                  <div className="col-xs-12"></div>
                </div>
              </div>
              
              <div className="col-xs-12">
                <div className="row">
                  <div className="col-xs-2"></div>
                  <div className="pm-course-title col-xs-8 text-center">
                    <span className="pm-earned-text block cursive">while completing the training course entitled</span>
                  </div>
                  <div className="col-xs-2"></div>
                </div>
              </div>
  
              <div className="col-xs-12">
                <div className="row">
                  <div className="col-xs-2"></div>
                  <div className="pm-course-title underline col-xs-8 text-center">
                    <span className="pm-credits-text block bold sans">BPS PGS Initial PLO for Principals at Cluster Meetings</span>
                  </div>
                  <div className="col-xs-2"></div>
                </div>
              </div>
          </div>       
          
          <div className="col-xs-12">
            <div className="row">
              <div className="pm-certificate-footer">
                  <div className="col-xs-4 pm-certified col-xs-4 text-center">
                    <span className="pm-credits-text block sans">Buffalo City School District</span>
                    <span className="pm-empty-space block underline"></span>
                    <span className="bold block">Crystal Benton Instructional Specialist II, Staff Development</span>
                  </div>
                  <div className="col-xs-4">
                  </div>
                  <div className="col-xs-4 pm-certified col-xs-4 text-center">
                    <span className="pm-credits-text block sans">Date Completed</span>
                    <span className="pm-empty-space block underline"></span>
                    <span className="bold block">DOB: </span>
                    <span className="bold block">Social Security # (last 4 digits)</span>
                  </div>
              </div>
            </div>
          </div>
  
        </div>
  
      </div>
    </div>
    );
}

export default LoadCertificate;