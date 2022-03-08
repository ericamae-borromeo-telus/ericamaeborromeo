import '../styles/styles.css'

import yoga from '../assets/imgs/yoga.png'
import programming from '../assets/imgs/programming.png'
import popcorn from '../assets/imgs/popcorn.png'



const SaturdayComp = () => {
    return (
        <>
            <section className="saturday-section" id="saturdaySection">

                <h3>Saturday plans</h3>

                <div className="column">
                    <img src={yoga} alt="yoga" style={{width: "50%"}}/>
                        <details>
                            <summary>Morning</summary>
                            <p>For weeks, I wasn't able to do yoga anymore that I don't feel as much as strong and flexible as before. So this saturday morning, i tried yoga and it felt as if i'm starting again</p>
                        </details>
                </div>

                <div className="column">
                    <img src={programming} alt="yoga" style={{width: "50%"}}/>
                        <details>
                            <summary>Afternoon</summary>
                            <p>On the afternoon, I continued the CSS Fundamentals activity. I tried a new layout and added some illustrations i got online.</p>
                        </details>
                </div>

                <div className="column">
                    <img src={popcorn} alt="yoga" style={{width: "50%"}}/>
                        <details>
                            <summary>Evening</summary>
                            <p>At night, I prepared ramen, some chips and ice cream to watch a KDrama called Tune in for Love.</p>
                        </details>
                </div>


            </section>
        </>

    )
}

export default SaturdayComp