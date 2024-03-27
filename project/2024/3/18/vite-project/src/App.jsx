// import './App.css'
import Header from './Header.jsx'

const Person = ({ firstName, lastName }) => {
  return (
    <li>
      {firstName}
      {lastName}
    </li>
  )
}

function App() {
  const myProfile = {
    firstName: 'Takuma',
    lastName: 'Watanabe',
  }

  const users = [
    {
      firstName: 'Takuma',
      lastName: 'Watanabe',
    },
    {
      firstName: 'Zoe',
      lastName: 'Ames',
    },
    {
      firstName: 'Levi',
      lastName: 'Barnes',
    },
  ]

  return (
    <div>
      <Header />
      <div>
        {myProfile.firstName}
        {myProfile.lastName}
      </div>
      <div>
        <ul>
          {users.map((user) => (
            <Person
              key={user.firstName}
              firstName={user.firstName}
              lastName={user.lastName}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
