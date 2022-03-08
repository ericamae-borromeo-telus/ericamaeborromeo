
import '../styles/styles.css'

const Footer = () => {
    return (
        <>
            <div className="container-fluid fixed-bottom bottom-0 start-0">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">

                        <span className="text-muted">&copy; 2022 EM Borromeo</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3 social-icons"><a href="https://twitter.com/emsapinit" target="_blank"><i className="bi bi-twitter"></i></a> </li>
                        <li className="ms-3 social-icons"><a href="https://github.com/emborromeo" target="_blank"><i className="bi bi-github"></i></a></li>
                        <li className="ms-3 social-icons"><a href="https://www.linkedin.com/in/emborromeo/" target="_blank"><i className="bi bi-linkedin"></i></a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Footer