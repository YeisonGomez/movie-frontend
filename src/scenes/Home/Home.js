import React from 'react';
import logo from '../../logo.svg';
import MovieCard from '../../components/MovieCard/MovieCard';
import './Home.css';
import * as moment from 'moment'
import { DatePicker } from 'antd';

class Home extends React.Component {

  state = {
    users: [],
    movieName: "",
    movieList: []
  }

  componentDidMount(){
    this.getUsers();
  }

  getUsers(){
    fetch("https://reqres.in/api/users?page=2")
    .then(async response => {
      const users = await response.json()
      this.setState({ users: users.data });
    })
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
    const { movieName, movieList, users } = this.state;

    return (
      <div className="App">
        <DatePicker />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <ul>
            { users.map((user, i) => <MovieCard key={i} name={user.first_name}/>) }
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
