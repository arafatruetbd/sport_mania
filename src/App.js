import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Home from "./components/Home/Home";
import PostDetail from "./components/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">
      <img src='https://image.shutterstock.com/image-illustration/stadium-sunset-people-fans-3d-260nw-587826638.jpg' style={{width:'100%', height:'400px'}} />
      <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/post/:id">
            <PostDetail></PostDetail>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
