import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar , Nav  , Button} from 'react-bootstrap'
import './NavBar.css';

const NavBar = () =>{

    return (
      
     
     <nav className="nav-style navbar navbar-light navbar-expand-lg ">
        <div className="container">

        <Navbar.Brand  href="#high">
          <div className="nav-brand">Project10</div>
          </Navbar.Brand>

            <button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1">
                <span className="visually-hidden">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="navbar-nav navbar-right ml-auto">
                <li className="nav-item active">
                    <Nav.Link href="#"  >Home</Nav.Link>
                      </li>
                   <li className="nav-item">
                    <Nav.Link href="#">About</Nav.Link>
                     </li>
                   <li className="nav-item">
                    <Nav.Link href="#">E-Learning</Nav.Link>
                      </li>
                   <li className="nav-item">
                    <Nav.Link href="#">School Supplies</Nav.Link>
                      </li>
                   <li className="nav-item">
                    <Nav.Link href="#">Donations</Nav.Link>
                      </li>
                   <li className="nav-item">
                    <Nav.Link href="#">Contact Us</Nav.Link>
                      </li>
                  <li className="nav-item">
                    <Button variant="primary" size='lg' className= "nav-button__login">Login</Button>
                      </li>
                  <li className="nav-item">
                    <Button variant="primary" size='lg' className= "nav-button__signup">Sign Up</Button>
                     </li>       
                </ul>
                
            </div>
        </div>
    </nav>


     
    );
    
}

export default NavBar;