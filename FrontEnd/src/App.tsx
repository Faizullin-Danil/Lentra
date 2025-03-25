import './App.css'
import { Provider } from 'react-redux'
import store from "./store/store"; 
import Router from './Router'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='flex flex-col min-h-screen'>
          <Header/>
          <div className='flex-1'>
            <Router/>
          </div>
          <Footer/>
        </div>
      </Provider>
    </BrowserRouter>
    
  )
}

export default App
