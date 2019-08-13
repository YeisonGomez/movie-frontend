import React from 'react';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import MovieCard from '../../components/MovieCard/MovieCard';
import movieActions from '../../services/Movie/MovieActions'
import './Home.css';

class Home extends React.Component {

  state = {
    movieName: "",
    movieList: []
  }

  componentDidMount(){
    this.props.getAll();
  }

  setMovieName(event){
    this.setState({ movieName: event.target.value })
  }

  signup(){
    const { movieList, movieName } = this.state;
    this.setState({ movieList: [...movieList, movieName], movieName: "" })
    document.getElementById("movie-name").value = "";
  }

  render() {
    const { movie } = this.props;
    const { movieName, movieList } = this.state;
    
    return (
      <div className="App">
        <h1>Cambio de blas</h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <ul>
            { movie.movies.map(movie => 
              <li key={movie.id}>{ movie.name }</li>
            )}
          </ul>
          <p>{ movieName }</p>
          <input id="movie-name" placeholder="Nombre pelicula" onChange={(e) => this.setMovieName(e)}/>
          <button type="button" onClick={() => this.signup()}>Registro</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movie
  }
}

const mapDispatchToProps = {
  getAll: movieActions.getAll
};

Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default Home;
