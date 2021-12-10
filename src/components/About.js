import "./about.css"

import React from 'react'
import about from "../img/about.jpg"

function About() {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card">
                { <img src={about}  alt=""  className="a-img"/> }
                </div>
            </div>
            <div className="a-right">
                
                    <h1 className="a-title">About Me</h1>
                    <p className="a-disc">Full Stack Developer with hands-on experience designing, developing, and implementing applications and solutions using a range of technologies and programming languages. Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Full-stack Developer.</p>
                    <h2 className="a-ed">Education Details</h2>
                    <ul>
                        <li><p><b>ME-Engineering Design, 2021</b> <br/>
                         Government College Of Technology,Coimbatore</p></li>
                        <li><p><b>BE-Mechanical Engineering, 2018</b><br/>
                         Sona College Of Technology,Salem</p></li>
                        <li><p><b>Higher Secondary Certificate, 2014</b><br/>
                         SRV Boys Higher Secondary School,Rasipuram</p></li>
                        <li><p><b>Secondary School Certificate, 2012</b><br/>
                         SRV Boys Higher Secondary School,Rasipuram</p></li>
                    </ul>
                
            </div>
        </div>
    )
}

export default About
