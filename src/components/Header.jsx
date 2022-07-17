import { Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <Nav className='bg-primary p-2'>
      <Container>
        <h3 className='fw-bold'>Ninja Habits</h3>
      </Container>
    </Nav>
  )
}

export default Header
