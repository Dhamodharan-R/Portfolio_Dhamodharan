import React  from 'react'
import "./contact.css";
import ph from "../img/ph.png"
import ad from "../img/ad.png"
import gm from "../img/gm.png"
import {useRef,useState} from 'react'
import emailjs from 'emailjs-com';


function Contact() {

    const [done, setdone] = useState(false)

    const formRef = useRef()
    const handleSubmit =(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_xfvv31c', 'template_2e09ib6', formRef.current, 'user_PT5OG4Zj1XeAfk3Cr44Mz')
      .then((result) => {
          console.log(result.text);
          setdone(true)
      }, (error) => {
          console.log(error.text);
      });


    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={ph} className="c-icon"/>
                            +91 9952460299
                        </div>
                        <div className="c-info-item">
                            <img src={gm} className="c-icon"/>
                            dhamodharanr1996@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={ad} className="c-icon"/>
                            7/60,Nadar Street,Mangalam Post, T.Gode TK,Namakkal
                        </div>
                    </div>

                </div>
                <div className="c-right">
                    <p className="c-desc"><b>What's your story?</b> Get in touch.</p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" required/>
                        <input type="text" placeholder="Subject" name="user_subject" required/>
                        <input type="text" placeholder="Email" name="user_email" required/>
                        <textarea rows="5" placeholder="Message" name="message" required></textarea>
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>

            </div>
        </div>
    )
}
export default Contact
