import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Card, Col, Container, Row, Form, Button} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import './Editdev.css'

const Editdev = () => {

// Get user Id with useparam
  const {id} = useParams()

  // get users recent Value and data

  const [user, setUser] = useState([])

  


    axios.get(`http://localhost:5050/devs/${id}`).then( res => {
      setUser(res.data)
        console.log(user);      
    }).catch()   


  // Update users Data with Axios

  const [update, setUpdate] = useState({
  })

  const {name, email, phone, photo, skill, fb, twi, linkd} = update;




const handleForms = (e) => {


      axios.patch(`http://localhost:5050/devs/${id}`, {

          name :  name,
          email : email,
          phone : phone,
          skill : skill,
          fb : fb,
          twi : twi,
          linkd : linkd

      })
}


  return (
    <div className='editdDevform'>
      <Container className='mt-5'>
        <Row>
          <Col>
            <Card className='w-50 mx-auto'>
                  <Card.Header>
                    <h4 className='text-info'>Edit Developer's Data</h4>
                  </Card.Header>

                  <Card.Body>
                          <div className="image-wrap" style={ {textAlign: 'center'}}>
                          <img style={{width: '200px', height: '200px', objectFit: 'cover'}} src={user.photo}/>
                          </div>
                          <Form onSubmit={handleForms}>
                              <Form.Group className='mt-2'>
                                  <Form.Control type='Text' placeholder={user.name}   value={name} onChange={ (e) => setUpdate({...update, name : e.target.value})}/>
                              </Form.Group>
                              <Form.Group className='mt-2'>
                                  <Form.Control type='Text' placeholder={user.email} value={email} onChange={ (e) => setUpdate( {...update, email : e.target.value})}/>
                              </Form.Group>
                              <Form.Group className='mt-2'>
                                  <Form.Control type='Text' placeholder={user.phone} value={phone} onChange={ (e) => setUpdate( {...update, phone : e.target.value})}/>
                              </Form.Group>
                              <Form.Group className='mt-2'>
                                <Form.Control type='Text' placeholder={user.skill} value={skill} onChange={ (e) => setUpdate( {...update, skill: e.target.value})}/>
                              </Form.Group>
                              <Form.Group className='mt-2'>
                                  <Form.Control type='Text' placeholder={user.photo} value={photo} onChange={ (e) => setUpdate({ ...update, photo : e.target.value})}/>
                              </Form.Group>
                              <Form.Group className='mt-2'>
                                  <Form.Control type='Text' placeholder="Update Facebook Link" value={fb} onChange={ (e) => setUpdate({ ...update, fb: e.target.value})}/>
                              </Form.Group>
                              <Form.Group>
                                  <Form.Control type='Text' placeholder="Update Twitter Link" value={twi} onChange={ (e) => setUpdate({ ...update, twi: e.target.value})}/>
                              </Form.Group>
                              <Form.Group>
                                  <Form.Control type='Text' placeholder="Update Instagram Link" value={linkd} onChange={ (e) => setUpdate({ ...update, linkd: e.target.value})}/>
                              </Form.Group>
                                  <Button className='w-100 mt-2 btn btn-success' type='submit'>Update Info Now</Button>

                          </Form>
                  </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default Editdev
