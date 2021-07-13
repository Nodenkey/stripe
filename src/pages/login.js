import React, {useContext, useState} from 'react';
import Layout from "../components/layout";
import {IndexContainer, IndexMain, TierButton} from "../styles/indexStyles";
import {Form, Input, LoginContainer} from "../styles/loginStyles";
import firebase from "gatsby-plugin-firebase";
import {AuthContext} from "../context/auth";
import {navigate} from "gatsby";

const Login = () => {
    const [data, setData] = useState({
        loginEmail: '',
        loginPassword: '',
        error: null
    });

    //bring context
    const {setUser} = useContext(AuthContext);

    const handleChange = e => {
        const {name, value} = e.target;
        setData({...data, [name] : value})
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setData({...data, error: null})
        try {
            const result = await firebase.auth().signInWithEmailAndPassword(data.loginEmail, data.loginPassword)
            setUser(result)
            await typeof window !== undefined && navigate('/login')

        }catch (err) {
            setData({...data, error: err.message})
        }
    }
    return (
        <Layout>
            <IndexContainer>
                <IndexMain>
                    <LoginContainer>
                        <Form onSubmit={handleSubmit}>
                            <h1>Login</h1>
                            <label htmlFor='loginEmail'>
                                Email <br/>
                                <Input type='email' name='loginEmail' placeholder='email@mail.com' autocomplete="on" onChange={handleChange} value={data.loginEmail}/> <br/>
                            </label>
                            <label htmlFor='loginPassword'>
                                Password <br/>
                                <Input type='password' name='loginPassword' placeholder='password' autocomplete="on" onChange={handleChange} value={data.loginPassword}/> <br/>
                            </label>
                            {
                                data.error && <p style={{color: 'red'}}>{data.error}</p>
                            }
                            <TierButton>Submit</TierButton>
                        </Form>
                    </LoginContainer>
                </IndexMain>
            </IndexContainer>
        </Layout>
    );
};

export default Login;