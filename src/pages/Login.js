import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { googleProvider } from '../config/authMethods';
import socialMediaAuth from '../service/auth';
import web from './images/interview.svg';
import '../css/login.css';

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    
    const handleOnClick = (provider) =>{
        socialMediaAuth(provider).then( async res =>{
            console.log(res);
            
            const data = {
                name: res.displayName,
                email: res.email,
                verified: res.emailVerified,
                id: res.uid
            }
            if(typeof window !== "undefined"){
                await localStorage.setItem("userData", JSON.stringify(data));
            }
            setLoggedIn(true)
            console.log('LoggedIn')
        })
        .catch(err =>{
            console.log(err);
        })
        // console.log(res);
    }
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1> Welcome to 
                                    <strong className="brand-name"> StudentsMate </strong></h1>
                                <h2 className="my-3">
                                    Your All in one platform for managing your student life
                                </h2>
                                <div className="mt-3">
                                <Button variant="contained" color="primary" type="submit" onClick={() => handleOnClick(googleProvider)}>LogIn with Google</Button>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={web} className="img-fluid animated" alt="Common img"/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {loggedIn ? <Redirect to="/dashboard" />: ''}
        </>
    );
};

export default Login;