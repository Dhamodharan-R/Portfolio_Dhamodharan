import React from 'react'
import "./skills.css"
import skill from "../img/web.jpg"
function Skills() {
    return (
        <div className="s">
            <div className="s-left">
                <div className="s-left-wrapper">
                    <h1>Skills</h1>
                    <ul>
                        <li className="s-li">HTML</li>
                        <li className="s-li">CSS</li>
                        <li className="s-li">Javascript</li>
                        <li className="s-li">React Js</li>
                        <li className="s-li">Node Js</li>
                        <li className="s-li">Express</li>
                        <li className="s-li">MongoDb</li>
                        <li className="s-li">Git</li>
                    </ul>

                </div>
            </div>
            <div className="s-right">
            { <img src={skill}  alt=""  className="s-img"/> }
            </div>
        </div>
    )
}

export default Skills
