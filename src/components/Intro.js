import React from 'react'
import "./Intro.css"
import dhamo from "../img/dhamo.png"

function Intro() {
    return (
        <div className="i" id="intro">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Dhamodharan</h1>
                    <div className="i-title" >
                        <div  className="i-title-wrapper">
                            <div className ="i-title-item">React js</div>
                            <div className ="i-title-item">Node js</div>
                            <div className ="i-title-item">Express</div>
                            <div className ="i-title-item">Mongodb</div>
                            <div className ="i-title-item">Git</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        I am a full stack web developer with a vast array of knowledge in many different front end back end languages, responsive frameworks, databases, and best code practices.
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={dhamo} alt="" className="i-img"/>
            </div>
        </div>
    )
}

export default Intro
