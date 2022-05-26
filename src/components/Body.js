import React from 'react';
import '../App.css';
import { Button } from './Button';
import'./Body.css';



function Body(){
    return(
        <div className='Body-container'>
            <video src="images/videos/myvid.mp4" autoPlay loop muted/>
            <h1> WELCOME</h1>
          
            <div className='Body-btn'>
               <Button className='btn' buttonStyle='btn--outline'
               buttonSize='btn--large'>
                   GET STARTED
                   
               </Button>
            </div>
           
        </div>
    )
}

export default Body;