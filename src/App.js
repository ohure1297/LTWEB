import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Small_Logo from './utils/img/Logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reserve from './pages/Reserve';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand text-success fw-semibold'>
              <img src={Small_Logo} alt="small_logo"/>
            </Link>
          </Navbar.Brand>
          <h1 className=''>Hello</h1>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              {/* <Nav.Link href='/' className='active text-uppercase'>ABOUT US</Nav.Link> */}
              <Nav.Link href='/about' className='active text-uppercase'>ABOUT US</Nav.Link>
              <Nav.Link href='/menu' className='text-uppercase'>MENUS</Nav.Link>
              <Nav.Link href='/reserve' className='text-uppercase'>RESERVE</Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase'>CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/reserve' element={<Reserve />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <footer className='bg-body-tertiary'>
        <p className='p-3 m-0 text-center'>copyright @ made by Ionut Cora</p>
      </footer>
    </div>
  );
}

export default App;
