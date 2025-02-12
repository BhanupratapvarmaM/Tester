import React from "react";
import './Body.css'
import Image from "../Assets/Logo New.png";
import Images from "../Assets/Lan.jpg";
import Eventmedia from "../Assets/Teaser.mp4"
import BG from "../Assets/VideoBG.png";
function Body() {
    const events=[
        {
          id :1,
          media: Eventmedia,
    
        },
    ]
  return (
    
      <div>
      <h2 id='Heading'>DEPARTMENT OF MCA</h2>
       <div className='maindisc'>
      {events.map((events) =>(
        <div key={events.id} className='container' >
          <img id='bg' src={BG}/>
         <video className='video'src={events.media} autoPlay muted loop />
          <p id='Techdisc'>Techeon is a premier technical program organized as part of Sudhee, the annual technical fest of CBIT (Chaitanya Bharathi Institute of Technology). It serves as a platform for tech enthusiasts to explore cutting-edge innovations, participate in hands-on workshops, and compete in various technical challenges. Techeon brings together students, industry experts, and innovators to foster learning, collaboration, and creativity in the fields of engineering and technology.  </p>
          </div>
      ))

      }
     </div>
      {/* Events Display */}
      <div className='Displaybox'>
      <div className='ImageContainer'>
        <img className='image' src={Images}class="image"></img>
        <div class="description">
          Participants will be playing a tournament on BGMI to win prize money of 5000 Rs
        </div>
      </div>
      <div className='ImageContainer'>
      <img className='image' src={Images}class="image"></img>
        <div class="description">
          Participants will be playing a tournament on BGMI to win prize money of 5000 Rs
        </div>
      </div>
      <div className='ImageContainer'>
      <img className='image' src={Images}class="image"></img>
        <div class="description">
          Participants will be playing a tournament on BGMI to win prize money of 5000 Rs
        </div>
      </div>
      <div className='ImageContainer'>
      <img className='image' src={Images}class="image"></img>
        <div class="description">
          Participants will be playing a tournament on BGMI to win prize money of 5000 Rs
        </div>
      </div>
      </div>

    </div>

  );
}

export default Body;
