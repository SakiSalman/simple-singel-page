import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Form, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Dashboard = () => {

    // Form Value

    const [users, setUsers] = useState({});

    const {name, email, phone, photo, skill, fb, twi, linkd} = users;


    // Form Submit Management
    const handleSubmit = (e) => {
            e.preventDefault()
            axios.post(`http://localhost:5050/devs`, {
                id : '',
                name: name,
                email: email,
                phone: phone,
                photo : photo,
                skill : skill,
                fb : fb,
                twi : twi,
                linkd : linkd
            }).then(res =>{
                   
                setUsers(
                {
                    name: '',
                    email: '',
                    phone: '',
                    photo : '',
                    fb :'',
                    twi : '',
                    linkd : ''
                }
                )
               
                
               
            }).catch( err => {
                console.log(err);
            })

    }


    // Show Developers in Table

    const [devs, setDevs] = useState([])

    useEffect( () => {

        axios.get(`http://localhost:5050/devs`).then( res =>{
            setDevs(res.data)
        }).catch( err => {
            console.log(err);
        })

    }, [devs]);

  return (
    <>
      <Container className='mt-5'>
        <Row>
            <Col md={4}>
                <Card>
                    <Card.Header>
                        <h4>Add Developers</h4>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='mt-2'>
                                <Form.Control type='Text' placeholder="Developer's Name" value={name} onChange={e => setUsers({...users, name: e.target.value})}  />
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <Form.Control type='Text' placeholder="Developer's Email" value={email} onChange={ e => setUsers({...users, email: e.target.value})} />
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <Form.Control type='Text' placeholder="Developer's Phone" value={phone} onChange={ e => setUsers({...users, phone: e.target.value})}/>
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <Form.Control type='Text' placeholder="Developer's Skill" value={skill} onChange={ e => setUsers({...users, skill: e.target.value})}/>
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <Form.Control type='Text' placeholder="Developer's Photo" value={photo} onChange={ e => setUsers({...users, photo: e.target.value})}/>
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <Form.Control type='Text' placeholder="Developer's Facebook Id" value={fb} onChange={ e => setUsers({...users, fb: e.target.value})}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type='Text' placeholder="Developer's Twitter Id" value={twi} onChange={ e => setUsers({...users, twi: e.target.value})}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type='Text' placeholder="Developer's Linkedin  Id" value={linkd} onChange={ e => setUsers({...users, linkd: e.target.value})}/>
                            </Form.Group>
                                <Button className='w-100 mt-2' type='submit'>Submit</Button>

                        </Form>
                    </Card.Body>
                </Card>

            </Col>
            <Col md={8}>
                <Table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>photo</th>
                            <th>Social Links</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            devs.map( (data, index) =>
                                <tr>
                                <td>{index + 1}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>
                                    <img src={data.photo} alt="" style={{width:'50px', height:'50px', objectFit:'cover'}}/>
                                </td>
                                <td>
                                    <Link to={`/edit/${data.id}`} className='btn btn-info'>Update Profile</Link>
                                </td>
                            </tr>
                                
                                )
                        }

                    </tbody>
                </Table>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Dashboard
