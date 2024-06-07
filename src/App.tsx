import './App.css';
import Form from './Component/Form/Form';
import { Routes,Route } from 'react-router-dom';
import User from './Component/Form/User'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={ <Form/>}></Route>
        <Route  path="/userdetails" element={ <User/>}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
