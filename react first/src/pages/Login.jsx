import styled from "styled-components";
import { useState, useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

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
  margin-bottom: 42px;
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
const Captcha = styled.div`
  background-color: #d43f8d;
  color: cornsilk;
  height: 30px;
  width: 80px;
  font-size: 20px;
  border-radius: 5px;
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
`;
const Login = () => {
  const navigate =  useNavigate();
  const [captcha, setcaptcha] = useState("");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const LoginUser =  async (e) =>{
    e.preventDefault();
    const res = await fetch("http://localhost:3000/signin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        username,password,})
      });
      const data =  res.json();
      console.log(data);
      if(data.status === 400 || !data ){
        window.alert("Invalid credentials");
       }else{
         window.alert("login Succesfull");
         navigate("/welcomepage");
       }
  }

  const passwordGenerator = useCallback((length) => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$&";

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
        <Title>Signin Form</Title>
        <FormOuter>
          <Form  method="post">
            <Page>
              <Field>
                <Lable>Username</Lable>
                <Input
                  type="text"
                  className="errorb"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  required
                />
                {/* <i class="fa fa-check-circle" id="ib" aria-hidden="true"></i>
                  <i class="fa fa-exclamation-circle" id="ib" aria-hidden="true"></i> <br> */}
                
              </Field>
              <Field>
                <Lable>Password</Lable>
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
                
              </Field>
              <Link to="/forgot">forgot password</Link>
              <Field>
                <Captcha>
                  <span id="captcha" className="captcha">
                    {captcha}
                  </span>
                </Captcha>
                <FontAwesomeIcon
                  style={{ height: "30px", marginLeft: "10px" }}
                  onClick={refreshCaptcha}
                  icon={faArrowsRotate}
                />
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
              
              </Field>
              <Field>
                <Button type="submit" onClick={LoginUser} className="Login" value="login" />
              </Field>
              <Link to="/">Register Here</Link>
            </Page>
          </Form>
        </FormOuter>
      </Wraper>
    </>
  );
};

export default Login;
