import { useState } from 'react'
import './App.css'
import { characterList } from './data.js'

function App() {
  const [characters, setCharacters] = useState(characterList)
  const [clickedCharacters, setClickedCharacters] = useState([])

  const shuffleCharacters = () => {
    setCharacters((characters) => {
      const shuffled = [...characters].sort(() => Math.random() - 0.5)
      return shuffled
    })
  }

  const handleClick = (name) => {
    if (clickedCharacters.includes(name)) {
      // Reset the game
      setClickedCharacters([])
    } else {
      setClickedCharacters((clickedCharacters) => [...clickedCharacters, name])
    }
    shuffleCharacters()
  }

  return (
    <>
      <h1>Game</h1>
      Score: {clickedCharacters.length}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          width: '500px',
        }}
      >
        {characters.map((character, index) => (
          <div
            key={index}
            onClick={() => handleClick(character.name)}
            style={{
              border: '1px solid black',
              padding: '1rem',
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            <img
              src={`/${character.name}.png`}
              alt=''
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            {character.name}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
