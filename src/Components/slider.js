import React from 'react' ;
import './css/slider.css'
import {Carousel , Image , Button} from 'react-bootstrap'
import  '../Include/holder.js'

import Slider1 from './Img/Slider1.jpg'
import Slider2 from './Img/Slider2.jpg'
import Slider3 from './Img/Slider3.jpg'

function Slider(){

return (

<div className="Top-slider"> 
<Carousel>
  <Carousel.Item interval={1000}>
    <Image
      className="d-block w-100"
      src={Slider1}
      alt="First slide"
    />
    <Carousel.Caption>
    <h3>بحر المانش</h3>
      <p>يعتبر بحر المانش اقسى بيئة هوجاء في القسم الشمالي</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <Image
      className="d-block w-100"
      src={Slider2}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src={Slider3}
      alt="Third slide"
    />
    <Carousel.Caption>
    <h3>حقل عباد الشمس</h3>
      <p>يثم انتاج الزيت من بذور عباد الشمس </p>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div className="Section">
  
  
  <Button variant="success">ٌفيزياء</Button>{' '}
  <Button variant="warning">رياضيات</Button>{' '}
  <Button variant="danger">كمبيوتر</Button>
  <Button variant="dark">فضاء</Button>{' '}
   <Button variant="info">منوع</Button>{' '}
  
  
  
  </div>

</div>

);

}

export default Slider






