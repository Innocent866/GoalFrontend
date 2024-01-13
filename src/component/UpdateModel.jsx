import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateModel = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [profession, setProfession] = useState('')
    const [gender, setGender] = useState('')
    const {userId} = useParams()
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let getData = async () => {
      try {
        // setIsLoading(true);
        let dataGotten = await axios.get(
          `https://goal-z8dh.onrender.com/api/user/${userId}`
        );
        console.log(dataGotten.data.user);
        // setData(dataGotten.data.user);
        setName(dataGotten.data.user.name)
        setEmail(dataGotten.data.user.email)
        setProfession(dataGotten.data.user.profession)
        setGender(dataGotten.data.user.gender)
      } catch (error) {
        console.log(error);
      } finally {
        // setIsLoading(false);
      }
    };

    useEffect(()=>{
      getData();
    },[userId]);


    const handleUpdate = async ()=>{
      try {
        const data = await axios.patch(`https://goal-z8dh.onrender.com/api/user/${userId}`,{
        name,
        email,
        profession,
        gender
        })
        console.log(data);
        window.location.reload()
        alert(data.data.msg)
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <>
    <main>
    <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput" className="fw-bold">
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
    </>
  )
}

export default UpdateModel