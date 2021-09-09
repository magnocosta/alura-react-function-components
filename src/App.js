import React, { Component } from 'react';
import { Container, Typography } from '@material-ui/core';
import "@fontsource/roboto";
import FormCreate from './components/FormCreate/FormCreate.jsx';
import './App.css';

class App extends Component {

  render() {
    return (
      <Container maxWidth="sm" component="article">
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
        <FormCreate onSubmit={ onSubmit }/>
      </Container>
    );
  }
}

function onSubmit(data) {
  console.log(data);
}

export default App;
