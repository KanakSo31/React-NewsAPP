import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category : PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  // componentdidMount fetch all the information with the help of API
  async componentDidMount() {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8c9b938866be46d694e319f6d069d1e0&page=1&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });

    let data = await fetch(url);

    let parsedData = await data.json()

    console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false

    })
  }
  handlePrevClick = async () => {
    console.log("privious");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8c9b938866be46d694e319f6d069d1e0&page=${this.state.page - 1}&pageSize = ${this.props.pageSize}`;

    this.setState({ loading: true });

    let data = await fetch(url);

    let parsedData = await data.json()

    console.log(parsedData);

    this.setState({

      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false

    })

  }
  handleNextClick = async () => {

    console.log("Next");

    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8c9b938866be46d694e319f6d069d1e0&page=${this.state.page + 1}&pageSize = ${this.props.pageSize}`;

      this.setState({ loading: true });

      let data = await fetch(url);

      let parsedData = await data.json();

      this.setState({

        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false

      })
    }
  }
  render() {
    return (
      <div className='container my-3'>

        <h2 className='text-center fw-bold'>Leatest News</h2>

        {this.state.loading && <Spinner />}

        <div className='row'>

          {!this.loading && this.state.articles.map((element) => {

            return <div className='col-md-4' key={element.url}>

              <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 80) : ""} imgUrl={element.urlToImage} newsUrl={element.url} />

            </div>
          })}
        </div>
        <div className='container d-flex justify-content-between'>

          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Privious</button>

          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
      </div>
    )
  }
};

export default News