import React from 'react';
import {window} from "browser-monads";

export const useChangeLocation = () => {
    const redirect = (direction) => {
        window.location = direction
    }
    return {redirect};
};

