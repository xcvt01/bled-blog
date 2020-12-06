import './css/myContent.css'
import {Container,Row , Col} from 'react-bootstrap'

function Content() {

    return (
      <div className="Content" >
<Container fluide >
  <Row>
    <Col className="rightcontent" sm={8}>col1</Col>
    <Col sm={4}>sm=4</Col>
  </Row>
</Container>
</div>
    );
    
}
export default Content