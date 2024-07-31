import React from "react";
import { Button,Form,FormGroup,Input,Label } from "reactstrap";

 export default function LoginComponent(){
    return  <div className="login-form">
        <Form>
    <FormGroup floating>

      <Input
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
      />
      
      <Label for="exampleEmail">
        Email
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
       
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
      ></Input>
      
      <Label for="examplePassword">
        Password
      </Label><label></label>
    </FormGroup>
    {' '}
    <Button>
      Submit
    </Button>
  </Form>
  </div>

}