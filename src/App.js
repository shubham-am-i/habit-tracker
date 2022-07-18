import Header from './components/Header'
import Overview from './components/Overview'
import Details from './components/HabitDisplay'
import { Row, Col, Container } from 'react-bootstrap'
import { useEffect } from 'react'

import Typed from 'typed.js'

function App() {
  useEffect(() => {
    const typed = new Typed('.tag', {
      strings: [
        'It is never too late to develop good habits.',
        'Good habits formed at youth make all the difference. - Aristotle',
        'Motivation is what gets you started. Habit is what keeps you going.',
        'Habits change into character.',
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 2000,
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 5000,
      loop: true,
    })

    // Destroying
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Row className='mt-5'>
          <Col md={3}>
            <Overview />
          </Col>
          <Col md={9}>
            <Details />
          </Col>
        </Row>
      <h4 className='text-light d-flex  mt-5  justify-content-center'>
      <span className='tag'></span>

      </h4>
      </Container>
    </>
  )
}

export default App
