import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Team.css'


const Team = () => {


  const [team, setTeam] = useState([])

  useEffect( () => {

    axios.get(`http://localhost:5050/devs`).then( res =>{
      setTeam(res.data)
    }).catch( err => {
        console.log(err);
    })

}, [team]);
  return (
    <>
      <section className='team-section mt-5'>
      <Container>
          <Row>

            {
              team.map( data => 
                <Col md={4}>
                <Card>
                    <Card.Img style={{width:"100%", height: "400px", objectFit:"cover"} } src={data.photo}/>
                    <Card.Body className='text-center'>
                        <h3>{data.name}</h3>
                        <h5>{data.skill}</h5>
                        <div className="social-icons mt-3">
                        <ul>
                              <li><a href={data.fb}><i class='bx bxl-facebook-square' ></i></a></li>
                              <li><a href={data.twi}><i class='bx bxl-twitter' ></i></a></li>
                              <li><a href={data.linkd}><i class='bx bxl-linkedin-square' ></i></a></li>

                        </ul>
                        </div>
                        <Link to={`/profile/${data.id}`} className="btn btn-sm btn-primary">View Profile</Link>
                  </Card.Body>                  
                  </Card>
            </Col>
                )
            }

          </Row>
      </Container>
      </section>
    </>
  )
}

export default Team
