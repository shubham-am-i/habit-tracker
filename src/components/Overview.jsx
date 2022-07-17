import React from 'react'
import CreateHabit from './CreateHabit'
import { Row, Col, ListGroup, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'


const Overview = () => {
  const [modalShow, setModalShow] = React.useState(false)

  const dispatch = useDispatch()
  const { habits } = useSelector((state) => state.allHabits)

  return (
    <>
      <Row>
        <Col md={2}>
          <i className='fa-regular fa-calendar-minus'></i>
        </Col>
        <Col>
          <h4>Habits</h4>
        </Col>
      </Row>
      <ListGroup>
        {habits.map((habit, index) => (
          <ListGroup.Item key={index}>
            <i className='fa-solid fa-feather-pointed me-3'></i>
            {habit.title}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Row>
        <Col></Col>
        <Col md={9}>
          <Button
            type='button'
            className='bg-success mt-3 ml-5'
            onClick={() => setModalShow(true)}>
            <i className='fa-solid fa-circle-plus'></i> &nbsp;&nbsp;Create New Habit
          </Button>
          <CreateHabit show={modalShow} onHide={() => setModalShow(false)} />
        </Col>
      </Row>
    </>
  )
}

export default Overview
