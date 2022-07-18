import { ListGroup} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import HabitDetails from './HabitDetails'

const HabitDisplay = () => {
  const { habits } = useSelector((state) => state.allHabits)
 
  return (
    <div className='mt-4 '>
      
      {habits.map((habit, index) => (
        
          <ListGroup.Item key={index} className='mb-3 rounded gradient1'>
            <p>
              <strong>{habit.title}</strong>&nbsp; :&nbsp; <i>{habit.description}</i>
            </p>

            <HabitDetails key={habit.title}  habit={habit} />
           
          </ListGroup.Item>
      
      ))}
    </div>
  )
}

export default HabitDisplay
