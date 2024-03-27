import { useState } from 'react'
import reactLogo from './assets/react.svg'

const Thumbnail = ({ size }) => (
  <img src={reactLogo} alt='React Logo' width={size} height={size} />
)

function Profile() {
  return <img src='https://i.imgur.com/lICfvbD.jpg' alt='Aklilu Lemma' />
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Thumbnail size={200} />
      <Thumbnail size={400} />
      <Profile />
    </>
  )
}

export default App
