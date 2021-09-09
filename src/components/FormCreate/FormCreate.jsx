import { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

function FormCreate({ onSubmit }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCPF] = useState("");
  const [promocoes, setPromocoes] = useState("");
  const [novidades, setNovidades] = useState("");

  return (
    <form onSubmit={ (event) => {
        event.preventDefault();
        onSubmit({name, lastName, cpf, promocoes, novidades});
      }}>
      <TextField 
        id="name"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
        value={name}
        onChange={ (event) => setName(event.target.value) }
      />

      <TextField
        id="lastname"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
        value={lastName}
        onChange={ (event) => setLastName(event.target.value) }
      />

      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
        value={cpf}
        onChange={ (event) => setCPF(event.target.value) }
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch
          label="promocoes"
          color="primary"
          value={promocoes}
          onChange={ (event) => setPromocoes(event.target.checked)}/>}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch
          label="novidades"
          color="primary"
          value={novidades}
          onChange={ (event) => setNovidades(event.target.checked)}/>}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary">Cadastrar</Button>
    </form>
  );
}

export default FormCreate;
