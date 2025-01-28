import logo from './logo.svg';
import './App.css';
import Login1 from './components/Login1.jsx';
import { Result } from './components/Result.jsx';
import { FormProvider } from './components/Context';
import { useFormStore } from './components/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <Router>
    //     <Routes>
    //       {/* Route for the Login1 component */}
    //       <Route path="/" element={<Login1 />} />
    //       <Route path='/result' element={ <Result/>} />
    //     </Routes>
    //   </Router>
    // </div>
    <FormProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login1 />} />
                    <Route path="/result" element={<Result />} />
                </Routes>
            </Router>
        </FormProvider>
  );
}

export default App;
