import styled from "styled-components";
import { useState,useCallback,useEffect } from "react";
import {  useNavigate } from "react-router-dom"; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowsRotate} from '@fortawesome/free-solid-svg-icons';


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
const Captcha =styled.div`

  background-color: #d43f8d;
  color: cornsilk;
  height: 30px;
  width: 80px;
  font-size: 20px;
  border-radius: 5px;

`
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

const Reset = () => {
    const [captcha, setcaptcha] = useState("")
    const navigate =  useNavigate();
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
  
    const loginUser = async (e) => {
      e.preventDefault();
      
      try {
        const res = await fetch("http://localhost:3000/reset", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, password })
        });
  
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await res.json();
        console.log(data);
        
        if (data.status === 400 || !data) {
          window.alert("Invalid credentials");
        } else {
         // window.alert("Login Successful");
          navigate("/login");     // You may need to uncomment this line if navigate is defined
        }
      } catch (error) {
        console.error("Error occurred:", error);
        window.alert("An error occurred during login");
      }
    }
    const passwordGenerator = useCallback((length) => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
      
      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char);
      }
  
      return pass;
    }, []);
  
    useEffect(() => {
      setcaptcha(passwordGenerator(5));
    }, [passwordGenerator]);
  
    function refreshCaptcha() {
      const newCaptchaString = passwordGenerator(5);
      setcaptcha(newCaptchaString);
    }
  return (
    <>
    <Wraper>
      <Title>Reset Password</Title>
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
                <small>error msg</small>
              </Field>
            <Field>
              <Lable>New Password</Lable>
              <Input
                type="password"
                className="errorb"
                id="password"
                name="password"
                value={password}
                  onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* <i class="fa fa-check-circle" id="ib" aria-hidden="true"></i>
                <i class="fa fa-exclamation-circle" id="ib" aria-hidden="true"></i> <br> */}
              <small>error msg</small>
            </Field>
            
            <Field>
              <Captcha>
              <span id="captcha" className="captcha">{captcha}</span> 
              </Captcha>
              <FontAwesomeIcon style={{height:"30px",  marginLeft:"10px"}} onClick={ refreshCaptcha } icon={faArrowsRotate} />
            </Field>
            <Field>
              <Lable>Captcha</Lable>

              <Input
                type="text"
                id="captchaInput"
                name="captchaInput"
                required
              />
              {/* <i class="fa fa-check-circle" id="ib" aria-hidden="true"></i>
                <i class="fa fa-exclamation-circle" id="ib" aria-hidden="true"></i> <br> */}
              <small>error msg</small>
            </Field>
            <Field >
              <Button type="submit" onClick={loginUser} className="Login" value="Submit" />
            </Field>
           
          </Page>
        </Form>
      </FormOuter>
    </Wraper>
  </>
  )
}

export default Reset