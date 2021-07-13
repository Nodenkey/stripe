import React, {useContext} from 'react';
import {NavLink, NavWrapper} from "../styles/navStyles";
import {AuthContext} from "../context/auth";
import firebase from "gatsby-plugin-firebase";
import {useChangeLocation} from "../hooks/changeLocation";

const Nav = () => {
        const {redirect} = useChangeLocation();
        //bring context
        const {user} = useContext(AuthContext);

        //logout
        const handleLogout = async () => {
            await firebase.auth().signOut();
            await redirect('/login')
        }

        return (
            <NavWrapper>
                <NavLink to='/'>Nii</NavLink>
                <div>
                    {!user && <NavLink to='/login'>Login</NavLink>}
                    {!user && <NavLink to='/register'>Register</NavLink>}
                    <NavLink to='/goodies'>Goodies</NavLink>
                    {user && <p onClick={handleLogout} style={{cursor: 'pointer'}}>Logout</p>}
                </div>
            </NavWrapper>
        );
    }
;

export default Nav;