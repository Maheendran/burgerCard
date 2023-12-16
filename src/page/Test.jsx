import React, { useState } from 'react'
import './Test.css'
const Test = () => {


  const [switchOn,setSwitchOn]=useState(false)


  return (
    <div class="main_box">
        <div className='screen'>
       <img src="https://th.bing.com/th/id/R.e02f574fc3e112632b80b486df36d17e?rik=sjZ%2fKHm0wEyeNA&riu=http%3a%2f%2fwww.carlogos.org%2flogo%2fAudi-logo-1999-1920x1080.png&ehk=dcUm4gGuX53HV%2bbBbA75d9xT07QDINEcnH2is%2bl%2fuaY%3d&risl=&pid=ImgRaw&r=0" alt="" />
        </div>


    <div class="main_circle">
    
    
    
    <div class="image_circle">
    
    <div class="top_image">
   {     switchOn? 
        <div>
            <img   src="https://bestanimations.com/media/cars/341478666luxury-car-animated-gif-1.gif" alt="" />
        </div>
:
     <div  
       className='banner'>

<p>Good Bye</p>

     </div>
    }
    </div>
    
    <div class="btm_section">
    
    <div class="left_sec">
    
    <div class="left_1_sec">
    <div class="btn_1_sec" onClick={()=>setSwitchOn(!switchOn)}>
     
    <i className={`fa-regular fa-circle-dot ${switchOn ? 'switchOns' : 'switchOff'}`}></i>

    </div>
    </div>
    
    
    <div class="left_2_sec">
        <div>
        <i className={`fa-solid fa-rocket ${switchOn ? 'switchOns' : 'switchOff'}`}></i>
         
        </div>
        <div>
            <i class="fa-solid fa-bicycle"></i>
        </div>
        <div>
            <i class="fa-solid fa-fill-drip icon_white"></i>
        </div>
    </div>
    <div class="left_3_sec">
    <div class="" 
     className={`light_bar ${switchOn ? 'switchOns' : 'switchOff'}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
        <div 
        className={`main_btn ${switchOn ? 'sroll_rotate' : ''}`}>
            <div class="main_first">

                <i className={`fa-solid fa-snowflake ${switchOn ? 'switchOns' : 'switchOff'}`}></i>
            </div>
            <div class="main_two">
                <i class="fa-solid fa-cloud-sun-rain"></i>
            </div>
            <div class="main_three"> 
                <i class="fa-solid fa-cloud-moon-rain"></i>
            </div>
            <div class="main_four">
                <i class="fa-solid fa-cloud-rain"></i>
            </div>
            <div class="main_five">
                 <i class="fa-solid fa-cloud-bolt"></i>
            </div>
             <div class="main_six">
            <i class="fa-solid fa-cloud-sun"></i>
         </div>
            <div>
                     
       
            </div>
            
          
           
         
    
        </div>
    </div>
    
    
    </div>
    <div class="right_sec">
    
        <div class="right_1_main">
    <p>Temperture</p>
    
    <div class="right_btn">
        <p>32^ F</p>
    </div > 
    
    <div class="right_btm">
    <button>F</button>
    <button>C</button>
    </div>
        </div>
    </div>
    
    
    </div>
    
    
    </div>
    
    
    </div>
    
    
    
    
    
    
    
    
    
    
        </div>
  )
}

export default Test