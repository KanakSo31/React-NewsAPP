import React, { useEffect, useLayoutEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
  const News =(props)=>{
    useState[articles, setArticle] = useState([])
    useState[loading, setLoading] = useState(true)
    useState[page, setPage] = useState(1)
    useState[totalResults, setTotalResults] = useState(0)
    // document.title = `${this.capitalizeFirstLetter(props.category)} - DNews`;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // constructor(props) {
  //   super(props);
    
  // }
  const updateNews = async ()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8c9b938866be46d694e319f6d069d1e0&page=${props.page}&pageSize=${props.pageSize}`;

    props.setState({ loading: true });

    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setArticle(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // })
    props.setProgress(100);
  }
  // componentdidMount fetch all the information with the help of API
  // async componentDidMount() {
    useEffect(()=>{
      updateNews();
    }, [])

  const handlePrevClick = async () => {
    setPage(page + 1)
    updateNews();

  }
 const  handleNextClick = async () => {
    setPage(page + 1)
    updateNews();
  }
  fetchMoreData = async() => {
    props.setState({page: props.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8c9b938866be46d694e319f6d069d1e0&page=${props.page}&pageSize=${props.pageSize}`;
    // console.log(url);
    props.setState({ loading: true });

    let data = await fetch(url);

    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)

    // props.setState({
    //   articles: props.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    //   loading: false

    // })
  };
  // render() {
    return (
      <>
      {/* <div className='container my-3'> */}

        <h2 className='text-center fw-bold'>Leatest Headlines From - {capitalizeFirstLetter(props.category)}</h2>

        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={this.fetchMoreData}
          hasMore={articles.length !== totalResults}
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

          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div> */}
      {/* </div> */}
    
    </>
    )
  // }
};

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News