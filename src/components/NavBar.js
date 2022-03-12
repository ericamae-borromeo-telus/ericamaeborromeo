import { Outlet, Link , NavLink } from "react-router-dom";
import '../styles/styles.css'
import em from '../assets/imgs/em-brand.png'





const NavBar = () => {
    return (

        <>
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <Link to = "/ericamaeborromeo/home_content" className="navbar-brand" >    
                        <img src={em} alt="em logo" className="img-fluid em-logo"/>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="justify-content-end collapse navbar-collapse pe-5 me-5"  id="navbarTogglerDemo02">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavLink to = "/ericamaeborromeo/home_content" className="nav-link" activeClassName="active" >Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to = "/ericamaeborromeo/saturday_content" className="nav-link" activeClassName="active" >Saturday</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to = "/ericamaeborromeo/sunday_content" className="nav-link" activeClassName="active" >Sunday</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

            <Outlet />

        </>

    )
}

export default NavBar