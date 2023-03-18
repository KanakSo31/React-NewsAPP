import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imgUrl, newsUrl, author, date} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "equal"}}>
          <img src={!imgUrl?"https://images.hindustantimes.com/tech/img/2023/01/20/1600x900/30dor_0_1674186986073_1674186993798_1674186993798.jpg":imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By{!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem