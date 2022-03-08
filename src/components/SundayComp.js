import '../styles/styles.css'

import jump from "../assets/imgs/jump.png";
import church from "../assets/imgs/church.png";
import student from "../assets/imgs/student.png";


const SundayComp = () => {
    return (
        <>
            <section className="saturday-section" id="saturdaySection">

                <h3>Sunday plans</h3>

                <div className="column">
                    <img src={jump} alt="yoga" style={{width: "50%"}}/>
                    <details>
                        <summary>Morning</summary>
                        <p>Again, I wasn't able to do my jumps for the past weeks, so on Sunday morning, what I did was get back on doing my 1000 jumps. </p>
                    </details>
                </div>

                <div className="column">
                    <img src={church} alt="yoga" style={{width: "50%"}}/>
                    <details>
                        <summary>Afternoon</summary>
                        <p>While on the late afternoon, I went to church. After, I had a corn dog and an ice cream on a park nearby. </p>
                    </details>
                </div>

                <div className="column">
                    <img src={student} alt="yoga" style={{width: "50%"}}/>
                    <details>
                        <summary>Evening</summary>
                        <p>On the evening, I just read my new poetry book called HAI[NA]Ku. A poem from page 80 with a title "Just Another Weekend" caught my attention because of the activity we're doing.</p>
                    </details>
                </div>


            </section>

        </>

    )
}

export default SundayComp