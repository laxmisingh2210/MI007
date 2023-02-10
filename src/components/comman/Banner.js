import Carousel from 'react-bootstrap/Carousel';
import {Container,Row,Col} from 'react-bootstrap'
const Banner=(props)=>{
  return (
    <>
    <Container>
        <Row>
            <Col>
                <div className='center-info'>
                <h1>{props.title}</h1>
                <p>{props.scip}</p>
               
                 </div>
            </Col>
        </Row>
    </Container>

    </>
    // <Carousel slide={false}>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={slide}
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={slide2}
    //       alt="Second slide"
    //     />

    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
  );
}

export default Banner;