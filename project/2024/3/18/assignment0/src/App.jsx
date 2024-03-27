const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((person, index) => {
        return (
          <div key={`${person.firstName}-${index}`}>
            <h2>
              {person.firstName && person.firstName}
              {person.lastName && person.lastName}
              {person.name && person.name}
              {person.isStanding ? '🧍' : ''}
            </h2>
            <ul>
              {person.list.map((todo, index) => (
                <li key={`${todo}-${index}`}>{todo}</li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

// const Todo = ({ person }) => {
//   return (
//     <div>
//       <h2>
//         {person.firstName}
//         {person.lastName}
//       </h2>
//       <ul>
//         {person.list.map((todo, index) => (
//           <li key={index}>{todo}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

function App() {
  const person1 = {
    firstName: 'Takuma',
    lastName: 'Watanabe',
    list: ['Do homework', 'Cook dinner'],
    isStanding: true,
  }

  const person2 = {
    firstName: 'Levi',
    lastName: 'Ames',
    list: ['Do laundry', 'Go for a walk'],
    isStanding: false,
  }

  const person3 = {
    firstName: 'Goofy',
    lastName: 'Ames',
    list: ['Do laundry', 'Go for a walk'],
    isStanding: true,
  }

  const person4 = {
    firstName: 'Mouse',
    lastName: 'Minnie',
    list: ['Do laundry', 'Go for a walk', 'Darkness'],
    isStanding: false,
  }

  const person5 = {
    name: 'Goofy',
    list: ['Do laundry', 'Go for a walk'],
    isStanding: true,
  }

  const todos = [person1, person2, person3, person4, person5]

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <TodoList todos={todos} />
        {/* <Todo person={person1} />
        <Todo person={person2} />
        <Todo person={person3} />
        <Todo person={person4} />
        <Todo person={person5} /> */}
      </div>
    </div>
  )
}

export default App
