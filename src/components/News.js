import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export default class News extends Component{

  handleFirstCap = (string) =>{
      return string.substring(0, 1).toUpperCase()+string.substring(1, string.length());
  }

  constructor(props){
    super(props);
    console.log("Hello i am the constructor from news component")
    this.state = {
      articles : [],
      loading : false,
      page : 1
    }
  }

  async update(page){
    let size = this.props.pageSize;
    let coun = this.props.location;
    let cato = this.props.newsType;
    let num = page;
    let url = 'https://newsapi.org/v2/top-headlines?country='+coun+'&category='+cato+'&apiKey=ef225767c2ef4891b678de14ce861f27&page='+num+'&pageSize='+size;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page: this.state.page + 1,
      articles:parsedData.articles,
      loading: false
    })
  }

  async componentDidMount(){
    this.update(this.state.page);
  }

  handleNextClick = async ()=>{
    this.setState({page:this.state.page+1});
    this.update(this.state.page);
  }

  handlePreviousClick = async() =>{
    this.setState({page:this.state.page-1});
    this.update(this.state.page);
  }

  render (){
    return(
    <div className="container my-3">
    <h1 className="text-center">NewsMonkey - Top Headlines</h1>
    {this.state.loading && <Spinner/>}
    <div className="row">
    {!this.state.loading && this.state.articles.map((element)=>{
      return (<div className="col-md-3 my-3" key={element.url}>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} newsAuthor={element.author} newsDate={element.publishedAt} newsSource={element.source.name}/>
        </div>);
    })}
    </div>

    <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr;Previous</button>
        <button disabled={(this.state.page+1 > Math.ceil(this.state.totalResults/20))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
    </div>
    </div>
  )
  }
}