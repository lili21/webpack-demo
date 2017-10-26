import _ from 'lodash'
// import llsjs from '@lls/llsjs/lib/production/track/tracker'

const loadA = () => import(/* webpackChunkName: 'module-a' */ './module-a.js')

const loadB = () => import(/* webpackChunkName: 'module-b' */ './module-b.js')

function component() {
  const element = document.createElement('div')
  const btnA = document.createElement('button')
  const btnB = document.createElement('button')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  btnA.innerHTML = 'Load A'
  btnA.onclick = loadA
  
  btnB.innerHTML = 'Load B'
  btnB.onclick = loadB

  element.appendChild(btnA)
  element.appendChild(btnB)
  return element
}

document.body.appendChild(component())
