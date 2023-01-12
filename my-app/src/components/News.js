import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class news extends Component {
  render() {
    return (
      <div className='container'>
        This is The News Component,
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        </div>
    )
  }
}

export default news