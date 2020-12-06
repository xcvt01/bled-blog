import React from 'react'
import './css/Loginform.css' 
import 'font-awesome/css/font-awesome.min.css';
import {Form } from 'react-bootstrap' 

function Loginform() {
    return (

<div className="Loginform">
            
                <Form className="box">
                    <p className="text-muted"> الدخول للوحة التحكم</p> 
                    <input type="text" name="" placeholder="اسم المستخدم" /> 
                    <input type="password" name="" placeholder="كلمة المرور"/> 
                    <a className="forgot text-muted" href="#">استعادة كلمة المرور</a>
                     <input type="submit" name="" value="دخول" href="#"/>
                    <div className="col-md-12">
                        
                    </div>
                </Form>
            
    
            </div>

        
    );

    
}

export default Loginform 