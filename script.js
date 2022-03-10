import axios from 'axios'
import readline from 'readline'

var cl = readline.createInterface(process.stdin, process.stdout)
var question = function (q) {
  return new Promise((res, rej) => {
    cl.question(q, (answer) => {
      res(answer)
    })
  })
}

;(async () => {
  let id = await question('Write item ID ')
  let cookies = await question('Write cookies string ')
  const options = {
    method: 'GET',
    url: 'https://expo.chikoroko.art/toy/add/' + id,
    headers: { cookie: 'sessionid=' + cookies },
  }
  console.log(`
  TAKEN TAKEN TAKEN
  TAKEN TAKEN TAKEN
  TAKEN TAKEN TAKEN
  TAKEN TAKEN TAKEN
  TAKEN TAKEN TAKEN
  TAKEN TAKEN TAKEN
  TAKEN TAKEN TAKEN
  TAKEN TAKEN TAKEN
  TAKEN TAKEN TAKEN
  `);
  for (let i = 1; i > 0 ; i++) {
    try {
      let res = await axios.request(options)
      console.log(`
      TAKEN TAKEN TAKEN
      TAKEN TAKEN TAKEN
      TAKEN TAKEN TAKEN
      TAKEN TAKEN TAKEN
      TAKEN TAKEN TAKEN
      TAKEN TAKEN TAKEN
      TAKEN TAKEN TAKEN
      TAKEN TAKEN TAKEN
      TAKEN TAKEN TAKEN
      `);
    } catch (error) {
      console.log(`Item not found (404)`);
    }
    
  }
})()
