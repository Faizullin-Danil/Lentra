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
        <Header/>
        <Router/>
        {/* <Footer/> */}
      </Provider>
    </BrowserRouter>
    
  )
}

export default App
