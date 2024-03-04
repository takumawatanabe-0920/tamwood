'use strict'

const people = [
  {
    name: 'Takuma',
    email: 'takumaozk0920@gmail.com',
    hobbies: ['Tennis', 'Soccer', 'Basketball'],
  },
  {
    name: 'Thomas',
    email: 'Thomas@gmail.com',
    hobbies: ['Tennis', 'Soccer', 'Basketball'],
  },
  {
    name: 'James',
    email: 'James@gmail.com',
    hobbies: ['Tennis', 'Soccer', 'Basketball'],
  },
]

const table = `
  <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Hobbies</th>
  </tr>
      ${people
        .map(
          (person) => `
        <tr>
          <td>${person.name}</td>
          <td>${person.email}</td>
          <td>${person.hobbies.join(', ')}</td>
        </tr>
        `
        )
        .join('')}
  </table>
`

document.body.insertAdjacentHTML('beforeend', table)
