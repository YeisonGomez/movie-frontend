import React from 'react';

class MovieCard extends React.Component {

  IMAGE_DEFAULT = "https://www.google.com/imgres?imgurl=http%3A%2F%2Fsaveabandonedbabies.org%2Fwp-content%2Fuploads%2F2015%2F08%2Fdefault.png&imgrefurl=http%3A%2F%2Fsaveabandonedbabies.org%2Ftestimonal%2Fsubmitted-by-one-of-our-dedicated-volunteers%2Fdefault%2F&docid=vIhAj0aQQGH79M&tbnid=SnP4az_cMMS8AM%3A&vet=10ahUKEwi65qSHh-PjAhXK1VkKHZwEBgcQMwhOKAMwAw..i&w=570&h=321&safe=active&bih=969&biw=841&q=image%20default&ved=0ahUKEwi65qSHh-PjAhXK1VkKHZwEBgcQMwhOKAMwAw&iact=mrc&uact=8";
  state = {}

  render() {
    const { image = this.IMAGE_DEFAULT, name } = this.props;

    return (
      <div>
        <h1>Cambio Stefany</h1>
        <img src={image} alt="Pelicula"/>
        <h2>{name}</h2>
      </div>
    );
  }
}

export default MovieCard;
