import "./css/Topcontainer.css"
import {Container ,Row , Col } from 'react-bootstrap' ;
import Slide from './slider'


function Topcontainer() {

    return (

<Container fluid="true" className="Topcontainer">
 

  <Row className="justify-content-md-center">
  
    <Col xs={12} md={8}>
      <Slide />
    </Col>
    
  </Row>
</Container>

    );
    
}
export default Topcontainer 