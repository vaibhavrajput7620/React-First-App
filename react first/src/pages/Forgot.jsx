import styled from "styled-components";
import {  useNavigate } from "react-router-dom";
import { useState } from "react";

const Wraper = styled.div`
  width: 330px;
  height: 711px;
  background: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 10px 35px 10px 35px;
  margin-top: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.header`
  font-size: 35px;
  font-weight: 600;
  margin: 0 0 0px 0;
`;
const FormOuter = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 74vh;
`;
const Form = styled.form`
  display: flex;
  width: 400%;
`;

const Page = styled.div`
  width: 25%;
  height: 413px;
  transition: margin-left 0.3s ease-in-out;
`;

const Field = styled.div`
  width: 330px;
  height: 45px;
  margin: 31px 0;
  display: flex;
  position: relative;
  margin-bottom: 47px;
`;

const Lable = styled.div`
  position: absolute;
  top: -30px;
  ont-weight: 500;
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding-left: 15px;
  font-size: 15px;
`;


const Button = styled.input`
    width: 100%;
    height: calc(100% + 5px);
    border: none;
    border-radius: 5px;
    background: #d33f8d;
    margin-top: -20px;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: 0.5s ease;

`


const Forgot = () => {
   const navigate =  useNavigate();
  const [email, setemail] = useState("");
  const [dob, setdob] = useState("");

  const LoginUser =  async (e) =>{
    e.preventDefault();
    const res = await fetch("http://localhost:3000/forgot",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,dob,})
      });
      const data =  res.json();
      console.log(data);
      if(data.status === 400 || !data ){
        window.alert("Invalid credentials");
       }else{
        // window.alert("login Succesfull");
         navigate("/reset");
       }
  }
  return (
    <>
      <Wraper>
        <Title>Forgot Form</Title>
        <FormOuter>
          <Form  method="post">
            <Page>
              <Field>
                <Lable>Email</Lable>
                <Input
                  type="email"
                  className="errorb"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
                {/* <i class="fa fa-check-circle" id="ib" aria-hidden="true"></i>
                  <i class="fa fa-exclamation-circle" id="ib" aria-hidden="true"></i> <br> */}
              
              </Field>
              <Field>
                <Lable>Date Of Birth</Lable>
                <Input
                  type="date"
                  className="errorb"
                  id="dob"
                  name="dob"
                  value={dob}
                  onChange={(e) => setdob(e.target.value)}
                  required
                />
                {/* <i class="fa fa-check-circle" id="ib" aria-hidden="true"></i>
                  <i class="fa fa-exclamation-circle" id="ib" aria-hidden="true"></i> <br> */}
              
              </Field>
              <Field >
                <Button type="submit" onClick={LoginUser} className="Login" value="Submit" />
              </Field>
            </Page>
          </Form>
        </FormOuter>
      </Wraper>
    </>
  )
}

export default Forgot