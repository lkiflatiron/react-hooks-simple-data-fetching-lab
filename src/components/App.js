// create your App component here
import React, { useState, useEffect } from 'react';

function App() {

  const [isLoaded, setIsLoaded] = useState(false)
  const [dogImage, setDogImage] = useState('')

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(dog => {
      setDogImage(dog)
      setIsLoaded(true)
    })
  },[])

  if (!isLoaded) return <p>Loading...</p>

  return <img src={dogImage.message} alt="A Random Dog" />
}

export default App;
