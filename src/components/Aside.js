import '../styles/styles.css'

import girl from '../assets/imgs/girl.png'

const Aside = () => {
    return (

        <>
            <aside id="sidebar-wrapper">

                <div className="sidebar-contents">
                    <img src={girl} alt="me" style={{width: "65%"}}/>
                    <h4>About EM</h4>
                    <p>It’s me E.M, a wanderer by heart who was fascinated by motherboards at five...</p>

                    {/*  <h6 className="more-about-em">More about EM</h6>*/}


                    <ul className="nav justify-content-center list-unstyled d-flex">
                        <li className="social-icons"><a href="https://twitter.com/emsapinit" target="_blank"><i className="bi bi-twitter"></i></a> </li>
                        <li className="social-icons"><a href="https://github.com/emborromeo" target="_blank"><i className="bi bi-github"></i></a></li>
                        <li className="social-icons"><a href="https://www.instagram.com/emsapinit/" target="_blank"><i className="bi bi-instagram"></i></a></li>
                       <li className="social-icons"><a href="https://www.linkedin.com/in/emborromeo/" target="_blank"><i className="bi bi-linkedin"></i></a></li>

                    </ul>



                </div>


            </aside>
   



        </>
    )
}

export default Aside