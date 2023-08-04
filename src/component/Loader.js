import React, { Component } from 'react'
import loading from './loading.gif'

export default class loader extends Component {
  render() {
    return (
      <div className='text-center text-size-lg '>
        <img src={loading} alt="loading"/>
      </div>
    )
  }
}
