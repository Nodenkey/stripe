import React from 'react';
import {GlobalStyle} from "../styles/appGlobal";

const Layout = ({children}) => {
    return (
        <div>
            <GlobalStyle/>
            {children}
        </div>
    );
};

export default Layout;