import {API_HOST, SECRET_KEY} from '../config/config';
import './../styles/Certificate.css';
import React, {useState, useEffect} from 'react';

const LoadCertificate = () => { 
  
  const [studentInformation, setStudentInformation] = useState([]);
  useEffect(() => {
      const fetchStudenInformation = async () => {
        const urlParamsArray = new URLSearchParams(window.location.search);
        const studentId = urlParamsArray.get('id_student');
        const url = `${API_HOST}/rest/Students_by_pk?id_student=${studentId}`;
        fetch(url, {
          method: 'GET', 
          headers: 
          {
          'Content-Type':  'application/json', 
          'x-hasura-admin-secret': SECRET_KEY 
        }
        })
        .then(response => response.json())
        .then(data => setStudentInformation(data.FA_University_DB_Students_by_pk))
        .catch(error => console.error(error));
        } 
        fetchStudenInformation();
  }, []);

  return (
    <div>
      {studentInformation.error ? 'Sorry an error occurs':null}
      {!studentInformation ? 'Loading ...': 'Student was loaded!'}
      {console.log(studentInformation)}
      <p>{'Congratulations ' + studentInformation.name + ", " + studentInformation.last_name + ','}</p> 
      <p>you now have a FullAdvanced certificate.</p>
    </div>
  );
}

export default LoadCertificate;