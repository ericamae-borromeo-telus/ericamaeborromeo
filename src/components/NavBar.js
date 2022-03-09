import { Outlet, Link } from "react-router-dom";
import '../styles/styles.css'



const NavBar = () => {
    return (

        <>
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <Link to = "/ericamaeborromeo/home_content" className="navbar-brand" >EM</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="justify-content-end collapse navbar-collapse pe-5 me-5"  id="navbarTogglerDemo02">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to = "/ericamaeborromeo/home_content" className="nav-link active" >Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to = "/ericamaeborromeo/saturday_content" className="nav-link" >Saturday</Link>
                            </li>
                            <li class="nav-item">
                                <Link to = "/ericamaeborromeo/sunday_content" className="nav-link" >Sunday</Link>
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