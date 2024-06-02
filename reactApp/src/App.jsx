import'./App.css'
import { useState } from 'react'

import AddAnimal from './AddAnimal.jsx'

function getRandomAnimal() {
  const animals = ['cat', 'dog', 'bird', 'gator']
return animals[Math.floor(Math.random() * animals.length)];
}
function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal,index)=>{
    return <AddAnimal id={index} type={animal} />
  })
  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
}

export default App
