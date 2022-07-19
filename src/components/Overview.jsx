import React from 'react'
import CreateHabit from './CreateHabit'
import { Row, Col, ListGroup, Button } from 'react-bootstrap'
import { deleteHabit } from '../features/habitsSlice'
import { useDispatch, useSelector } from 'react-redux'

const Overview = () => {
  const [modalShow, setModalShow] = React.useState(false)

  const dispatch = useDispatch()
  const { habits } = useSelector((state) => state.allHabits)

  console.log(habits)

  const deleteHandler = (name) => {
    dispatch(deleteHabit(name))
  }

  return (
    <>
      <Row>
        <Col sm={2} md={2}>
          <i className='fa-regular fa-calendar-minus'></i>
        </Col>
        <Col>
          <h4>Habits</h4>
        </Col>
      </Row>
      <ListGroup>
        {habits.map((habit, index) => (
          <ListGroup.Item key={index} className='gradient'>
            <Row>
              <Col md={2}>
                {' '}
                <i className='fa-solid fa-feather-pointed me-3'></i>
              </Col>
              <Col md={8}>{habit.title}</Col>
              <Col md={1}>
                <i
                  className='fa-solid fa-trash'
                  style={{ fontSize: '12px' }}
                  onClick={() => deleteHandler(habit.title)}></i>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Row>
        <Col></Col>
        <Col md={9}>
          <Button
            type='button'
            className='bg-primary mt-3 ml-5'
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
