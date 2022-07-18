import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addHabit } from '../features/habitsSlice'
import { habits } from '../App'

const CreateHabit = (props) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const details = [
    { day: 'Sat', status: 'none' },
    { day: 'Sun', status: 'none' },
    { day: 'Mon', status: 'none' },
    { day: 'Tue', status: 'none' },
    { day: 'Wed', status: 'none' },
    { day: 'Thu', status: 'none' },
    { day: 'Fri', status: 'none' },
  ]

  const dispatch = useDispatch()

  const AddHabitHandler = () => {
    const currentHabit = { title, description, details }
    habits.push(currentHabit)
    console.log(habits)
    if (habits.length > 1) {
      localStorage.setItem('newHabits', JSON.stringify(habits))
    }
    dispatch(addHabit({ title, description, details }))

    props.onHide()
  }

  return (
    <Modal {...props} size='sm' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Dialog className='modal-sm'>
        <Modal.Body>
          <Form onSubmit={() => AddHabitHandler} name='form'>
            <Form.Group controlId='title'>
              <Form.Label>Habit Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='enter title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Describe it </Form.Label>
              <Form.Control
                type='text'
                placeholder='short description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}></Form.Control>
            </Form.Group>

            <Modal.Footer>
              <Button onClick={() => AddHabitHandler()}>Add Habit</Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  )
}

export default CreateHabit
