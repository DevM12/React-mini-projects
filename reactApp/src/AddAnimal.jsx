import './AddAnimal.css'
import { useState } from 'react'
import bird from './animals/bird.svg'
import cat from './animals/cat.svg'
import cow from './animals/cow.svg'
import dog from './animals/dog.svg'
import gator from './animals/gator.svg'
import horse from './animals/horse.svg'
import heart from './animals/heart.svg'

const svgMap={
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
};

export default function AddAnimal({ type, id }) {
    const[clicks,setClicks]=useState(0);
    const handleClick=()=>{
        setClicks(clicks+1);
        
    };

    return <div  key={id} className='animal-show' onClick={handleClick}>
        <img className='animal' alt='animal' src={svgMap[type]} style={{width:'200px'}}/>
        <img className='heart' alt='heart' src={heart} style={{width:10+10*clicks+'px'}}/>
    </div>


}