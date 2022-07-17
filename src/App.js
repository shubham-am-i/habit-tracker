import Header from './components/Header'
import Overview from './components/Overview'
import Details from './components/Details'
import { Row, Col, Container } from 'react-bootstrap'


var habits = []
export { habits}
function App() {
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
      </Container>
    </>
  )
}

export default App
