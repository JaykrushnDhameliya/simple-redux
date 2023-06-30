import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import From from './component/Form/form';
import Table from './component/table';
function App() {
  return (
    <div className="App">
     {/* <From/> */}
     <BrowserRouter>
     <Routes>
     <Route path='/table' element={<Table/>}/>
     <Route path='/form' element={<From/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
