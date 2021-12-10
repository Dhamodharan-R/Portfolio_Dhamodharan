import "./projects.css"
import  {data} from "./data"
import Product  from "./Product"
import React from 'react'


function Projects() {
    return (
        <div className="pl" id="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Projects</h1>
            </div>
            <div className="pl-list">
                {data.map((d)=>{
                  return <Product key={d.id} img={d.img} title={d.title}/>
                })}
            </div>
        </div>
    )
}

export default Projects
