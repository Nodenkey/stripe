import React from 'react';

export const useChangeLocation = () => {
    const redirect = (direction) => {
        if (typeof window !== undefined) {
            window.location = direction
        }
    }
    return {redirect};
};

