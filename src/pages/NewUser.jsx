import React, { useState } from "react";
import formimg from "../assets/img 1.jpg"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import '../style/newuser.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const NewUser = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [profession, setProfession] = useState('')
  const [gender, setGender] = useState('')
  const navigate = useNavigate()

  async function handleSubmit (e) {
    e.preventDefault()
    try{
        const data = await axios.post('https://goal-z8dh.onrender.com/api/user',{
        name,
        email,
        profession,
        gender
      })
      console.log(data);
      if(data.status === 201){
        alert(data.data.msg)
        navigate('/AllUser')
        console.log(data);
      }
    }catch(error){
      console.log(error);
      alert(error)
    }
  }
  document.title = 'New-Users || Page'
  return (
    <main className="container pt-4">
      <div className="row d-flex justify-content-evenly">
        <div className="col-sm-12 col-md-6">
          <Form className="p-3 shadow-lg">
            <fieldset>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="e" className="fw-bold">
                  Name:
                </Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="type a name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
              </Form.Group>


              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput" className="fw-bold">
                  Email:
                </Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="type an email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </Form.Group>


              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput" className="fw-bold">
                  Profession:
                </Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="type a profession"
                  value={profession}
                  onChange={(e)=>setProfession(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect" className="fw-bold">
                  Gender:
                </Form.Label>
                <Form.Select id="disabledSelect" value={gender} onChange={(e)=>setGender(e.target.value)}>
                  <option>----</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Select>
              </Form.Group>
              <Button type="submit" onClick={handleSubmit}>Submit</Button>
            </fieldset>
          </Form>
        </div>
        <div className="d-none col-lg-5 d-lg-block ">
          <img src={formimg} alt="" className=" p-2 shadow-sm"/>
        </div>
      </div>
    </main>
  );
};

export default NewUser;
