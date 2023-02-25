import React from 'react'
import HeroSlider from '../Components/Slider/HeroSlider';
import Slider2 from '../Components/Slider/Slider';
import Item from '../Components/Service/Item';
import carData from '../data';
import { Container, Row, Col } from 'reactstrap';


const Home = () => {
  return (
    <>
        <HeroSlider />
        <Slider2 />
        

        <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Viens avec</h6>
              <h2 className="section__title">Offres spéciales</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <Item item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      </>
  )
}

export default Home;