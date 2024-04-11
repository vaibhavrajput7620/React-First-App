import { useState } from "react";
// import FirstSlide from '../components/FirstSlide';
// import Progressbar from '../components/Progressbar';
// import SecondSlide from '../components/SecondSlide';
// import ThirdSlide from '../components/ThirdSlide';
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

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
const Button = styled.button`
  position: fixed;
  top: 666px;
  right: 154px;
  height: 40px;
  width: 100px;
  background-color: #0000ff;
  color: white;
  border-radius: 20px;
  border: none;
`;
const Next = styled.button`
  height: 35px;
  width: 60px;
  background: #d33f8d;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;
const Prev = styled.button`
  height: 35px;
  width: 60px;
  margin-right: 200px;
  background: #d33f8d;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 5px;
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
  font-weight: 500;
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding-left: 15px;
  font-size: 15px;
`;
const OuterBar = styled.div`
  display: flex;
  margin: 15px 0;
  user-select: none;
`;
const Step = styled.div`
  text-align: center;
  width: 100%;
  position: relative;
`;

const Bullet = styled.div`
  height: 25px;
  width: 25px;
  border: 2px solid #000;
  display: inline-block;
  border-radius: 50%;
  position: relative;
  transition: 0.2s;
  font-weight: 500;
  font-size: 17px;

  &.active {
    border-color: #d43f8d;
    background: #d43f8d;
  }
  &.active span {
    display: none;
  }

  &[data-next-step="true"] {
    &:after {
      position: absolute;
      content: "";
      bottom: 11px;
      right: -84px;
      height: 3px;
      width: 84px;
      background: #262626;
    }
    &.active:after {
      background: #d43f8d;
      transform: scaleX(0);
      transform-origin: left;
      animation: animate 0.3s linear forwards;
    }
    @keyframes animate {
      100% {
        transform: scaleX(1);
      }
    }
  }

  span {
    position: absolute;
    left: 50%;
    top: 11%;
    transform: translateX(-50%);
  }
`;
const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  resize: vertical; /* Allow vertical resizing of the textarea */
`;
const Signup = () => {
  const navigate =  useNavigate();
  const [current, setCurrent] = useState(0);
  const [user, setuser] = useState({
    firstname: "",
    lastname: "",
    address: "",
    pincode: "",
    gender: "",
    email: "",
    phonenumber: "",
    country: "",
    bio: "",
    dob: "",
    username: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      address,
      pincode,
      email,
      phonenumber,
      country,
      bio,
      dob,
      username,
      password,
      cpassword,
    } = user;
     const res = await fetch("http://localhost:3000/register",{
       method:"POST",
       headers:{
         "Content-Type":"application/json"
       },
       body:JSON.stringify({
        firstname,lastname,address,pincode,email,phonenumber,country,bio,dob,username,password,cpassword})
       });
     const data = await res.json();
      if(data.status === 400 || !data ){
       window.alert("Invalid Registration");
      }else{
        window.alert(" Registration Succesfull");
        navigate("/login");
      }

  };


  const nextbtn = (event) => {
    event.preventDefault();
    if (current <= 1) {
      setCurrent(current + 1);
    }
  };

  const prevbtn = (event) => {
    event.preventDefault();
    if (current >= 1) {
      setCurrent(current - 1);
    }
  };

  return (
    <>
      <Wraper>
        <Title>Signup Form</Title>
        <OuterBar>
          <Step>
            <Bullet data-next-step className={current === 1 ? "active" : ""}>
              <span>1</span>
            </Bullet>
            <div className="check fas fa-check"></div>
          </Step>
          <Step>
            <Bullet data-next-step className={current === 2 ? "active" : ""}>
              <span>2</span>
            </Bullet>
            <div className="check fas fa-check"></div>
          </Step>
          <Step>
            <Bullet className={current === 3 ? "active" : ""}>
              <span>3</span>
            </Bullet>
            <div className="check fas fa-check"></div>
          </Step>
        </OuterBar>
        <FormOuter>
          <Form method="post">
            <Page style={{ marginLeft: `${-current * 25}%` }}>
              <Field>
                <Lable>First Name</Lable>
                <Input
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={user.firstname}
                  onChange={handleInput}
                  className="capitalize errorb"
                  required
                />
                <FontAwesomeIcon className="mark" icon={faCircleCheck} />
                <FontAwesomeIcon className="mark" icon={faCircleExclamation} />
                <small>error msg</small>
                {/* <i class="fa fa-check-circle" id="ib" aria-hidden="true"></i>
          <i class="fa fa-exclamation-circle" id="ib" aria-hidden="true"></i> <br/> */}
              </Field>
              <Field>
                <Lable>Last Name</Lable>
                <Input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={user.lastname}
                  onChange={handleInput}
                  className="capitalize errorb"
                  required
                />
                {/* <i class="fa fa-check-circle" id="ib" aria-hidden="true"></i>
          <i class="fa fa-exclamation-circle" id="ib" aria-hidden="true"></i> <br/> */}
              </Field>
              <Field>
                <Lable>Address</Lable>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  value={user.address}
                  onChange={handleInput}
                  className="capitalize errorb"
                  required
                />
                {/* <i class="fa fa-check-circle" id="ib" aria-hidden="true"></i>
          <i class="fa fa-exclamation-circle" id="ib" aria-hidden="true"></i> <br/> */}
              </Field>
              <Field>
                <Lable className="label">Pin Code</Lable>
                <Input
                  type="number"
                  name="pincode"
                  className="errorb"
                  id="pincode"
                  value={user.pincode}
                  onChange={handleInput}
                  required
                />
                {/* <i className="fa fa-check-circle" id="ib" aria-hidden="true"></i>
          <i className="fa fa-exclamation-circle" id="ib" aria-hidden="true"></i> <br>
          <small>error msg</small> */}
              </Field>
              <Field>
                <Lable>Gender</Lable>
                <label>
                  <Input
                    style={{ height: "25px" }}
                    type="radio"
                    name="gender"
                    id="male"
                    // value={user.gender}
                    // onChange={handleInput}
                    required
                  />
                  Male
                </label>

                <label>
                  <Input
                    style={{ height: "25px" }}
                    type="radio"
                    name="gender"
                    // value={user.gender}
                    // onChange={handleInput}
                    id="female"
                    required
                  />
                  Female
                </label>

                <label>
                  <Input
                    style={{ height: "25px" }}
                    type="radio"
                    name="gender"
                    // value={user.gender}
                    // onChange={handleInput}
                    id="other"
                    required
                  />
                  Other
                </label>
              </Field>
            </Page>
            <Page>
              <Field>
                <Lable>Email</Lable>
                <Input
                  type="email"
                  name="email"
                  className="errorb"
                  id="emailid"
                  value={user.email}
                  onChange={handleInput}
                  required
                />
                {/* <i class="fa fa-check-circle" id="ib" aria-hidden="true"></i>
   <i class="fa fa-exclamation-circle" id="ib" aria-hidden="true"></i> <br> */}
              </Field>
              <Field>
                <Lable>Phone</Lable>
                <Input
                  type="number"
                  name="phonenumber"
                  className="errorb"
                  id="phoneno"
                  value={user.phonenumber}
                  onChange={handleInput}
                  required
                />
                {/* <i class="fa fa-check-circle" id="ib" aria-hidden="true"></i>
   <i class="fa fa-exclamation-circle" id="ib" aria-hidden="true"></i> <br> */}
              </Field>
              <Field>
                <Lable className="label">Country</Lable>
                <Input
                  type="text"
                  name="country"
                  className="capitalize errorb"
                  id="Country"
                  value={user.country}
                  onChange={handleInput}
                  required
                />
                {/* <i class="fa fa-check-circle" id="ib" aria-hidden="true"></i>
   <i class="fa fa-exclamation-circle" id="ib" aria-hidden="true"></i> <br> */}
              </Field>

              <Field>
                <Lable>Bio</Lable>
                <Textarea
                  id="bio"
                  name="bio"
                  className="errorb"
                  value={user.bio}
                  onChange={handleInput}
                  placeholder="Write a short bio..."
                ></Textarea>
              </Field>
            </Page>
            <Page>
              <Field>
                <Lable>Date Of Birth</Lable>
                <Input
                  type="date"
                  id="dob"
                  name="dob"
                  value={user.dob}
                  onChange={handleInput}
                  max="2004-01-01"
                  required
                />
              </Field>
              <Field>
                <Lable>Create Username</Lable>
                <Input
                  type="text"
                  name="username"
                  className="errorb"
                  value={user.username}
                  onChange={handleInput}
                  id="username"
                  required
                />
                {/* <i class="fa fa-check-circle" id="ib" aria-hidden="true"></i>
           <i class="fa fa-exclamation-circle" id="ib" aria-hidden="true"></i> <br> */}
              </Field>
              <Field>
                <Lable>Create Password</Lable>
                <Input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  className="errorb"
                  id="password"
                  required
                />
                {/* <i class="fa fa-check-circle" id="ib" aria-hidden="true"></i>
           <i class="fa fa-exclamation-circle" id="ib" aria-hidden="true"></i> <br> */}
              </Field>
              <Field>
                <Lable>Comfirm Password</Lable>
                <Input
                  type="password"
                  name="cpassword"
                  value={user.cpassword}
                  onChange={handleInput}
                  className="errorb"
                  id="compassword"
                  required
                />
                {/* <i class="fa fa-check-circle" id="ib" aria-hidden="true"></i>
           <i class="fa fa-exclamation-circle" id="ib" aria-hidden="true"></i> <br> */}
              </Field>
              <Link to="/login">Already a member? Sign In</Link>
            </Page>
            <Button type="submit" onClick={PostData} id="llbtn">
              SUBMIT
            </Button>
          </Form>
        </FormOuter>
        <Prev onClick={prevbtn}>prev</Prev>
        <Next onClick={nextbtn}>Next</Next>
      </Wraper>
    </>
  );
};

export default Signup;
