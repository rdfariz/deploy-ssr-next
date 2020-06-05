import React from 'react'
import NavBar from './../../elements/navbar/'

class Component extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <NavBar/>
        { children }
      </div>
    )
  }
}

export default Component