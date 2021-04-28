import React, { Component } from 'react'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utilis'

import './sign-in.styles.scss';

export default class SignIn extends Component {
    constructor(){
        super();
        this.state={
            email: '',
            password: ''
        }
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange= this.handleChange.bind(this);
    } 

    handleSubmit = (event) =>{
        event.preventDefault();

        this.setState({email:'', password: ''})
    }
    handleChange = (event) =>{
        const { value, name} = event.target;

        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" value={this.state.email} handleChange={this.handleChange} label="Email" required/>
            
                    <FormInput name="password" value={this.state.password} handleChange={this.handleChange} label="Password" required/>
      
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign in with Google{' '}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
