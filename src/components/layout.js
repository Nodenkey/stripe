import React from 'react';
import {GlobalStyle} from "../styles/appGlobal";
import Nav from "./nav";

const Layout = ({children}) => {
    return (
        <div>
            <GlobalStyle/>
            <Nav/>
            {children}
        </div>
    );
};

export default Layout;