import './App.css';
import Auxiliary from '../src/hoc/Auxiliary'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import Editor from './containers/Editor';
import { Toaster } from 'react-hot-toast';
import { Component } from 'react';

class  App extends Component {
  render() {
    return (
      <Auxiliary>
        <div>
          <Toaster
            position='top-right'
            toastOptions={{
              success: {
                theme: {
                  // primary: '#4aed88'
                  primary: '#fbde2d'
                }
              }
            }}/>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/editor/:roomId' element={<Editor/>}/>
          </Routes>
        </BrowserRouter>
      </Auxiliary>
    );
  }
}
export default App;