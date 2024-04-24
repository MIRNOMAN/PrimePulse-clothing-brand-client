import './Hero.css'
import hand_icon from "../../Images/hand_icon.png"
import arrow_icon from "../../Images/arrow.png"
import hero_image from "../../Images/hero_image.png"



const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>

            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
        <img className='h-[500px]' src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero