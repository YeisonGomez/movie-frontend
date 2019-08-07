import React from 'react';

class Login extends React.Component {
  
  state = {
    email: "",
    password: ""
  }

  login(){
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Cambio de Danna</h1>
        <input type="email" placeholder="Correo" onChange={(e) => this.setState({ email: e.target.value })}/>
        <input type="password" placeholder="Contraseña" onChange={(e) => this.setState({ password: e.target.value })}/>
        <button type="button" onClick={() => this.login()}>Iniciar sesión</button>
      </div>
    );
  }
}

export default Login;
