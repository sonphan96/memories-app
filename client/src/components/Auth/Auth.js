import React, { useState } from 'react';
import { Avatar, Button, Grid, Typography, Paper, Container } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);


  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = () => {

  }

  const handleChange = () => {

  }

  return (
    <Container component="main" maxWidth="xs" >
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography variant="h5">{isSignup ? 'Sign Up': 'Sign In'}</Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                </>
              )
            }
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth;