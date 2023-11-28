import './App.css';
import Auxiliary from '../src/hoc/Auxiliary'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Editor from './pages/Editor';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Auxiliary>
      <div>
        <Toaster
          position='top-right'
          toastOptions={{
            success: {
              theme: {
                primary: '#4aed88'
              }
            }
          }}/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/editor/:roomID' element={<Editor/>}/>
        </Routes>
      </BrowserRouter>
    </Auxiliary>
  );
}
export default App;