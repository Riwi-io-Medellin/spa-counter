import '../css/style.css'
import { setupCounter } from './counter.js'

const viteLogo = '/vite.svg'
const javascriptLogo = '/javascript.svg'
const riwiLogo = '/favicon.webp'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://riwi.io/" target="_blank">
      <img src="${riwiLogo}" class="logo riwi" alt="Riwi logo" />
    </a>
    <a href="https://riwi.io/" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    
    <h1>Hello Coders, This application have Docker!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
