import React, {useContext} from 'react';
import Layout from "../components/layout";
import {IndexContainer, IndexMain} from "../styles/indexStyles";
import {AuthContext} from "../context/auth";
import {useChangeLocation} from "../hooks/changeLocation";

const Goodies = () => {
    //bring context
    const {user} = useContext(AuthContext);
    const {redirect} = useChangeLocation();

    console.log(user);

    if(!user) {
        redirect('/login')
        return null
    }
    return (
        <Layout>
            <IndexContainer>
                <IndexMain>
                    <h1>Daddy brought some goodies</h1>
                    <h1>🥳🥳🥳🥳🥳🥳🥳🥳</h1>
                </IndexMain>
            </IndexContainer>
        </Layout>
    );
};

export default Goodies;