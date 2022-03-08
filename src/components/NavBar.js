import { Outlet, Link } from "react-router-dom";
import '../styles/styles.css'



const NavBar = () => {
    return (

        <>
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <Link to = "/home_content" className="navbar-brand" >EM</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to = "/home_content" className="nav-link active" >Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to = "/saturday_content" className="nav-link" >Saturday</Link>
                            </li>
                            <li class="nav-item">
                                <Link to = "/sunday_content" className="nav-link" >Sunday</Link>
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