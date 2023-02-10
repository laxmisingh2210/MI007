import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
function Footer() {
  return (
    <section className='footer'>
          <Container>
            <Row>
                <Col >
                  <p> &copy; copyright TheUSAlist </p> 
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Footer