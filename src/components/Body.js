import React from 'react';
import '../App.css';
import { Button } from './Button';
import'./Body.css';



function Body(){
    return(
        <div className='Body-container'>
            <video src="images/videos/background.mp4" autoPlay loop muted/>
            <h1> WELCOME</h1>
            <p>Explore our menu </p>
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