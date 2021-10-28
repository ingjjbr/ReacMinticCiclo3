import axios from 'axios';
import React from 'react';
import {GoogleLogin} from 'react-google-login';
import enlace from '../route/env';


export class Login extends React.Component{
    responseGoogle = (googleResp)=>{
        console.log(googleResp);
        axios.post(`http://localhost:3001/auth/google`,{token:googleResp.tokenId})
        .then(resp=>{
            console.log('token:',resp.data);
            sessionStorage.setItem('token',resp.data);
        })
        .catch(err=>console.log('error',err));
    }
    render(){
        return(

            <GoogleLogin
                clientId= {enlace}
                buttonText="Login with google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        );
    }
}