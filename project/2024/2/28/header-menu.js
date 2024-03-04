'use strict'

const a = `
  <ul>
  <li><a href="./index.html">Go Top</a></li>
  <li><a href="./hide-and-show-menu.html">Go header menu</a></li>
  <li><a href="./exercise.html">Go Exercise Page</a></li>
  </ul>
`

document.body.insertAdjacentHTML('beforebegin', a)
