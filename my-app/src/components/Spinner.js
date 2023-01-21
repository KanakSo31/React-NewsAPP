import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Walk from "./Walk.gif"

export class Spinner extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='text-center'>
        <img src={Walk} alt="loading"/>
      </div>
    )
  }
}

export default Spinner