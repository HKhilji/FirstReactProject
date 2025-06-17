import './About.css'

function About({ mode }) {
    return(
        <div className={`page about-page ${mode}`}>
            <h1>ABOUT ME</h1><br></br>

            <div className="about-section">

                <a href='https://store.steampowered.com/app/1091500/Cyberpunk_2077/' target="_blank"> <img src="https://cdn.mos.cms.futurecdn.net/rLh7Dh7EKo8F6zmDtXYp8W-1200-80.jpg" width={500} height={300} alt="Cyberpunk 2077"/> </a>

                <h5>I'm a video gamer at heart so naturally I find myself interested in either playing them or figuring out the technology behind them. </h5>
                <br></br>
            </div>

            <br></br>

            <div className="about-section">
            <h5>
                I'm a fanatic of PC Components, always keeping up with the latest trends and topics and often dabbling in assembling PCs myself.
                </h5>
                <br></br>

                <img src="https://media.istockphoto.com/id/1441217865/photo/gaming-pc-with-rainbow-led-light-liquid-cooled-computer-powerful-pc-in-a-glass-case-with.jpg?s=612x612&w=0&k=20&c=JlpoWN7YGaWgdCEwPU6dt8UITfSI-Xs2uwRzLhzKTXk=" width={450} height={300} alt="(not my Gaming PC)"></img>
            </div>
        
        </div>
    )
}

export default About;