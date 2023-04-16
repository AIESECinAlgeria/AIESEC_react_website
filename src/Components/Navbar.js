 import "./Navbar.css";
 import "../../node_modules/bootstrap/dist/css/bootstrap.css"
 import 'bootstrap/dist/css/bootstrap.css';
 
 import logo from '../img/aiesec logo.png';
 function Navbar(){{}
    return(
        <nav> 
            <a> 
              <img src={logo} alt=""/>
            </a>
            <div>
            <ul id="navbar">
                <li><a href="index.html">For Youth</a></li>
                <li><a href="index.html">Offices</a></li>
                <li><a href="index.html">About Us</a></li>
                <li><a href="index.html">Our Products</a></li>
               
            </ul>
            </div>
            <button type="button" class="btn btn-primary w-15">Apply Now</button>
        </nav>

    )
}

export default Navbar; 
