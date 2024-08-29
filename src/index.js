import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar'

function Index() {
  return (
    <div>
      <NavBar/>
    </div>
  )
}

ReactDOM.render(<Index/>,document.getElementById('root'))
