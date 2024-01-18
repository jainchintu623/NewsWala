
const NewsItem = (props)=> {
  

   let {title , description,imageUrl, newsUrl , author , date,source}=props;
    return (
      <div className='my-3'>
       <div className="card" style={{height:'500px'}}>
       <div className="d-flex" style={{position:'absolute', right:'0px',top:'0px'}}>
       <span className="  middle badge rounded-pill bg-danger" >
       {source}
  </span>
       </div>
  
  <img src={imageUrl} className="card-img-top" style={{height:'400px'}}  alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}..  </h5>
    <p className="card-text">{description}..</p>
    <p className="card-text"><small className='text-muted'>By {(!author?"Unknown":author)} on  {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }


export default NewsItem
