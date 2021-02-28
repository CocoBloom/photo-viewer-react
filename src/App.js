import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import PhotoDetailPage from './components/PhotoDetailPage';
import { PhotoProvider } from "./contexts/PhotoContext";
import { EditProvider } from "./contexts/EditContext";
import './App.css';

const App = () => {
    return (
      <Router>
          <PhotoProvider>
              <EditProvider>
                  <div className="App">
                      <Route exact path="/" component={MainPage}/>
                      <Route exact path="/photo/:id" component={PhotoDetailPage}/>
                  </div>
              </EditProvider>
          </PhotoProvider>
      </Router>
  );
}

export default App;
