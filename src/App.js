import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Landing} from './pages/Landing'
import {ResumeFirstPage} from './pages/ResumeFirstPage'
import {ResumeSecondPage} from './pages/ResumeSecondPage'
import {ResumeThirdPage} from './pages/ResumeThirdPage'
import {ResultResume} from './pages/ResultResume'
import {Error} from './pages/Error'




function App() {

  
  
  const trueSecondPage = localStorage.getItem("trueSecondPage")
  const trueThirdPage = localStorage.getItem("trueThirdPage")
  const trueResultResume = localStorage.getItem("trueResultResume")


  return (
    <div className="app">
       <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='first_page' element={<ResumeFirstPage />} />
        {trueSecondPage && <Route path='second_page' element={<ResumeSecondPage />} />}
        {trueThirdPage && <Route path='third_page' element={<ResumeThirdPage />} />}
        {trueResultResume && <Route path='result_resume' element={<ResultResume />} />}
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
