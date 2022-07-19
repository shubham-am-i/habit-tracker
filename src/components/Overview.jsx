import React from 'react'
import CreateHabit from './CreateHabit'
import { Row, Col, ListGroup, Button } from 'react-bootstrap'
import { deleteHabit } from '../features/habitsSlice'
import { useDispatch, useSelector } from 'react-redux'
import './overview.css'

const Overview = () => {
  const [modalShow, setModalShow] = React.useState(false)

  const dispatch = useDispatch()
  const { habits } = useSelector((state) => state.allHabits)


  // deleteHabit Handler
  const deleteHandler = (name) => {
    dispatch(deleteHabit(name))
  }

  return (
    <>
      <Row>
        <Col md={2} className='onMobile'>
          <i className='fa-regular fa-calendar-minus'></i>
        </Col>
        <Col md={4} className='onMobile'>
          <h4>Habits</h4>
        </Col>
      </Row>
      <ListGroup>
        {habits.map((habit, index) => (
          <ListGroup.Item key={index} className='gradient mb-1 rounded habit-container'>
            <Row>
              <Col md={2} className='icons'>
                {' '}
                <i className='fa-solid fa-feather-pointed me-3'></i>
              </Col>
              <Col md={8} className='habit-title'>{habit.title}</Col>
              <Col md={1} className='icons'>
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
       
        <Col className='d-flex justify-content-end'>
          <Button
            type='button'
            className='bg-primary mt-3 mobile'
            onClick={() => setModalShow(true)}>

            <i className='fa-solid fa-circle-plus'></i> &nbsp;&nbsp; New Habit
          </Button>
          <CreateHabit show={modalShow} onHide={() => setModalShow(false)} />
        </Col>
      </Row>
    </>
  )
}

export default Overview
