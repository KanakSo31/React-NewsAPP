import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - DNews`;
  }
  async updateNews(pageNo) {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8c9b938866be46d694e319f6d069d1e0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // console.log(url);
    this.setState({ loading: true });

    let data = await fetch(url);

    let parsedData = await data.json()

    // console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false

    })
  }
  // componentdidMount fetch all the information with the help of API
  async componentDidMount() {
    this.updateNews();
    // console.log(this.props);
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8c9b938866be46d694e319f6d069d1e0&page=1&pageSize=${this.props.pageSize}`;
    // console.log(url);
    // this.setState({ loading: true });

    // let data = await fetch(url);
    // 
    // let parsedData = await data.json()

    // console.log(parsedData);

    // this.setState({
    // articles: parsedData.articles,
    // totalResults: parsedData.totalResults,
    // loading: false

    // })
  }
  handlePrevClick = async () => {
    // console.log("privious");

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8c9b938866be46d694e319f6d069d1e0&page=${this.state.page-1}&pageSize = ${this.props.pageSize}`;

    // this.setState({ loading: true });
    // 
    // let data = await fetch(url);

    // let parsedData = await data.json()

    // console.log(parsedData);
    // console.log(parsedData);

    // this.setState({

    // page: this.state.page - 1,
    // articles: parsedData.articles,
    // loading: false

    // })
    this.setState({ page: this.state.page - 1 });
    this.updateNews();

  }
  handleNextClick = async () => {

    // console.log("Next");
    // console.log(this.props);

    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {

    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8c9b938866be46d694e319f6d069d1e0&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    // console.log(url);
    // this.setState({ loading: true });

    // let data = await fetch(url);

    // let parsedData = await data.json();
    // console.log(parsedData.articles);
    // this.setState({

    // page: this.state.page + 1,
    // articles: parsedData.articles,
    // loading: false

    // })
    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  }
  fetchMoreData = async() => {
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8c9b938866be46d694e319f6d069d1e0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // console.log(url);
    this.setState({ loading: true });

    let data = await fetch(url);

    let parsedData = await data.json()

    // console.log(parsedData);

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false

    })
  };
  render() {
    return (
      <>
      {/* <div className='container my-3'> */}

        <h2 className='text-center fw-bold'>Leatest Headlines From - {this.capitalizeFirstLetter(this.props.category)}</h2>

        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length != this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>
          <div className='row'>

            {/* {!this.loading && this.state.articles.map((element) => { */}
            {this.state.articles.map((element) => {

              return <div className='col-md-4' key={element.url}>

                <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 80) : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

              </div>
            })}
          </div>
          </div>
        </InfiniteScroll>
        {/* <div className='container d-flex justify-content-between'>

          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Privious</button>

          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div> */}
      {/* </div> */}
    
    </>
    )
  }
};

export default News