
import './App.css';
import React,{useState} from 'react'
import NavBar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

const App =()=> {
  const pageSize =15;
  const [progress,setProgress]=useState(0)
 

    return (
      <Router>
      <div>
     
     <NavBar/>
     <LoadingBar
        color='#f11946'
        height='3px'
        progress={progress}
      />
     <Routes>
     <Route exact path='/' element={  <News setProgress = {setProgress}  key ='general'  pageSize={pageSize} country="in" category="general"/> }></Route>
     <Route exact path='/Bussiness' element={  <News setProgress = {setProgress} key ='business' pageSize={pageSize} country="in" category="business"/> }></Route>
     <Route exact path='/Entertainment' element={  <News setProgress = {setProgress} key ='entertainment' pageSize={pageSize} country="in" category="entertainment"/> }></Route>
     <Route exact path='/Health' element={  <News setProgress = {setProgress} key ='health' pageSize={pageSize} country="in" category="health"/> }></Route>
     <Route exact path='/Science' element={  <News setProgress = {setProgress} key ='science' pageSize={pageSize} country="in" category="science"/> }></Route>
     <Route exact path='/Sports' element={  <News setProgress = {setProgress} key ='sports'pageSize={pageSize} country="in" category="sports"/> }></Route>
     <Route exact path='/Techonology' element={  <News setProgress = {setProgress} key ='technology ' pageSize={pageSize} country="in" category="technology"/> }></Route>
    
     </Routes>
      </div>
      </Router>
    )
  }

export default App