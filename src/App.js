import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import { PhotoProvider } from "./contexts/PhotoContext";


const App = () => {
    let content = (
        <Router>
            <PhotoProvider>
                <div className="App">
                    <Route exact path="/" component={MainPage}/>
                </div>
            </PhotoProvider>
        </Router>
  );
  return content;
}

export default App;
