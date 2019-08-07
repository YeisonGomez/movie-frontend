import React from 'react';
import logo from '../../logo.svg';
import MovieCard from '../../components/MovieCard/MovieCard';
import './Home.css';

class Home extends React.Component {

  state = {
    movieName: "",
    movieList: []
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
    const { movieName, movieList } = this.state;

    return (
      <div className="App">
        <h1>Cambio de blas</h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <ul>
            { movieList.map((movie, i) => {
                return (
                  <MovieCard key={i} name={movie}></MovieCard>
                )
              })
            }
          </ul>
          <p>{ movieName }</p>
          <input id="movie-name" placeholder="Nombre pelicula" onChange={(e) => this.setMovieName(e)}/>
          <button type="button" onClick={() => this.signup()}>Registro</button>
        </header>
      </div>
    );
  }
}

export default Home;
