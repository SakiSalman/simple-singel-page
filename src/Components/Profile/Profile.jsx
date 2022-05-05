import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import './Profile.css'


const Profile = () => {

       const {id} = useParams();


       const [singelUser, setSingelUser] = useState([]);

       const {name, skill, photo, fb, twi, linkd} = singelUser;



        useEffect( () => {

            axios.get(`http://localhost:5050/devs/${id}`).then( res => {
                setSingelUser(res.data)
            }).catch();
        }, [singelUser])
       


  return (
    <>
        <Container>
                <Row>
                    <Col>

                        <Card>
                            <di className="img-wrap">
                            <Card.Img src={photo}/>
                            </di>
                            <Card.Body className='text-center'>
                                <h3>{name}</h3>
                                <h5>{skill}</h5>
                                <div className="social-icons mt-3">
                                    <ul>
                                        <li><a href={fb}><i class='bx bxl-facebook-square' ></i></a></li>
                                        <li><a href={twi}><i class='bx bxl-twitter' ></i></a></li>
                                        <li><a href={linkd}><i class='bx bxl-linkedin-square' ></i></a></li>

                                    </ul>
                                    <Link to="/" className="btn btn-primary">Back To Home</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    
                    </Col>
                </Row>
        </Container>
    </>
  )
}

export default Profile