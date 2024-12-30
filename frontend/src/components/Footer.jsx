import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div>
            {/*--------------Left Section----------------- */}
            <div>
               <img src={assets.logo} alt="" />
               <p>Empowering your health journey with easy appointments, smart reminders, personalized health tips, and advanced diabetes risk predictions. Your well-being, our priority.</p>
            </div>

           {/*--------------Center  Section----------------- */}
           <div>
                <p>Hospital</p>
                <ul>
                   <li>Home</li>
                   <li>About Us</li>
                   <li>Contact US</li>
                   <li>Privacy Policy</li> 
                </ul>
            </div>

              {/*--------------Right  Section----------------- */}
           <div>
                <p>GET IN TOUCH</p>
                <ul>
                    <li>+94 777144250</li>
                    <li>Prescriptohospital@gmail.com</li>
                </ul>
            </div>
        </div>
        {/*-----------Copyright Text------------- */}
        <div>
             <hr />
             <p>Copyright 2024@ Prescripto - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer