import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
 articles=[
  {
    "source":{"id":null,"name":"The New Yorker"},"author":"Simon Webster","title":"Understanding the Laws of Cricket","description":"My hope is that these brief and straightforward instructions will bring legions of new fans into the British Empire—I mean, global cricket family.","url":"https://www.newyorker.com/humor/daily-shouts/understanding-the-laws-of-cricket","urlToImage":"https://media.newyorker.com/photos/6579d39668872af306a7c711/16:9/w_1280,c_limit/Webster-Shouts-Cricket.jpg","publishedAt":"2023-12-14T11:00:00Z","content":"Cricket is the second most popular sport in the world, with some two and a half billion fans globally, including several Americans. And theres always room for more, which is why Ive prepared this sho… [+4172 chars]"
  },
  {
    "source":{"id":null,"name":"The New Yorker"},"author":"Simon Webster","title":"Understanding the Laws of Cricket","description":"My hope is that these brief and straightforward instructions will bring legions of new fans into the British Empire—I mean, global cricket family.","url":"https://www.newyorker.com/humor/daily-shouts/understanding-the-laws-of-cricket","urlToImage":"https://media.newyorker.com/photos/6579d39668872af306a7c711/16:9/w_1280,c_limit/Webster-Shouts-Cricket.jpg","publishedAt":"2023-12-14T11:00:00Z","content":"Cricket is the second most popular sport in the world, with some two and a half billion fans globally, including several Americans. And theres always room for more, which is why Ive prepared this sho… [+4172 chars]"
  }
 ]
  constructor()
  {
    super();
    
    this.state={
      articles: this.articles,
      loding: false
    }
  }
  async componentDidMount()
  {
  let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=6287760666d0441da3412db0b032007f";
  let data = await fetch(url);
  let parseData = await data.json()
  this.setState({articles: parseData.articles})
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>News Top Head lines</h2>
       
        <div className="row">
        {this.state.articles.map((element)=>{
         return <div className="col-md-3" key={element.url}>
         <NewsItem   title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} imageUrl={element.urlToImage} newsUrl={element.url}/>
         </div>
      })}
       
        
        </div>
      </div>
    )
  }
}

export default News
