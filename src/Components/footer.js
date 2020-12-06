import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './css/footer.css'
const FooterPage = () => {
  return (
      <div className='Footer'>
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">الفوتر</h5>
            <p>
              هذا الفوتر مبني على MDBreact
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">عناوين</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          
        </MDBRow>
        <div className="copyright" >
        
          &copy; {new Date().getFullYear()} GPL3.0: <a href="https://www.al-science.eu.org"> فكرة جزائرية </a>
        
      </div>
      </MDBContainer>
      
    </MDBFooter>
    </div>
  );
}

export default FooterPage;