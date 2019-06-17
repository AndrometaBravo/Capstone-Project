import React from "react"
import PropTypes from "prop-types"



class AboutUs extends React.Component {
  render () {
    return (
        <div className = "aboutPage">
            <h1>About Us</h1>
            <p>Creaters and Founders of Cloud Culture</p>

            <div className = "milesdiv">
                <div className = "picdiv">
                    <div className = "shadow"></div>
                    <img className = "milespic" src = "./miles.jpg"></img>
                </div>
                <div className = "space"></div>
                <div className = "bio">
                    <h1>Miles Shumilak</h1>
                    <h2>Programmer and Cofounder of Cloud Culture</h2>
                    <p>'Hope for calm seas ... but build a strong boat.'</p>
                    <p>-Miles Shumilak</p>
                </div>
            </div>

            <div className = "sebastiandiv">
                <div className = "picdiv">
                    <div className = "shadow"></div>
                    <img className = "sebastianpic" src = "./sebastian.jpg"></img>
                </div>
                <div className = "space"></div>
                <div className = "bio">
                    <h1>Sebastian White</h1>
                    <h2>Programmer and Cofounder of Cloud Culture</h2>
                    <p>test words</p>
                </div>
            </div>

            <div className = "chrisdiv">
                <div className = "picdiv">
                    <div className = "shadow"></div>
                    <img className = "chrispic" src = "./chris.jpg"></img>
                </div>
                <div className = "space"></div>
                <div className = "bio">
                    <h1>Christopher Norton</h1>
                    <h2>Programmer and Cofounder of Cloud Culture</h2>
                    <p>test words</p>
                </div>
            </div>

            <div className = "travisdiv">
                <div className = "picdiv">
                    <div className = "shadow"></div>
                    <img className = "travispic" src = "./travis.jpg"></img>
                </div>
                <div className = "space"></div>
                <div className = "bio">
                    <h1>Travis Baker</h1>
                    <h2>Programmer and Cofounder of Cloud Culture</h2>
                    <p> I enjoy taking on new challenges and creating things from the ground up.
                      Wether it's drawing, music, writing or programming I enjoy creating soomething new that people will enjoy experiencing.</p>
                </div>
            </div>
        </div>
       );
     }
   }
export default AboutUs
