import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class news extends Component {
  constructor(){
    super();
    this.state={
      articles: [],
      loading: false,
      page:1
    }
  }
// componentdidMount fetch all the information with the help of API
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=8c9b938866be46d694e319f6d069d1e0&page=1pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults})

  }
  handlePrevClick = async ()=>{
    console.log("privious");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8c9b938866be46d694e319f6d069d1e0&page=${this.state.page - 1}&pageSize = 20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page:this.state.page - 1,
      articles: parsedData.articles
    })
    
  }
  handleNextClick = async ()=>{
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)) {
      
    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8c9b938866be46d694e319f6d069d1e0&page=${this.state.page + 1}&pageSize = 20`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
        page:this.state.page + 1,
        articles: parsedData.articles
      })
  }
  }


  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>All News - Headlines</h2>
        <div className='row'>
         {this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
              <NewsItem  title = {element.title?element.title.slice(0, 40):""} description = {element.description?element.description.slice(0, 80):""} imgUrl= {element.urlToImage} newsUrl = {element.url}/>
            </div>
         })}
        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Privious</button>
        <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default news