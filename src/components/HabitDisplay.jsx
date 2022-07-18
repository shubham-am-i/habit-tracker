import { ListGroup, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import HabitDetails from './HabitDetails'

const HabitDisplay = () => {
  const { habits } = useSelector((state) => state.allHabits)
 
  return (
    <div className='mt-4 '>
      
      {habits.map((habit, index) => (
        
          <ListGroup.Item key={index} className='mb-3 rounded gradient1'>
            <p>
              {habit.title}&nbsp; :&nbsp; {habit.description}
            </p>

            <HabitDetails key={habit.title}  habit={habit} />
           
          </ListGroup.Item>
      
      ))}
    </div>
  )
}

export default HabitDisplay
