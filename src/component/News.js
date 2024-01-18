import React, {useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=>{
const [articles,setArticles] =useState([])
const [loading,setLoading] =useState(true)
const [page,setPage] =useState(1)
const [totalResults,setTotalResults] =useState(0)

 const capitalizeFirstLetter =(string=>{
  return string.charAt(0).toUpperCase()+string.slice(1);
 })

const NewsUpdate=async()=>
  {
    props.setProgress(10);
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6287760666d0441da3412db0b032007f&page=${page}&pageSize=${props.pageSize}`;

  let data = await fetch(url);
  props.setProgress(30);
  let parseData = await data.json()
  props.setProgress(80);
  setArticles(parseData.articles)
  setTotalResults(parseData.totalResults)
  setLoading(false)
 
   props.setProgress(100);
  
}
useEffect(()=>{
  document.title =`${capitalizeFirstLetter(props.category)}-NewsWala`;
  NewsUpdate();
  // eslint-disable-next-line
}, [])
 


 const fetchMoreData = async()=>{
  
 const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6287760666d0441da3412db0b032007f&page=${page+1}&pageSize=${props.pageSize}`;
 setPage(page+1)
  let data = await fetch(url);
  let parseData = await data.json()
  setArticles(articles.concat(parseData.articles))
  setTotalResults(parseData.totalResults)
  
}

 
    return (
      <>
        <h2 className='text-center'>NewsWala - Top   {capitalizeFirstLetter(props.category)}     Headlines</h2>
       {loading &&  <Spinner/>}
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container ">
        <div className="row ">
        {articles.map((element)=>{
         return <div className="col-md-4" key={element.url}>
         <NewsItem   title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
         </div>
      
      })}
         </div>
       
        
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
         <button disabled={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
         <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
        </>
    )
  }


News.defaultProps ={
  country: 'in',
  pageSize: 8,
  category: 'genral'
  

}
News.PropsTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News
