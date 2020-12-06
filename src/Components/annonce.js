
import {Card, Button} from 'react-bootstrap'
import './css/Annonce.css'


export default function Annonce () {
return(
     <div className="Annonce">
    <Card className="text-center">
    <Card.Header>إعلان</Card.Header>
    <Card.Body>
      <Card.Title>هذا الموقع مبني على Reactjs </Card.Title>
      <Card.Text>
        محاولة لبناء مدونة تستعمل الجافا سكريبت تقريبا بالكامل عبر reactjs 
      </Card.Text>
      <Button variant="primary">إقراء المزيد</Button>
    </Card.Body>
    <Card.Footer className="text-muted">إعلان 03/12/20</Card.Footer>
  </Card>
  </div>
);
}