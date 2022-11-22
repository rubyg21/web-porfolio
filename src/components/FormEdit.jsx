import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import "./FormEdit.css";


const FormEdit = () => {
  const [noEnviado, setEnviado] = useState('')

const handleClick = () => {

  setEnviado(<strong>Tu mensaje ha sido enviado!</strong>)
  
}


  return (
    <div className="formulario">
        <Formik
        initialValues={{
          firstName: "",
          reason: "",
          email: "",
          textarea: "",
        }}
        onSubmit={ (values, {resetForm}) =>{
          alert(JSON.stringify(values, null, 2));
          // alert('Tu mensaje ha sido enviado!');
          resetForm({ values: ''})
        
        }}
      >
        <Form className="form">
          <div >
            {/* <label htmlFor="firstName">First Name</label> */}
            <Field className="name" id="firstName" name="firstName" placeholder="Name" size="45" />
          </div>

          <div>
            {/* <label htmlFor="reason">Reason</label> */}
            <Field className="name" id="reason" name="reason" placeholder="Reason" size="45"  />
          </div>

          <div>
            {/* <label htmlFor="email">Email</label> */}
            <Field className="name" id="email" name="email" placeholder="Email" type="email"  size="45"  />
          </div>

          <div>
            <Field  className="name"
              id="textarea"
              name="textarea"
              type="text"
              as="textarea"
              cols="45"
              rows="10"
              placeholder="message"
            ></Field>
          </div>

         <button className="send" type="submit" onClick={handleClick} >Send</button>
      <div> <p> {noEnviado} </p></div>
        </Form>
        
      </Formik>

     
     
    </div>
  );
};

export default FormEdit;
