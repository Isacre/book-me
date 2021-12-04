import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from './store/index'






function App() {
  return (
    <div className="App">
 <Provider store={store}>
      <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
