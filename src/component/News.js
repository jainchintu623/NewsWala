import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner'

export class News extends Component {
 articles=[
 

 ]
  constructor()
  {
    super();
    
    this.state={
      articles: this.articles,
      loading: false,
      page: 1


    }
  }
  async componentDidMount()
  {
  let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=6287760666d0441da3412db0b032007f&pageSize=${this.props.pageSize}`;
  this.setState({loading: true})
  let data = await fetch(url);
  let parseData = await data.json()
  this.setState({articles: parseData.articles,totalResults: parseData.totalResults, loading: false })
  }

 handlePrevClick=async ()=>{
  let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=6287760666d0441da3412db0b032007f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  this.setState({loading: true})
  let data = await fetch(url);
  let parseData = await data.json()

   this.setState({
  page: this.state.page-1,
articles: parseData.articles,
loading: false
  
   })
   }
 handleNextClick=async()=>{
  if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    
  
  let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=6287760666d0441da3412db0b032007f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  this.setState({loading: true})
  let data = await fetch(url);
  

  let parseData = await data.json()

   this.setState({
  page: this.state.page+1,
articles: parseData.articles,
loading: false
  
   })
  }
 }

  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>News Top Head lines</h2>
       {this.state.loading &&  <Spinner/>}
        <div className="row">
        { this.state.articles.map((element)=>{
         return <div className="col-md-4" key={element.url}>
         <NewsItem   title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} imageUrl={element.urlToImage} newsUrl={element.url}/>
         </div>
      })}
       
        
        </div>
        <div className="container d-flex justify-content-between">
         <button disabled={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
         <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
