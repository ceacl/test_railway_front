import './../styles/Certificate.css';
import React, {useState, useEffect} from 'react';

const LoadCertificate = () => { 
  
  const [studentInformation, setStudentInformation] = useState([]);
  useEffect(() => {
      const fetchStudenInformation = async () => {
        const urlParamsArray = new URLSearchParams(window.location.search);
        const studentId = urlParamsArray.get('studentId');
        const url = `https://testbackrailsway-production.up.railway.app/api?studentId=${studentId}`;
        fetch(url, {
          method: 'GET', 
          headers: {'Content-Type':  'application/json'}
        })
        .then(response => response.json())
        .then(data => setStudentInformation(data))
        .catch(error => console.error(error));
        } 
        fetchStudenInformation();
  }, []);

  return (
    <div>
      {studentInformation.error ? 'Sorry an error occurs':null}
      {!studentInformation ? 'Loading ...': 'Student was loaded!'}
      {console.log(studentInformation)}
      <br/>
      {studentInformation.certificate === 0
      ? `Congratulations ${studentInformation.name + ", " + studentInformation.last_name}, you now have a FullAdvanced certificate.`
      : 'Sorry, your Student Id does not have certificates.'}
    </div>
  );
}

export default LoadCertificate;