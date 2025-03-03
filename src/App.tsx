import './App.css'
import { Provider } from 'react-redux'
import store from "./store/store"; 
import Router from './Router'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header/>
        <Router/>
      </Provider>
    </BrowserRouter>
    
  )
}

export default App
