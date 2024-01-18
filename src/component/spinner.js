import loading from './loding.gif.gif'
const Spinner = ()=>{
  
    return (
      <div className=' d-flex justify-content-center align-items-center '>
        <img className='w-50 m-auto' src={loading} alt="loading" />
      </div>
    )
  }


export default Spinner
