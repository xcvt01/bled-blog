import { Card , CardGroup } from 'react-bootstrap'
import './css/Card.css'

function Article() { 
  return (
    
<div className="Article">
<CardGroup>
  <Card className="Card">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>موضوع</Card.Title>
      <Card.Text>
      هذا النص هو نص تجريبي لقسم المواضيع البارزة للزائر 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className="Card">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>موضوع</Card.Title>
      <Card.Text>
      هذا النص هو نص تجريبي لقسم المواضيع البارزة للزائر 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card >
  <Card className="Card">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>موضوع</Card.Title>
      <Card.Text>
      هذا النص هو نص تجريبي لقسم المواضيع البارزة للزائر 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
 </CardGroup> 
 <br></br>
 <CardGroup>
  <Card className="Card">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>موضوع</Card.Title>
      <Card.Text>
       هذا النص هو نص تجريبي لقسم المواضيع البارزة للزائر 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className="Card">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>موضوع</Card.Title>
      <Card.Text>
      هذا النص هو نص تجريبي لقسم المواضيع البارزة للزائر.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card >
  <Card className="Card">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>موضوع</Card.Title>
      <Card.Text>
      هذا النص هو نص تجريبي لقسم المواضيع البارزة للزائر
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
 </CardGroup> 
</div>

  );
  
}



export default Article 