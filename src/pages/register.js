import React, {useContext, useState} from 'react';
import Layout from "../components/layout";
import {IndexContainer, IndexMain, TierButton} from "../styles/indexStyles";
import {Form, Input, LoginContainer} from "../styles/loginStyles";
import firebase from 'gatsby-plugin-firebase';
import {AuthContext} from "../context/auth";
import {navigate} from "gatsby";

const Register = () => {
    const [data, setData] = useState({
        name: '',
        registerEmail: '',
        registerPassword: '',
        error: null,
    })

    const {setUser} = useContext(AuthContext);

    const handleChange = e => {
        const {name, value} = e.target;
        setData({...data, [name]: value})
    }
    
    const handleSubmit = async e => {
        e.preventDefault()
        setData({...data, error: null})
        try {
            const result = await firebase.auth().createUserWithEmailAndPassword(data.registerEmail, data.registerPassword)
            setUser(result)
            await navigate('/goodies')
        }catch(err) {
            setData({...data, error: err.message})
        }
    }
    return (
        <Layout>
            <IndexContainer>
                <IndexMain>
                    <LoginContainer>
                        <Form onSubmit={handleSubmit}>
                            <h1>Register</h1>
                            <label htmlFor='name'>
                                Name <br/>
                                <Input type='text' name='name' placeholder='Full name' value={data.name} onChange={handleChange} autocomplete="on"/> <br/>
                            </label>
                            <label htmlFor='registerEmail'>
                                Email <br/>
                                <Input type='email' name='registerEmail' placeholder='email@mail.com' value={data.registerEmail} onChange={handleChange} autocomplete="on"/> <br/>
                            </label>
                            <label htmlFor='registerPassword'>
                                Password <br/>
                                <Input type='password' name='registerPassword' placeholder='password' value={data.registerPassword} onChange={handleChange} autocomplete="on"/> <br/>
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

export default Register;