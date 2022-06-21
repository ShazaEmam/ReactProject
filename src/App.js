import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import Header from './pages/header/header';
import Home from './pages/home/home';
import MovieDetails from "./pages/movie/movieDetails";
import Movie from './pages/movie/movies';
import Footer from './pages/footer/footer'
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movie} />
          <Route path="/details/:id" exact component={MovieDetails} />
        </Switch>
       <Footer/>
      </Router>
      

    </>
  );
}

export default App;
