import { ListGroup, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Details = () => {
  const { habits } = useSelector((state) => state.allHabits)
  return (
    <div className='mt-4 '>
      {habits.map((habit, index) => (
        <>
          <ListGroup.Item key='index' className='mb-3 rounded gradient1'>
            <p>
              {habit.title}&nbsp; :&nbsp; {habit.description}
            </p>
            <Row key={index}>
              <Col>
                <p>Sat</p>
                <i class='fa-solid fa-check'></i>
              </Col>
              <Col>
                <p>Sun</p>
                <i class='fa-solid fa-check'></i>
              </Col>
              <Col>
                <p>Mon</p>
                <i class='fa-solid fa-check'></i>
              </Col>
              <Col>
                <p>Tue</p>
                <i class='fa-solid fa-check'></i>
              </Col>
              <Col>
                <p>Wed</p>
                <i class='fa-solid fa-check'></i>
              </Col>
              <Col>
                <p>Thu</p>
                <i class='fa-solid fa-check'></i>
              </Col>
              <Col>
                <p>Fri</p>
                <i class='fa-solid fa-check'></i>
              </Col>
            </Row>
          </ListGroup.Item>
        </>
      ))}
    </div>
  )
}

export default Details
